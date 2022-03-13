

function cadastroService (requestBody) {
    axios.post('http://localhost:3000/usuarios/cadastro', requestBody)
    .then(res => {
        console.log(res)
       // window.location ("http://localhost/Mercado-em-casa/Telalogin/Perfil.html")
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
        alert("Logado com sucesso !")
        const token = res.token
        // 1, Guardar o token no Cache/Local Storage
        // 2, Fazer o redirect para tela
        
        // 2 PARTE
        // Vai pegar o token do local storage
        // Vai montar a requisição com o token
        // Fazer a chamada ao endpoint GET usuarios/perfil/
        // Pegar o body/corpo da requisição que irá conter as informações do usuário
        // Preencher os campos da tela com as informações do usuário, (Foto, nome e etc)
    })
    .catch(err => {
        console.log(err)
        alert("Falha no login, Usuario ou senha invalidos") 
    })
}

function profileService() {
    // Vai pegar o token do local storage
    // Vai montar a requisição com o token
    // Fazer a chamada ao endpoint GET usuarios/perfil/
    
    await axios.get('http://localhost:3000/usuarios/perfil', {
        headers: {
          'authorization': `Bearer ${token}`
        }
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}

function cadastroMercadoService (requestBody) {
    axios.post('http://localhost:3000/supermercados/cadastro', requestBody)
    .then(res => {
        console.log(res)
       // window.location.href = "http://localhost/Mercado-em-casa/Resto-do-site/produtos.html?"
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
