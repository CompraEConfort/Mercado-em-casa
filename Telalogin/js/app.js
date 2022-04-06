
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin?.addEventListener("click", function () {

  body.className = "sign-in-js"; 
});

btnSignup?.addEventListener("click", function () {
    body.className = "sign-up-js";
})

btnSignup?.addEventListener("click", function () {
    body.className = "sign-up-js";
})

/*      Usuário       */

function getSubmit () {
    var name = $("#cadastro-name").val()
    var email = $("#cadastro-email").val()
    var password = $("#cadastro-password").val()
    var endereco = $("#cadastro-endereco").val()
    var complemento = $("#cadastro-complemento").val()
    var cidade = $("#cadastro-cidade").val()
    var bairro = $("#cadastro-bairro").val()
    var cep = $("#cadastro-cep").val()
    var telefone = $("#cadastro-telefone").val()
    var imagem_link = $("#file-preview-js").val()

    var requestBody = {
        name: name,
        email: email,
        senha: password,
        endereco: endereco,
        complemento: complemento,
        cidade: cidade,
        bairro: bairro,
        cep: cep,
        telefone: telefone,
        imagem: imagem_link,
    }
    getService(requestBody)
}

function cadastroSubmit () {
    var name = $("#cadastro-name").val()
    var email = $("#cadastro-email").val()
    var password = $("#cadastro-password").val()
    var imagem_link = "https://i.imgur.com/5FmOYw7.png"

    var requestBody = {
        name: name,
        email: email,
        senha: password,
        imagem: imagem_link,
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
        telefone: telefone,
        id: JSON.parse(localStorage.getItem('user')).id
    }
    alterarPerfilService(requestBody)

}

function deleteSubmit () {
    if (confirm('Deseja Deletar Sua Conta?')) {
        var requestBody = {
            id: JSON.parse(localStorage.getItem('user')).id
        }
        deletePerfilService (requestBody)
    }
    
}

// pega a referencia dos form do login
var login_form = document.querySelector('#login-form')
// adicionda um evento onsubmit, e passa a função com o parametro event
// com esse parametro é possivel cancelar a ação default do submit que seria de recarregar
login_form?.addEventListener('submit', function (event) {
    event.preventDefault()

    // chama o loginsubmit
    loginSubmit()
})


function loginSubmit () {
    var email = $("#login-email").val()
    var password = $("#login-password").val()

    var requestBody = {
        email: email,
        senha: password,
    }
    // console.log('aqui');
    loginService(requestBody)
}

/*      Mercado       */

// pega a referencia dos form do login
var login_formMercado = document.querySelector('#login-formMercado')
// adicionda um evento onsubmit, e passa a função com o parametro event
// com esse parametro é possivel cancelar a ação default do submit que seria de recarregar
login_formMercado?.addEventListener('submit', function (event) {
    event.preventDefault()

    // chama o loginsubmit
    loginMercado()
})

function loginMercado () {
    var email = $("#loginMercado-email").val()
    var password = $("#loginMercado-password").val()

    var requestBody = {
        email: email,
        senha: password,
    }
    console.log(requestBody);
    loginMercadoService(requestBody)
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
    var image_link = $("#cadastromercado-imagem").val()

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
        imagem: image_link,
    }
    cadastroMercadoService(requestBody)
}

function updateMercado () {
    var name = $("#alt-namemercado").val()
    var endereco = $("#alt-enderecomercado").val()
    var cidade = $("#alt-cidademercado").val()
    var bairro = $("#alt-bairromercado").val()
    var cep = $("#alt-cepmercado").val()
    var telefone = $("#alt-telefonemercado").val()
    // var image_link = $("#alt-imagemmercado").val()


    var requestBody = {
        name: name,
        endereco: endereco,
        cidade: cidade,
        bairro: bairro,
        cep: cep,
        telefone: telefone,
        // imagem_link: image_link,
        id_supermarket: JSON.parse(localStorage.getItem('userMercado')).id_supermarket
    }
    UpdateMercadoService(requestBody)

}

function deleteMercado () {
    if (confirm('Deseja Deletar Sua Conta?')) {
        var requestBody = {
            email: JSON.parse(localStorage.getItem('userMercado')).email
        }
        deleteMercadoService (requestBody)
    }
    
}

/*      Produtos       */

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

editarAvatar?.addEventListener("click", function(){
buttonFile.click();
});

btnClose?.addEventListener("click", function(){
btnClose.style.display = "none";
output.style.backgroundImage = "url('')";
document.getElementById("file-preview-js").value = "";
});


