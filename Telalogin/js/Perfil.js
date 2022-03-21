(function () {
    var vemail = localStorage.getItem("email");
    var infousuario = getPerfil(vemail);
    var divinfuser = document.getElementById('infuser');
    var perfilDinamico = '';
alert("acontece tudo")
    infousuario.usuario.forEach(element => {
    // supermarkets.forEach(element   => {
        console.log(element)

        /*supermercadosDinamico += `<div class="col-md-3 col-sm-6">`
        supermercadosDinamico +=    `<div class="single-shop-product">`
        supermercadosDinamico +=        `<div class="product-upper">`
        supermercadosDinamico +=            `<img src="${element.imageLink}" alt="">`
        supermercadosDinamico +=        `</div>`
        supermercadosDinamico +=        `<h2><a href="./Corredores.html" onclick="guardarCodigoSupermercado(${element.idSupermercado})">${element.nome}</a></h2>`
        supermercadosDinamico +=        `<div class="product-carousel-price">`
        supermercadosDinamico +=        `</div>`
        supermercadosDinamico +=    `</div>`
        supermercadosDinamico += `</div>`
*/
        perfilDinamico += `<div class="card-top">`
        perfilDinamico +=        `<h1 class="title">Perfil do Usuário</h1>`
        perfilDinamico +=            `<h2>Bem-vindo ao Mecado em Casa </h2> `
        perfilDinamico +=    `<img src="${element.img}" alt="minha figura"/> `
        perfilDinamico +=        `<h1 class="title">Perfil</h1>`
        perfilDinamico +=            `<h2 id="boasvindas" style="font-size: 20px;"> `
        perfilDinamico +=                `<h3 id="emailperfil" style="font-size: 12px; text-align: left;">`
        perfilDinamico +=                `<h3 id="enderecoperfil" style="font-size: 12px; text-align: left;">`
        perfilDinamico +=                `<h3 id="telefoneperfil" style="font-size: 12px; text-align: left;">`
        perfilDinamico += `</div>`
    });
    console.log("chamada da function")
    divinfuser.innerHTML = perfilDinamico;
})()