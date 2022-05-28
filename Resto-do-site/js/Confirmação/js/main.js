(function($) {

	"use strict";

	$('[data-toggle="tooltip"]').tooltip()

})(jQuery);

(function () {

    var nomeCorredor = localStorage.getItem("nome-corredor");
    var idSupermarket = localStorage.getItem('codigo-supermercado');
    var numv = JSON.stringify( localStorage.getItem("simpleCart_items"));
    var produtosTotais = document.getElementsByClassName("item-name");
    var divprodutos = document.getElementById('ConfirmForm');
    var result = getprodutosNome(nomeCorredor, idSupermarket);
    var produtosDinamico = '';
	var cart = JSON.parse(localStorage['simpleCart_items']);
	
    // document.getElementById('Market-title').innerHTML = nomeCorredor;

	
    result.produtos.forEach(function (produto) {
		
		produtosDinamico += `	<ul>`
		produtosDinamico += `		<li> <img src="${produto.imageLink}" alt="" width="50" height="50"> ${produto.name} <span>R$${produto.value}</span></li>`
		produtosDinamico += `	</ul>`
		
    });
	
    divprodutos.innerHTML = produtosDinamico;	 
	
})()



$(document).ready(function() {	
   
    
	var output = ''; 
    let objectFromLS = [{produto : localStorage.getItem("simpleCart_items")}];
    var convert = objectFromLS[0].produto


	var PATTERN = /quantity/,
    filtered = convert.filter(function (str) { return PATTERN.test(str); });


const names = objectFromLS.filter((el) => {
   
}); 



console.log(filtered);
// console.log(names);

	$('#ConfirmForm').html(PATTERN);
	// console.log(JSON.parse(names));


});
