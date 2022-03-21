/* function inicia(){
    if(localStorage.nome){
        var vnome=localStorage.nome;
        var vemail=localStorage.email;
        var vimagem=localStorage.imagem;
        var  vendereco=localStorage.endereco;
        var vcomplemento=localStorage.complemento;
        var vcidade=localStorage.cidade;
        var vbairro=localStorage.bairro;
        vcep=localStorage.cep;
        var vtelefone=localStorage.telefone;
        
        document.getElementById("boasvindas").innerHTML="Seja Bem-vindo(a) ao Seu Mercado em Casa "+vnome+"!!"+"<br>";
        document.getElementById("emailperfil").innerHTML= vemail;
        document.getElementById("imgperfil").innerHTML = '<img id = "imgperfil" src="'+vimagem+'" alt="minha figura"/>' ;
        document.getElementById("enderecoperfil").innerHTML= vendereco+", "+vcomplemento+", "+vbairro+", "+vcidade;
        document.getElementById("telefoneperfil").innerHTML= vtelefone;
    }
}
*/

function getService (requestBody) {
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
function cadastroService (requestBody) {
    axios.post('http://localhost:3000/usuarios/cadastro', requestBody)
    .then(res => {
        console.log(res)

        vnome=document.getElementById("cadastro-name").value;
        vemail=document.getElementById("cadastro-email").value;
        vimagem=document.getElementById("file-preview-js").value;
       /* vendereco=document.getElementById("cadastro-endereco").value;
        vcomplemento=document.getElementById("cadastro-complemento").value;
        vcidade=document.getElementById("cadastro-cidade").value;
        vbairro=document.getElementById("cadastro-bairro").value;
        vcep=document.getElementById("cadastro-cep").value;
        vtelefone=document.getElementById("cadastro-telefone").value;
    */ 
        localStorage.nome=vnome;
        localStorage.email=vemail;
        localStorage.imagem=vimagem;
      /*  localStorage.endereco=vendereco;
        localStorage.complemento=vcomplemento;
        localStorage.cidade=vcidade;
        localStorage.bairro=vbairro;
        localStorage.cep=vcep;
        localStorage.telefone=vtelefone;
        */
        alert("Cadastrado com sucesso !")
       // window.location.href = "http://localhost/Mercado-em-casa/Telalogin/Perfil.html"

    })
    .catch(err => {
        console.log(err)
        alert("Falha ao Cadastrar : Dados incorretos ou já existentes") 
    })

   
}

window.addEventListener("load", inicia);

function loginService (requestBody) {
    axios.post('http://localhost:3000/usuarios/login', requestBody)
    .then(res => {
        console.log(res)
        alert("Logado com sucesso !")
        window.location.href = "http://localhost:5500/Telalogin/Perfil.html"
      
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


function alterarPerfilService (requestBody) {
    axios.patch('http://localhost:3000/usuarios/altPerfil', requestBody)
    .then(res => {
        console.log(res)
        alert("Atualizado com sucesso ! ") 
       // window.location ("http://localhost/Mercado-em-casa/Telalogin/Perfil.html")
    })
    .catch(err => {
        console.log(err)
        alert("Erro ao aualizar") 
    })
}
/*
//function profileService() {

    // Vai pegar o token do local storage
    // Vai montar a requisição com o token
    // Fazer a chamada ao endpoint GET usuarios/perfil/
    

  //  await axios.get('http://localhost:3000/usuarios/perfil', {
      //  headers: {
      //    'authorization': `Bearer ${token}`
      //  }
    })
    .then(res => {
        console.log(requestBody)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}
*/

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
