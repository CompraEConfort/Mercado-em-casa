// var nomeproduto = document.querySelector("#myTable");
// var precoproduto = document.querySelector("#myTable2");
// var categoriaproduto = document.querySelector("#myTable4");


// nomeproduto.innerHTML = localStorage.produto;
// precoproduto.innerHTML = localStorage.preco;
// // nomeproduto.innerHTML = localStorage.produto;
// categoriaproduto.innerHTML = localStorage.categoria;
function displayProducts() {
  var requestBody = {
    id_supermarket: JSON.parse(localStorage.getItem('userMercado'))?.id_supermarket
  }
  getProdutosService(requestBody)
  .then(produtos => {
    produtos.forEach((el, index) => {
      addProdutoInTable(el, index)
    });
  })
}
displayProducts()


var tableRef = document.querySelector('#myTable')



function addProdutoInTable (produto, index) {
  var checkbox = `<span class="custom-checkbox">
<input type="checkbox" id="checkbox${index}" name="options[]" value="${produto.id_produto}">
<label for="checkbox${index}"></label>
</span>`
var buttons = `<a href="#editEmployeeModal" class="edit" data-toggle="modal">
  <i class="material-icons" title="Edit">&#xE254;</i>
</a>
`

{/* delete button
 <a href="#deleteEmployeeModal" class="delete" data-toggle="modal">
  <i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
</a> */}

  var newRow = tableRef.insertRow(-1);
  newRow.insertCell(0).innerHTML = checkbox;
  newRow.insertCell(1).innerHTML = produto.nome;
  newRow.insertCell(2).innerHTML = produto.preco;
  newRow.insertCell(3).innerHTML = produto.imagem_produto;
  newRow.insertCell(4).innerHTML = produto.categoria;
  var actions = newRow.insertCell(5);
  actions.innerHTML = buttons;
  var editButton = actions.querySelector('.edit')
  editButton?.addEventListener('click', (event) => {
    event.preventDefault()
    preencherForm(produto)
  })
}


function preencherForm (produto) {
  console.log('o prod: ', produto);
  localStorage.setItem('prodTemp', JSON.stringify(produto))

  var nomeproduto = document.querySelector("#alt-produto")
  var precoproduto = document.querySelector("#alt-preco")
  var imagemproduto = document.querySelector("#alt-imagem")
  var categoriaproduto = document.querySelector("#alt-categoria")

  nomeproduto.value = produto.nome
  precoproduto.value = produto.preco
  imagemproduto.value = produto.imagem_produto
  categoriaproduto.value = produto.categoria

}

var deleteForm = document.querySelector("#deleteForm")
deleteForm.addEventListener('submit', function (event) {
  event.preventDefault()

  var checkboxes = tableRef.querySelectorAll('input[type="checkbox"]')
  console.log("checkboxes", checkboxes);
  var selectedIds = Array.from(checkboxes)
    // filtra os checkboxes pelos que estão selecionados
    .filter(el => el.checked)
    // transforma o array de inputs em array de numeros, no caso os ids
    .map(el => el.value)
  console.log("filtered checkboxes", selectedIds);

  var requestBody = {
    ids: selectedIds
  }
  deleteProdutosService(requestBody)
})

