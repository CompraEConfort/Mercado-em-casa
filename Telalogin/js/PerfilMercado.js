var userMercado = JSON.parse(localStorage.getItem('userMercado'))

var nome = document.querySelector("#alt-namemercado")
var email = document.querySelector("#alt-emailmercado")
var cnpj =document.querySelector("#alt-cnpjmercado")
var endereco = document.querySelector("#alt-enderecomercado")
var cidade = document.querySelector("#alt-cidademercado")
var bairro = document.querySelector("#alt-bairromercado")
var cep = document.querySelector("#alt-cepmercado")
var telefone = document.querySelector("#alt-telefonemercado")
// var image_link = document.querySelector ("alt-imagemmercado")

console.log(userMercado);

nome.value = userMercado?.name
email.value = userMercado?.email
cnpj.value = userMercado?.cnpj
endereco.value = userMercado?.address
cidade.value = userMercado?.city
bairro.value = userMercado?.neighborhood
cep.value = userMercado?.cep
telefone.value = userMercado?.telefone
// image_link.value = userMercado?.image_link

