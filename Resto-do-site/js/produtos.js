(function () {
    var mercado = JSON.parse(localStorage.getItem('mercado-selecionado'))
    var nomeCorredor = localStorage.getItem("nome-corredor");
    var nomeMercado = JSON.parse(localStorage.getItem('mercado-selecionado')).nome
    var fotoMercado = document.querySelector('#Market-image')
    var idSupermarket = localStorage.getItem('codigo-supermercado');
    var result = getprodutosNome(nomeCorredor, idSupermarket);
    var divprodutos = document.getElementById('produtos');
    var produtosDinamico = '';
    var numv = localStorage.getItem("simpleCart_items");
    fotoMercado.setAttribute('src', mercado.image_link)
    document.getElementById('Market-title').innerHTML = nomeMercado;
    document.getElementById('Market-Name').innerHTML = nomeCorredor;
    //var produtos = getProductsByCategoryAndSupermarketId();
    // var produtosTotais = document.getElementsByClassName("simpleCart_quantity");

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
    
        // var pdid = localStorage.getItem("dataKey");
        // const element = document.getElementById(pdid);
        // var testpo = document.getElementById("seila");
        // alert(element);
        // testpo.innerText = element;
        // console.log(element);

       
    var NomeProd       = "ItemID-" + localStorage.getItem("ID_PRODUTOS_CARRINHO") + 0;
    var PreçoProd      = "ItemID-" + localStorage.getItem("ID_PRODUTOS_CARRINHO") + 1;
    var DecrementoProd = "ItemID-" + localStorage.getItem("ID_PRODUTOS_CARRINHO") + 2;
    var quantidadeProd = "ItemID-" + localStorage.getItem("ID_PRODUTOS_CARRINHO") + 3;
    var incrementoProd = "ItemID-" + localStorage.getItem("ID_PRODUTOS_CARRINHO") + 4;
    var totalProd      = "ItemID-" + localStorage.getItem("ID_PRODUTOS_CARRINHO") + 5;
    var removerProd    = "ItemID-" + localStorage.getItem("ID_PRODUTOS_CARRINHO") + 6;
    var total          = document.querySelector("#cart > div > div.four.columns > div > div.cart_info_item.cart_total > b > div").innerHTML;
    var ItemTotal      = document.querySelector("#cart > div > div.eight.columns > div > div").childNodes;
    
    
    for(var i=1; i <= ItemTotal.length; i++) {

       var sr = ItemTotal[i].childNodes;
        console.log(sr)
        
        }

            
        // console.log(Ss);
        // console.log(ItemTotal , Array(7).innerText);

        //document.querySelector("#cart > div > div.four.columns > div > div.cart_info_item.cart_itemcount > div").innerHTML;

        // var ProdNome       = document.getElementById(NomeProd).innerHTML;
        // var ProdPreço      = document.getElementById(PreçoProd).innerHTML;
        // var ProdDecremento = document.getElementById(DecrementoProd).innerHTML;
        // var Prodquantidade = document.getElementById(quantidadeProd).innerHTML;
        // var Prodincremento = document.getElementById(incrementoProd).innerHTML;
        // var Prodtotal      = document.getElementById(totalProd).innerHTML;
        // var Prodremover    = document.getElementById(removerProd).innerHTML;

        // var ProdutoInfoHTML = 
        // "Nome: " + ProdNome + "<br>" + 
        // "Preço: " + ProdPreço + "<br>" +
        // "Quantidade: " + Prodquantidade + "<br>" +
        // "SubTotal: " + Prodtotal + "<br>" +
        // "Total: " + total + "<br>" +
        // "Total de Produtos: " + ItemTotal + "<br>";

        // let ProdutoInfoLOG = [
        // "Nome: " + ProdNome + "\n" ,
        // "Preço: " + ProdPreço + "\n" ,
        // "Quantidade: " + Prodquantidade + "\n" ,
        // "SubTotal: " + Prodtotal + "\n" ,
        // "Total: " + total + "\n" ,
        // "Total de Produtos: " + ItemTotal + "\n"
        // ];
        // var MostrarProd = document.getElementById("seila");
        
        // MostrarProd.innerHTML = ProdNome;
        
        
   
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