// var nomeproduto = document.querySelector("#myTable");
// var precoproduto = document.querySelector("#myTable2");
// var categoriaproduto = document.querySelector("#myTable4");


// nomeproduto.innerHTML = localStorage.produto;
// precoproduto.innerHTML = localStorage.preco;
// // nomeproduto.innerHTML = localStorage.produto;
// categoriaproduto.innerHTML = localStorage.categoria;
function displayProducts() {
  var requestBody = {
    id_supermarket: 7
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
var buttons = `<a href="#editEmployeeModal" class="edit" data-toggle="modal" onclick="preencherForm(${produto})">
  <i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
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
  newRow.insertCell(5).innerHTML = buttons;
}

function preencherForm (produto) {
var nomeproduto = document.querySelector("#nomeproduto")
var precoproduto = document.querySelector("#precoproduto")
var imagemproduto = document.querySelector("#imagemproduto")
var categoriaproduto = document.querySelector("#categoriaproduto")

nomeproduto.value = produto.name
precoproduto = produto.value
imagemproduto = produto.image_link
categoriaproduto.value = produto.category

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


// (function () {

//     var nomeCorredor = localStorage.getItem("produto");
//     var produtosAdd = getprodutosName(nomeCorredor);
//     var trprodutos = document.getElementById('nomeProdutos');
//     var produtosAddDinamico = '';

//     produtosAdd.produtos.forEach(element => {
//         console.log(element)

  
//     produtosAddDinamico += `<td>`
//     produtosAddDinamico +=     `<span class="custom-checkbox">`
//     produtosAddDinamico +=  `<input type="checkbox" id="checkbox1" name="options[]" value="1">`
//     produtosAddDinamico +=  `<label for="checkbox1"></label>`
//     produtosAddDinamico +=  `</span>`
//     produtosAddDinamico +=  `</td>`
//     produtosAddDinamico +=  `<td>${element.name}</td>`
//     produtosAddDinamico +=  `<td>${element.value}</td>`
//     produtosAddDinamico +=  `<td>${element.image_link}</td>`
//     produtosAddDinamico +=  `<td>${element.category}</td>`
//     produtosAddDinamico +=  `<td>`
//     produtosAddDinamico +=      `<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>`
//     produtosAddDinamico +=      `<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>`
//     produtosAddDinamico +=  `</td>`
  
                    
//     });
//     console.log("Após a chamada da function")
//     trprodutos.innerHTML = produtosAddDinamico;
// })()