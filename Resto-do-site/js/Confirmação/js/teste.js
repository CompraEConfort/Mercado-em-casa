
function TesteCarrinho() {
    
    var pdid = localStorage.getItem("dataKey");
    var element = document.getElementById(pdid);
    
    // alert(element);
    console.log(element);
    element.innerHTML= document.getElementById("copyright");
};
