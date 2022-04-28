(function () {
    var codigoMercado = localStorage.getItem("codigo-supermercado");
    var corredores = getCorredoresNome(codigoMercado);
    var divCorredores = document.getElementById('corredores');
    var CorredoresDinamico = '';

    corredores.corredores.forEach(element => {
        console.log(element)


        CorredoresDinamico += `<div class="col-md-3 col-sm-6">`
        CorredoresDinamico +=    `<div class="single-shop-product">`
        CorredoresDinamico +=        `<div class="product-upper">`
        CorredoresDinamico +=            `<img src="${element.imageLink}" alt="">`
        CorredoresDinamico +=        `</div>`
        CorredoresDinamico +=        `<h2><a href="../Resto-do-site/index.html" onclick="guardarNomeCorredor('${element.nome}')">${element.nome}</a></h2>`
        CorredoresDinamico +=        `<div class="product-carousel-price">`
        CorredoresDinamico +=        `</div>`
        CorredoresDinamico +=    `</div>`
        CorredoresDinamico += `</div>`

    });
    console.log("Após a chamada da function")
    divCorredores.innerHTML = CorredoresDinamico;
})()