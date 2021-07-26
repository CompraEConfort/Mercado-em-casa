(function () {
    var nomeCidade = localStorage.getItem("nome-cidade");
    var supermarkets = getSupermercadoNome(nomeCidade);
    var divSupermarkets = document.getElementById('supermarkets');
    var supermercadosDinamico = '';

    supermarkets.supermercados.forEach(element => {
    // supermarkets.forEach(element => {
        console.log(element)

        supermercadosDinamico += `<div class="col-md-3 col-sm-6">`
        supermercadosDinamico +=    `<div class="single-shop-product">`
        supermercadosDinamico +=        `<div class="product-upper">`
        supermercadosDinamico +=            `<img src="${element.imageLink}" alt="">`
        supermercadosDinamico +=        `</div>`
        supermercadosDinamico +=        `<h2><a href="./Corredores.html" onclick="guardarCodigoSupermercado(${element.idSupermercado})">${element.nome}</a></h2>`
        supermercadosDinamico +=        `<div class="product-carousel-price">`
        supermercadosDinamico +=        `</div>`
        supermercadosDinamico +=    `</div>`
        supermercadosDinamico += `</div>`

    });
    console.log("chamada da function")
    divSupermarkets.innerHTML = supermercadosDinamico;
})()