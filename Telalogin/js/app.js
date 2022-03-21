var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {

  body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function cadastroSubmit () {
    var name = $("#cadastro-name").val()
    var email = $("#cadastro-email").val()
    var password = $("#cadastro-password").val()
   // var imagem_link = $("#cadastro-imagem").val()

    var requestBody = {
        name: name,
        email: email,
        senha: password,
        //imagem: imagem_link,
    }
    cadastroService(requestBody)
}

function altSubmit () {
    var name = $("#alt-name").val()
    var endereco = $("#alt-endereco").val()
    var complemento = $("#alt-complemento").val()
    var cidade = $("#alt-cidade").val()
    var bairro = $("#alt-bairro").val()
    var cep = $("#alt-cep").val()
    var telefone = $("#alt-telefone").val()


    var requestBody = {
        name: name,
        endereco: endereco,
      complemento: complemento,
        cidade: cidade,
        bairro: bairro,
        cep: cep,
        telefone: telefone
    }
    alterarPerfilService(requestBody)

}

function deletePerfil () {

    deletePerfilService (requestBody)
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


/* botão de upar imagens */

var btnClose = document.querySelector('.close-preview-js');
var output = document.getElementById("new");
var loaderFile = function(event){
var reader = new FileReader();
      reader.onload = function() {
output.style.display = "block";
btnClose.style.display = "block";
output.style.backgroundImage = "url("+reader.result+")";
  }
reader.readAsDataURL(event.target.files[0]);
}

var editarAvatar = document.querySelector(".editar-content");
var buttonFile = document.getElementById("file-preview-js");

editarAvatar.addEventListener("click", function(){
buttonFile.click();
});

btnClose.addEventListener("click", function(){
btnClose.style.display = "none";
output.style.backgroundImage = "url('')";
document.getElementById("file-preview-js").value = "";
});


