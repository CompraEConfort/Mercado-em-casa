var inputBuscar = document.getElementById('supermarkets')

function buscar() {
    var nomeSupermercado = inputBuscar.value
    localStorage.setItem("nome-supermercado", nomeSupermercado);
}
// js para o nome do mercado