const UPLOAD_BUTTON = document.getElementById("upload-buttonProduto");
const FILE_INPUT = document.querySelector("input[type=file]");
const AVATAR = document.getElementById("avatarProduto");

let prodTemp = JSON.parse(localStorage.getItem('prodTemp'))

if(prodTemp!= null) {
AVATAR.style.background = `url(${prodTemp.imagem_produto}) center center/cover`;

UPLOAD_BUTTON.addEventListener("click", (event) => {
  event.preventDefault()
  FILE_INPUT.click()
});

FILE_INPUT.addEventListener("change", event => {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = () => {
    AVATAR.setAttribute("aria-label", file.name);
    AVATAR.style.background = `url(${reader.result}) center center/cover`;
  };

  if (confirm('Deseja atualizar a imagem?')) {
    updateProdutoImage(file)
  }
});

function updateProdutoImage (file) {

  const formDataProduto = new FormData()
  formDataProduto.append('idProduto', prodTemp.id_produto)
  formDataProduto.append('filetoupload', file)

  produtoUploadImage(formDataProduto)
}
}