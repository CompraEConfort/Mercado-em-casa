var user = JSON.parse(localStorage.getItem('user'))

var nome = document.querySelector("#alt-name")
var email = document.querySelector("#alt-email")
var endereco = document.querySelector("#alt-endereco")
var complemento = document.querySelector("#alt-complemento")
var cidade = document.querySelector("#alt-cidade")
var bairro = document.querySelector("#alt-bairro")
var cep = document.querySelector("#alt-cep")
var telefone = document.querySelector("#alt-telefone")

console.log(user);

nome.value = user?.nome
email.value = user?.email
endereco.value = user?.endereco
complemento.value = user?.complemento
cidade.value = user?.cidade
bairro.value = user?.bairro
cep.value = user?.cep
telefone.value = user?.telefone
