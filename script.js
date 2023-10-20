/* Animação da propaganda de programação */
function trocar(objeto, imagem) {
    programacao.src = imagem;
}

/* Animação da propaganda de fast food */
function mudar(objeto, imagem) {
    fastfood.src = imagem;
}

/* Animação da propaganda de celular */
function animar(objeto, imagem) {
    celular.src = imagem;
}

/* Animação da propaganda da academia */
function deslocar(objeto, imagem) {
    academia.src = imagem;
}

/* ------------------------------------------------------------------------------------------------------------------------------------------ */

/* Está chamando o <div class="hamburger"> */
const hamburguer = document.querySelector(".hamburguer");

/* Está chamando o <ul class="nav-menu"> */
const navMenu = document.querySelector(".nav-menu");

/* Animação das três barras */
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

/* ------------------------------------------------------------------------------------------------------------------------------------------ */