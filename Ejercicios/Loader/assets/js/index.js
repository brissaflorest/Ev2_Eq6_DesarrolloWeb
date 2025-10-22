window.addEventListener("DOMContentLoaded", () => {
    showLoader();
}); //Este evento se dispara cuando el HTML ha sido completamente cargado y parseado, sin esperar a que las hojas de estilo, imágenes y subframes terminen de cargar.

window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader();
    }, 4000); //Simula una carga de 4 segundos antes de ocultar el loader.
}); //Este evento se dispara cuando la página completa ha sido cargada, incluyendo todos los recursos dependientes como hojas de estilo e imágenes.

const loader = document.getElementById("loaderPagina");
const showLoader = () => {
    loader.classList.add("show_loader");

}   

const hideLoader = () => {
    loader.classList.remove("show_loader");
}