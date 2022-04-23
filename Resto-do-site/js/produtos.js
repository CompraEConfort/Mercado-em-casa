(function () {

    var nomeCorredor = localStorage.getItem("nome-corredor");
    var idSupermarket = localStorage.getItem('codigo-supermercado');
    var result = getprodutosNome(nomeCorredor, idSupermarket);
    console.log(result);
    //var produtos = getProductsByCategoryAndSupermarketId();
    var divprodutos = document.getElementById('produtos');
    var produtosDinamico = '';
    document.getElementById('Market-title').innerHTML = nomeCorredor;
    // document.getElementById('Market-Name').innerHTML = nomeCorredor;

    result.produtos.forEach(function (produto) {
        console.log(produto)

        produtosDinamico += `<div class="one-third column">`
        produtosDinamico +=   `<div class="simpleCart_shelfItem">`
        produtosDinamico +=       `<img src="${produto.imageLink}" class="item_thumb" />`
        produtosDinamico +=       `<h5 class="item_name">${produto.name}</h5>`
        produtosDinamico +=       `<div class="qty">QTY</div><input type="number" value="1" class="item_Quantity">`
        produtosDinamico +=       `<span class="item_price">${produto.value}</span>`
        produtosDinamico +=       `<a class="item_add button u-pull-right" href="javascript:;"> Adicionar ao carrinho </a>`
        produtosDinamico +=   `</div>`
        produtosDinamico += `</div>`

    });
    console.log("Após a chamada da function")
    divprodutos.innerHTML = produtosDinamico;
})()



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