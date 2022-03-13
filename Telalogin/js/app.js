
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

//btnSignin.addEventListener("click", function () {
//   body.className = "sign-in-js"; 
//});

//btnSignup.addEventListener("click", function () {
//    body.className = "sign-up-js";
//})




function cadastroSubmit () {
    var name = $("#cadastro-name").val()
    var email = $("#cadastro-email").val()
    var password = $("#cadastro-password").val()
    var endereco = $("#cadastro-endereco").val()
    var complemento = $("#cadastro-complemento").val()
    var cidade = $("#cadastro-cidade").val()
    var bairro = $("#cadastro-bairro").val()
    var cep = $("#cadastro-cep").val()
    var telefone = $("#cadastro-telefone").val()

    var requestBody = {
        name: name,
        email: email,
        senha: password,
        endereco: endereco,
        complemento: complemento,
        cidade: cidade,
        bairro: bairro,
        cep: cep,
        telefone: telefone
    }
    cadastroService(requestBody)
    href=""
}

function loginSubmit () {
    var email = $("#login-email").val()
    var password = $("#login-password").val()

    var requestBody = {
        email: email,
        senha: password,
    }
    loginService(requestBody)
}

function cadastroMercadoSubmit () {
    var name = $("#cadastromercado-name").val()
    var email = $("#cadastromercado-email").val()
    var password = $("#cadastromercado-password").val()
    var cnpj = $("#cadastromercado-cnpj").val()
    var address = $("#cadastromercado-endereco").val()
    var city = $("#cadastromercado-cidade").val()
    var neighborhood = $("#cadastromercado-bairro").val()
    var cep = $("#cadastromercado-cep").val()
    var telefone = $("#cadastromercado-telefone").val()
    var imagem_link = $("#cadastromercado-imagem").val()

    var requestBody = {
        name: name,
        email: email,
        senha: password,
        cnpj: cnpj,
        endereco: address,
        cidade: city,
        bairro: neighborhood,
        cep: cep,
        telefone: telefone,
        imagem: imagem_link,
    }
    cadastroMercadoService(requestBody)
}

async function getProductsByCategoryAndSupermarketId() {
    var nomeCorredor = localStorage.getItem("nome-corredor");
    var codigoSupermercado = localStorage.getItem("codigo-supermercado");

    var requestBody = {
        nomeCorredor: nomeCorredor,
        codigoSupermercado: codigoSupermercado
    }
    return await productsByCategoryService(requestBody)
}