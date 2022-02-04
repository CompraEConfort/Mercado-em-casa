var inputBuscar = document.getElementById('search-bar')
var linkBuscar = document.getElementById('link-buscar')

linkBuscar.addEventListener('click', buscar)

function buscar() {
    var nomeCidade = inputBuscar.value
    localStorage.setItem("nome-cidade", nomeCidade);
}
