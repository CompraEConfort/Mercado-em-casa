// Esconder barra do login 

function esconderlogin(){
    if (user == null){
        document.getElementById("btnlogado").style.display="none";
        document.getElementById("btncadastro").style.display="block";
    } else {
        document.getElementById("btnlogado").style.display="block";
        document.getElementById("btncadastro").style.display="none";    
    }
  }

// Botão de deslogar

function deslogarPerfil () { 
    
    if (confirm('Realmente Deseja Sair ?')) {
        
        localStorage.removeItem ("user");
        localStorage.removeItem ("token");
        localStorage.removeItem ("tokenMerc");
        localStorage.removeItem ("userMercado");
        window.location = "http://localhost:5500/Telalogin/login.html";

        return false;
    }else{
        
    }
}
        
// Função para aparecer as fotos no header 

var userPic = document.querySelector('#user-pic')
var userPicMenu = document.querySelector('#user-picMenu')
var username = document.querySelector('#user-name')

var user = JSON.parse(localStorage.getItem('user'))

userPic.setAttribute('src', user.imagem)
username.innerHTML += user.name
userPicMenu.setAttribute('src', user.imagem)

