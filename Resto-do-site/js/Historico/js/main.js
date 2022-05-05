(function($) {

	"use strict";

	$('[data-toggle="tooltip"]').tooltip()

})(jQuery);

(function () {

    var nomeCorredor = localStorage.getItem("nome-corredor");
    var idSupermarket = localStorage.getItem('codigo-supermercado');
    var numv = localStorage.getItem("simpleCart_items");
    var produtosTotais = document.getElementsByClassName("simpleCart_quantity");
    var divprodutos = document.getElementById('ProdTR');
    var result = getprodutosNome(nomeCorredor, idSupermarket);
    var produtosDinamico = '';
    console.log(result);
    // document.getElementById('Market-title').innerHTML = nomeCorredor;

    // document.getElementById('Market-Name').innerHTML = nomeMercado;

    result.produtos.forEach(function (produto) {

        // produtosDinamico += `<div class="one-third column">`
        // produtosDinamico +=   `<div class="simpleCart_shelfItem">`
        // produtosDinamico +=       `<img src="${produto.imageLink}" class="item_thumb" />`
        // produtosDinamico +=       `<h5 class="item_name">${produto.name}</h5>`
        // produtosDinamico +=        `<h5 class="item_price"> R$ ${produto.value}</h5>`
        // produtosDinamico +=       `<div class="qty" style="display:"none;">Quant. <input type="text" min="1" value="" class="item_Quantity"> </div>`
        // produtosDinamico +=       `<a onclick="AparecerQty()" class="item_add button u-pull-right" href="javascript:;">Adicionar </a>`
        // produtosDinamico +=   `</div>`
        // produtosDinamico += `</div>`

		produtosDinamico += `<tr class="alert" role="alert">`
		produtosDinamico +=	`<td>`
		produtosDinamico +=	`  <label class="checkbox-wrap checkbox-primary">`			
		produtosDinamico +=	`      <input type="checkbox" checked>`
		produtosDinamico +=	`			  <span class="checkmark"></span>`
		produtosDinamico +=	`			</label>`
		produtosDinamico +=	`	</td>`
		produtosDinamico +=	`	<td>`
		produtosDinamico +=	`		<div class="img" style="background-image: url(${produto.imageLink});"></div>`
		produtosDinamico +=	`	</td>`
		produtosDinamico +=	`  <td>`
		produtosDinamico +=	`	  <div class="email">`
		produtosDinamico +=	`		  <span>${produto.name}</span>`
		produtosDinamico +=	`	  </div>`
		produtosDinamico +=	`  </td>`
		produtosDinamico +=	`  <td>R$${produto.value}</td>`
		produtosDinamico +=	`  <td class="quantity">`
		produtosDinamico +=	`	<div class="input-group">`
		produtosDinamico +=	`	2 `
		produtosDinamico +=	`  </div>`
		produtosDinamico += `    </td>`
		produtosDinamico += `    <td>R$${produto.value}</td>`
		produtosDinamico +=	`  <td>`
		produtosDinamico +=	`	  <button type="button" class="close" data-dismiss="alert" aria-label="Close">`
		produtosDinamico +=	`	<span aria-hidden="true"><i class="fa fa-close"></i></span>`
		produtosDinamico +=	`  </button>`
		produtosDinamico +=	`</td>`
		produtosDinamico += `</tr>`
        
    });
    divprodutos.innerHTML = produtosDinamico;
	console.log( document.getElementsByClassName("quantity form-control input-number"));
  
})()