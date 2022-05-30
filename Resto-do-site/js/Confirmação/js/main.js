// import { AparecerQty } from '../../produtos';
(function($) {

	"use strict";

	$('[data-toggle="tooltip"]').tooltip()

})(jQuery);

(function () {
    
    var nomeCorredor = localStorage.getItem("nome-corredor");
    var idSupermarket = localStorage.getItem('codigo-supermercado');
    var numv = JSON.stringify( localStorage.getItem("simpleCart_items"));
    var produtosTotais = document.getElementsByClassName("simpleCart_items");
    var divprodutos = document.getElementById('ConfirmForm');
    var result = getprodutosNome(nomeCorredor, idSupermarket);
    var produtosDinamico = '';
	var cart = JSON.parse(localStorage['simpleCart_items']);
    var arr = produtosTotais[0]
    
    
	
    // document.getElementById('Market-title').innerHTML = nomeCorredor;

	console.log(produtosTotais);
    // result.Produto.forEach(function (produto) {
		
	// 	produtosDinamico += `	<ul>`
	// 	produtosDinamico += `		<li></li>`
	// 	produtosDinamico += `	</ul>`
		
    // });
	
    // divprodutos.innerHTML = arr;	 
	
})()

