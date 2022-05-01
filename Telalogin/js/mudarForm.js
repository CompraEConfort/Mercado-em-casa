
// Esconder barra do login 
var user = JSON.parse(localStorage.getItem('user'))
var userMercado = JSON.parse(localStorage.getItem('userMercado'))
var userPic = document.querySelector('#userPerfil-pic')
var MercadoPic = document.querySelector('#mercadoPerfil-pic')


function mudarForm(){
    if (user == null && userMercado != null){
        document.getElementById("mudaruser").style.display="none";
        document.getElementById("mudarmercado").style.display="block";
    } else {
        document.getElementById("mudaruser").style.display="block";
        document.getElementById("mudarmercado").style.display="none";    
    }
    
    
  }

  