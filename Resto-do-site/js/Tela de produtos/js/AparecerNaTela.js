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
var buttons = `<a href="#editEmployeeModal" class="btn btn-info" data-toggle="modal" style = "color: #fff; font-size: 13px; border-radius: 2px; outline: none !important; width: 95px;">
  <i class="material-icons" style="float:left; font-size: 21px; margin-right: 5px; margin-left: auto;" title="Edit">&#xE254;</i>
  <span style=" float: left; margin-top: 2px;" >Editar</span>
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
  var editButton = actions.querySelector('.btn-info')
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

