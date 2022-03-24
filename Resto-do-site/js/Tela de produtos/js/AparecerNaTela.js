// (function () {

//     var nomeCorredor = localStorage.getItem("produto");
//     var produtosAdd = getprodutosNome(nomeCorredor);
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