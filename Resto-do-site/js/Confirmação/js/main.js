(function($) {

	"use strict";

	$('[data-toggle="tooltip"]').tooltip()

})(jQuery);

(function () {

    var nomeCorredor = localStorage.getItem("nome-corredor");
    var idSupermarket = localStorage.getItem('codigo-supermercado');
    var numv = JSON.stringify( localStorage.getItem("simpleCart_items"));
    var produtosTotais = document.getElementsByClassName("simpleCart_quantity");
    var divprodutos = document.getElementById('ConfirmForm');
    var result = getprodutosNome(nomeCorredor, idSupermarket);
    var produtosDinamico = '';
	var cart = JSON.parse(localStorage['simpleCart_items']);
	
    console.log(result);
    // document.getElementById('Market-title').innerHTML = nomeCorredor;

    // document.getElementById('Market-Name').innerHTML = nomeMercado;

    result.produtos.forEach(function (produto) {

 
		// produtosDinamico += `					<div class="checkout__order">`
		// produtosDinamico += `						<h4>Resumo do pedido</h4>`
		// produtosDinamico += `						<div class="checkout__order__products">Produtos <span>Total</span></div>`
		produtosDinamico += `						<ul>`
		produtosDinamico += `							<li> <img src="${produto.imageLink}" alt="" width="50" height="50"> ${produto.name} <span>R$${produto.value}</span></li>`
		produtosDinamico += `						</ul>`
		// produtosDinamico += `						<div class="checkout__order__subtotal">Subtotal <span>R$10.00</span></div>`
		// produtosDinamico += `						<div class="checkout__order__Cupom">Cupom <span>-R$0.00</span></div>`
		// produtosDinamico += `						<div class="checkout__order__Taxa">Taxa de entrega <span>R$0.00</span</div>`
		// produtosDinamico += `						<div class="checkout__order__total">Total <span>R$10.00</span></div>`
		// produtosDinamico += `						<div class="checkout__order__lugar">Endereço de entrega</div>`
		// produtosDinamico += `						<ul>`
		// produtosDinamico += `							<img src="./img/Mapa.png" alt="" width="60" height="60">`
		// produtosDinamico += `							<li>Rua Dez, Caetés II N° 21</li>`
		// produtosDinamico += `						</ul>`
		// produtosDinamico += `						<div class="checkout__order__cartao">Método de Pagamento</div>`
		// produtosDinamico += `						<ul>`
		// produtosDinamico += `							<img src="./img/Card.png" alt="" width="60" height="60">`
		// produtosDinamico += `							<li>MasterCard Final: 7452</li>`
		// produtosDinamico += `						</ul>`
		// produtosDinamico += `						<button type="submit" id="ler-pagina" class="site-btn">Voltar às Compras</button>`
		// produtosDinamico += `					</div>`
		
    });

    divprodutos.innerHTML = produtosDinamico;
	console.log( document.getElementsByClassName("quantity form-control input-number"));
	

		
	
		
	 
		console.log(cart);

  
})()

$(document).ready(function() {	
   

    // localStorage.setItem('testObject', JSON.stringify(testObject));
    
	var output = ''; 
    var objectFromLS = JSON.parse(localStorage.getItem('simpleCart_items'));
	for (var key in objectFromLS) {
        if (objectFromLS.hasOwnProperty(key)) {
	  output = output+(key + ':<br>' +objectFromLS[key])+'\n';
        }
	}
	$('#ConfirmForm').html(output);
	console.log(output);
});