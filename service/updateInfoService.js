window.addEventListener('load', () => {
    if (localStorage.getItem('user') && localStorage.getItem('token')) {
        profileService()
    } else if (localStorage.getItem('userMercado') && localStorage.getItem('tokenMerc')) {
        profileMercadoService()
    }
})