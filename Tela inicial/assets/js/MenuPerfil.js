// Variaveis para aparecer as fotos no header (Cliente)

var user = JSON.parse(localStorage.getItem('user'))

var userPic = document.querySelector('#user-pic')
var userPicMenu = document.querySelector('#user-picMenu')
var username = document.querySelector('#user-name')

// Variaveis para aparecer as fotos no header (Mercado) 

var userMercado = JSON.parse(localStorage.getItem('userMercado'))

var MercadoPic = document.querySelector('#user-pic')
var MercadoPicMenu = document.querySelector('#user-picMenu')
var Mercadoname = document.querySelector('#user-name')

// Esconder barra do login 

function esconderlogin(){
    if (user == null && userMercado == null){
        document.getElementById("btnlogado").style.display="none";
        document.getElementById("btncadastro").style.display="block";
    } else {
        document.getElementById("btnlogado").style.display="block";
        document.getElementById("btncadastro").style.display="none";    
    }
    if (user != null){
        Userfoto()
    } else {
        Mercadofoto()
    }
  }

  function Userfoto () {
    userPic.setAttribute('src', user.imagem)
    username.innerHTML += user.name
    userPicMenu.setAttribute('src', user.imagem)
    document.getElementById("txtAddProd").style.display="none";
    document.getElementById("imgAddProd").style.display="none";
}



function Mercadofoto () {
    MercadoPic.setAttribute('src', userMercado.image_link)
    Mercadoname.innerHTML += userMercado.name
    MercadoPicMenu.setAttribute('src', userMercado.image_link)
    
}

// Botão de deslogar

function deslogarPerfil () { 
    
    if (confirm('Realmente Deseja Sair ?')) {
        
        localStorage.removeItem ("user");
        localStorage.removeItem ("token");
        localStorage.removeItem ("tokenMerc");
        localStorage.removeItem ("userMercado");
        localStorage.removeItem ("email");
        localStorage.removeItem ("nome");
        window.location = "http://localhost:5500/Telalogin/login.html";

        return false;
    }else{
        
    }
}
        


