(function () {

    var nomeCorredor = localStorage.getItem("nome-corredor");
    var produtos = getprodutosNome(nomeCorredor);
    //var produtos = getProductsByCategoryAndSupermarketId();
    var divprodutos = document.getElementById('products-template');
    var produtosDinamico = '';
    document.getElementById('Market-title').innerHTML = nomeCorredor;
    // document.getElementById('Market-Name').innerHTML = nomeCorredor;

    produtos.produtos.forEach(element => {
        console.log(element)

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

        produtosDinamico +=  `<div class="column" style="width: 30.6666666667%;">`
        produtosDinamico +=     `<div class="simpleCart_shelfItem">`
        produtosDinamico +=         `<img src="${element.imageLink}"/>`
        produtosDinamico +=         `<div class="row">`
        produtosDinamico +=            `<h5 class="item_name"></h5>`
        produtosDinamico +=             `<div class="simpleStore_getDetail_container">`
        produtosDinamico +=               `<span class="item_price"></span>`
        produtosDinamico +=            `</div>`
        produtosDinamico +=               `<div class="simpleStore_getDetail_container">`
        produtosDinamico +=                   `<a class="button u-pull-right simpleStore_getDetail">Adicionar</a>`
        produtosDinamico +=                 `</div>`
        produtosDinamico +=            `</div>`
        produtosDinamico +=         `</div>`
        produtosDinamico +=      `</div>`
    
            

    });
    console.log("Após a chamada da function")
    divprodutos.innerHTML = produtosDinamico;
})()

