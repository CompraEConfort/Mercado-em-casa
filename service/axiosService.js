

function cadastroService (requestBody) {
    axios.post('http://localhost:3000/usuarios/cadastro', requestBody)
    .then(res => {
        console.log(res)
        window.location ("http://localhost/Mercado-em-casa/Telalogin/Perfil.html")
    })
    .catch(err => {
        console.log(err)
        alert("Falha ao Cadastrar : Dados incorretos ou já existentes") 
    })
}

function loginService (requestBody) {
    axios.post('http://localhost:3000/usuarios/login', requestBody)
    .then(res => {
        console.log(res)
        
    })
    .catch(err => {
        console.log(err)
        //alert("Falha no login, Usuario ou senha invalidos") 
    })
}
function cadastroMercadoService (requestBody) {
    axios.post('http://localhost:3000/supermercados/cadastro', requestBody)
    .then(res => {
        console.log(res)
        window.location.href = "http://localhost/Mercado-em-casa/Resto-do-site/produtos.html?"
    })
    .catch(err => {
        console.log(err)
    })
}
async function productsByCategoryService(requestBody) {
    await axios.get('http://localhost:3000/produtos', requestBody)
    .then(res => {
        console.log(res)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}
