var inputBuscar = document.getElementById('search-bar')
var linkBuscar = document.getElementById('link-buscar')

linkBuscar.addEventListener('click', buscar)

function buscar() {
    var nomeCidade = inputBuscar.value
    localStorage.setItem("nome-cidade", nomeCidade);
}

var userPic = document.querySelector('#user-pic')
var username = document.querySelector('#user-name')

var user = JSON.parse(localStorage.getItem('user'))

userPic.setAttribute('src', user.imagem)
username.innerHTML += user.name