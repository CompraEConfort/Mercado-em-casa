(function () {

    var nomeCorredor = localStorage.getItem("nome-corredor");
    // var nomeMercado = localStorage.getItem("nome-corredor");
    var idSupermarket = localStorage.getItem('codigo-supermercado');
    var result = getprodutosNome(nomeCorredor, idSupermarket);
    console.log(result);
    //var produtos = getProductsByCategoryAndSupermarketId();
    var divprodutos = document.getElementById('products-template');
    var produtosDinamico = '';
    // var quantidade = JSON.parse(localStorage.getItem("simpleCart_items"))
    document.getElementById('Market-title').innerHTML = nomeCorredor;
    var quantidade = document.getElementsByClassName('item-total').item(0);
   
    // document.getElementById('Market-Name').innerHTML = nomeMercado;

    result.produtos.forEach(function (produto) {

        produtosDinamico += `<div class="one-third column">`
        produtosDinamico +=   `<div class="simpleCart_shelfItem">`
        produtosDinamico +=       `<img src="${produto.imageLink}" class="item_thumb" />`
        produtosDinamico +=       `<h5 class="item_name">${produto.name}</h5>`
        produtosDinamico +=        `<h5 class="item_price"> R$ ${produto.value}</h5>`
        produtosDinamico +=       `<div id="qtys" class="qty" style="display:"none;">Quant. <input type="number" min="1" value="" class="item_Quantity"> </div>`
        produtosDinamico +=       `<a id="qtya" onclick="AparecerQty()" class="item_add button u-pull-right" href="javascript:;">Adicionar </a>`
        produtosDinamico +=   `</div>`
        produtosDinamico += `</div>`
        
    });
    divprodutos.innerHTML = produtosDinamico;

    console.log(quantidade);
  
})()

// Transição do botão de quantidade
function AparecerQty() {
    document.getElementById("qtys").style.display="flex";
    document.getElementById("qtya");
}


// antigo

// produtosDinamico +=  `<div class="col-lg-4 col-md-6 col-sm-6">`
// produtosDinamico +=      `<div class="product__item">`
// produtosDinamico +=         `<div class="product__item__pic set-bg">`
// produtosDinamico +=         `<img src="${element.imageLink}" alt="">`
// produtosDinamico +=            `<ul class="product__item__pic__hover">`
// produtosDinamico +=               `<li onclick="salvarProdutoNoCarrinho(${element.idProduto},${element.imageLink},${element.name},${element.value})"><i class="fa fa-shopping-cart"></i></li>`
// produtosDinamico +=            `</ul>`
// produtosDinamico +=         `</div>`
// produtosDinamico +=         `<div class="product__item__text">`
// produtosDinamico +=            `<h6><a href="#">${element.name}</a></h6>`
// produtosDinamico +=            `<h5>R$ ${element.value}</h5>`
// produtosDinamico +=         `</div>`
// produtosDinamico +=      `</div>`
// produtosDinamico +=  `</div>`