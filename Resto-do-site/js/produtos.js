(function () {
    var mercado = JSON.parse(localStorage.getItem('mercado-selecionado'))
    var nomeCorredor = localStorage.getItem("nome-corredor");
    var nomeMercado = JSON.parse(localStorage.getItem('mercado-selecionado')).nome
    var fotoMercado = document.querySelector('#Market-image')
    var idSupermarket = localStorage.getItem('codigo-supermercado');
    var result = getprodutosNome(nomeCorredor, idSupermarket);
    var divprodutos = document.getElementById('produtos');
    var produtosDinamico = '';
    fotoMercado.setAttribute('src', mercado.image_link)
    document.getElementById('Market-title').innerHTML = nomeMercado;
    document.getElementById('Market-Name').innerHTML = nomeCorredor;
    //var produtos = getProductsByCategoryAndSupermarketId();
    // var produtosTotais = document.getElementsByClassName("simpleCart_quantity");
   
    // console.log(numc);
    result.produtos.forEach(function (produto) {

        produtosDinamico += `<div class="one-third column">`
        produtosDinamico +=   `<div class="simpleCart_shelfItem">`
        produtosDinamico +=       `<img src="${produto.imageLink}" class="item_thumb" />`
        produtosDinamico +=       `<h5 class="item_name">${produto.name}</h5>`
        produtosDinamico +=        `<h5 class="item_price"> R$ ${produto.value}</h5>`
        produtosDinamico +=       `<div class="qty" style="display:"none;">Quant. <input type="number" min="1" value="1" class="item_Quantity"> </div>`
        produtosDinamico +=       `<a onclick="" class="item_add button u-pull-right" href="javascript:;">Adicionar </a>`
        produtosDinamico +=   `</div>`
        produtosDinamico += `</div>`
        
    });
    divprodutos.innerHTML = produtosDinamico;


    // console.log(produtosDinamico);

  
})()


// Transição do botão de quantidade
function AparecerQty() {

    var total          = document.querySelector("#cart > div > div.four.columns > div > div.cart_info_item.cart_total > b > div").innerHTML;
    var ItemTotal      = document.querySelector("#cart > div > div.eight.columns > div > div").childNodes;
    var Localstr = localStorage.getItem('simpleCart_items');
    var numv = JSON.parse(localStorage.getItem("simpleCart_items"));
    
    for(var i=1; i <= ItemTotal.length; i++) {

       var SubVal = ItemTotal[i].childNodes
       var NomeProd = SubVal[0].innerText
       var PreçoProd = SubVal[1].innerText
       var quantidadeProd = SubVal[3].innerText
       var totalProd = SubVal[5].innerText
       var tal = document.querySelector("#seila");
       tal.innerHTML = NomeProd + PreçoProd + quantidadeProd + totalProd;
       var eas = [NomeProd , PreçoProd , quantidadeProd , totalProd , total]
       console.log(eas);
        }
    
        return eas;
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