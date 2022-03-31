function getService(requestBody) {
    axios.get('http://localhost:3000/usuarios/Profile', requestBody)
        .then(res => {
            console.log(res)
            alert("Logado com sucesso !")
            //window.location.href = "http://localhost:5500/Telalogin/Perfil.html"

            //const token = res.token
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
function cadastroService(requestBody) {
    axios.post('http://localhost:3000/usuarios/cadastro', requestBody)
        .then(res => {
            console.log(res)

            vnome = document.getElementById("cadastro-name").value;
            vemail = document.getElementById("cadastro-email").value;
          
            localStorage.nome = vnome;
            localStorage.email = vemail;
        
            alert("Cadastrado com sucesso !")
            window.location.href = 'http://localhost:5500/Telalogin/login.html'

        })
        .catch(err => {
            console.log(err)
            alert("Falha ao Cadastrar : Dados incorretos ou já existentes")
        })


}

//window.addEventListener("load", inicia);

function loginService(requestBody) {
    axios.post('http://localhost:3000/usuarios/login', requestBody)
        .then(res => {
            console.log(res)
            alert("Logado com sucesso !")
            // 1, Guardar o token no Cache/Local Storage
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            window.location.href = 'http://localhost:5500/Tela%20inicial/'
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

function alterarPerfilService(requestBody) {
    axios.patch('http://localhost:3000/usuarios/altPerfil', requestBody)
        .then(res => {
            console.log(res)
            alert("Atualizado com sucesso ! ")
            localStorage.setItem('user', JSON.stringify(res.data.usuarioAtualizado))
            // window.location ("http://localhost/Mercado-em-casa/Telalogin/Perfil.html")
        })
        .catch(err => {
            console.log(err)
            alert("Erro ao aualizar")
        })
}

function deletePerfilService(requestBody) {
    axios.delete('http://localhost:3000/usuarios/deletePerfil', {data: requestBody})
        .then(res => {
            console.log(res)
            alert("Deletado com sucesso ! ")
            localStorage.clear()
            window.location.href = "http://localhost:5500/Telalogin/login.html"
        })
        .catch(err => {
            console.log(err)
            alert("Erro ao Deletar")
        })
}

function profileService() {

    // Vai pegar o token do local storage
    // Vai montar a requisição com o token
    // Fazer a chamada ao endpoint GET usuarios/perfil/
    const token = localStorage.getItem('token')

    axios.get('http://localhost:3000/usuarios/perfil', {
        headers: {
            'authorization': token
        }
    })
        .then(res => {
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

function cadastroMercadoService(requestBody) {
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

function addProdutoService(requestBody){
    axios.post('http://localhost:3000/produtos/add', requestBody)
    .then(res => {


        nomeProduto = document.getElementById("add-produto").value;
        precoProduto = document.getElementById("add-preco").value;
        categoriaProduto = document.getElementById("add-categoria").value;
      
        localStorage.produto = nomeProduto;
        localStorage.preco = precoProduto;
        localStorage.categoria = categoriaProduto;
    
        alert("Adicionado com sucesso !")
        // window.location.href = 'http://localhost:5500/Telalogin/login.html'

    })
    .catch(err => {
        console.log(requestBody);
        console.log(err)
        alert("Falha ao Cadastrar : Dados incorretos ou já existentes")
    })
}

function getProdutosService(requestBody){
  return axios.get('http://localhost:3000/produtos', { params: requestBody})
.then(res => {

    console.log(res);
    return res.data.produtos

})
.catch(err => {
    console.log(err)
})
}

function deleteProdutosService(requestBody){
    return axios.delete('http://localhost:3000/produtos', { params: requestBody })
  .then(res => {
  
      console.log(res);
        alert('Produtos removidos com sucesso')
        
  window.location.reload()
  })
  .catch(err => {
      console.log(err)
      alert('Erro ao remover produtos')
  })
  }

  function updateProdutosService(requestBody){
    return axios.patch('http://localhost:3000/produtos', requestBody)
  .then(res => {
  
      console.log(res);
        alert('Produtos Atualizado Com Sucesso')
        
  window.location.reload()
  })
  .catch(err => {
      console.log(err)
      alert('Erro ao Atualizar Produtos')
  })
  }