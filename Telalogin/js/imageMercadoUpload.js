const UPLOAD_BUTTONMERCADO = document.getElementById("upload-buttonMercado");
const FILE_INPUTMERCADO = document.querySelector("input[type=file]");
const AVATARMERCADO = document.getElementById("avatarMercado");

if (userMercado != null){
AVATARMERCADO.style.background = `url(${userMercado.imagem}) center center/cover`;

UPLOAD_BUTTONMERCADO.addEventListener("click", (event) => {
  event.preventDefault()
  FILE_INPUTMERCADO.click()
});

FILE_INPUTMERCADO.addEventListener("change", event => {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = () => {
    AVATARMERCADO.setAttribute("aria-label", file.name);
    AVATARMERCADO.style.background = `url(${reader.result}) center center/cover`;
  };

  if (confirm('Deseja atualizar a imagem?')) {
    updateMercadoImage(file)
  }
});

function updateMercadoImage (file) {

  const formDataMercado = new FormData()
  formDataMercado.append('idMercado', userMercado.id_supermarket)
  formDataMercado.append('filetoupload', file)

  MercadoUploadImage(formDataMercado)
}
}