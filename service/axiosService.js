

function cadastroService (requestBody) {
    axios.post('http://localhost:3000/usuarios/cadastro', requestBody)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

function loginService (requestBody) {
    axios.post('http://localhost:3000/usuarios/login', requestBody)
    .then(res => {
        console.log(res)
        window.location ("http://localhost/Mercado-em-casa/Tela%20inicial/#busca")
    })
    .catch(err => {
        console.log(err)
    })
}
function cadastroMercadoService (requestBody) {
    axios.post('http://localhost:3000/supermercados/cadastro', requestBody)
    .then(res => {
        console.log(res)
        window.location ("http://localhost/Mercado-em-casa/Resto-do-site/produtos.html?")
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
