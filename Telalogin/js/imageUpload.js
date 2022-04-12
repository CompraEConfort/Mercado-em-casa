const UPLOAD_BUTTON = document.getElementById("upload-button");
const FILE_INPUT = document.querySelector("input[type=file]");
const AVATAR = document.getElementById("avatar");

AVATAR.style.background = `url(${user.imagem}) center center/cover`;

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
    updateImage(file)
  }
});

function updateImage (file) {

  const formData = new FormData()
  formData.append('idUser', user.id)
  formData.append('filetoupload', file)

  userUploadImage(formData)
}