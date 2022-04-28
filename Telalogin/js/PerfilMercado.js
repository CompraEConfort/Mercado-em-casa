var userMercado = JSON.parse(localStorage.getItem('userMercado'))
// localStorage.setItem('userMercado', JSON.stringify(userMercado))

var nomeMercado = document.querySelector("#alt-namemercado")
var emailMercado = document.querySelector("#alt-emailmercado")
var cnpjMercado = document.querySelector("#alt-cnpjmercado")
var enderecoMercado = document.querySelector("#alt-enderecomercado")
var cidadeMercado = document.querySelector("#alt-cidademercado")
var bairroMercado = document.querySelector("#alt-bairromercado")
var cepMercado = document.querySelector("#alt-cepmercado")
var telefoneMercado = document.querySelector("#alt-telefonemercado")
// var imagem = document.querySelector("alt-imagemmercado")

console.log(userMercado);

nomeMercado.value = userMercado?.nome
emailMercado.value = userMercado?.email
cnpjMercado.value = userMercado?.cnpj
enderecoMercado.value = userMercado?.endereco
cidadeMercado.value = userMercado?.cidade
bairroMercado.value = userMercado?.bairro
cepMercado.value = userMercado?.cep
telefoneMercado.value = userMercado?.telefone
// imagem.value= userMercado?.image_link 

