
// Esconder barra do login 

function mudarForm(){
    if (user == null && userMercado != null){
        document.getElementById("mudaruser").style.display="none";
        document.getElementById("mudarmercado").style.display="block";
    } else {
        document.getElementById("mudaruser").style.display="block";
        document.getElementById("mudarmercado").style.display="none";    
    }
  }