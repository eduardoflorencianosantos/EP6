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
/* Formulário */

/* Está chamando o onload="nome()"*/
function nome() {

    /* Caixinha que aparece para digitar seu nome */
    var nome_variavel = prompt("Coloque seu nome:");

    /* Irá aparecer o formulário se o usuário preencher a coluna com um nome */
    if (nome_variavel) {
        document.getElementById("nome").innerHTML = "Olá! " + nome_variavel + ". Bem-vindo(a) ao formulário de perguntas do nosso site. Estamos felizes em tê-lo(a) aqui e prontos para ajudar. Por favor, preencha as perguntas com cuidado e estaremos à disposição para qualquer dúvida.";
    }

    /* Não irá aparecer o formulário se o usuário não preencher a coluna */
    else {
        alert("Nome não atribuído");
        nome();
    }

}

/* Está chamando o onclick="resposta()" */
function resposta() {

    /* Questão 1 */
    var resposta_1 = document.querySelector('input[name="questao_1"]:checked');

    /* Questão 2 */
    var resposta_2 = document.querySelector('input[name="questao_2"]:checked');

    /* Questão 3 */
    var resposta_3 = document.querySelector('input[name="questao_3"]:checked');

    /* Questão 4 */
    var resposta_4 = document.querySelector('input[name="questao_4"]:checked');

    /* Contalizador */
    var contabilizador = 0;

    /* Se todas as questões forem respondidas */
    if (resposta_1 && resposta_2 && resposta_3 && resposta_4) {

        /* Se a questão for correta, o usuário acerta */
        if (resposta_1.value == "correta") {
            document.getElementById("resposta_correta_1").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_1").innerHTML = "Errou! A alternativa correta é a letra A. Porque os catetos são os lados que formam o ângulo reto em um triângulo retângulo, não o lado oposto."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_2.value == "correta") {
            document.getElementById("resposta_correta_2").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_2").innerHTML = "Errou! A alternativa correta é a letra D. Porque o cateto é o lado adjacente ao ângulo agudo, enquanto a hipotenusa é o lado oposto ao ângulo reto."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_3.value == "correta") {
            document.getElementById("resposta_correta_3").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_3").innerHTML = "Errou! A alternativa correta é a letra D. Porque a hipotenusa é o lado oposto ao ângulo reto em um triângulo retângulo."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_4.value == "correta") {
            document.getElementById("resposta_correta_4").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_4").innerHTML = "Errou! A alternativa correta é a letra A. Porque o Teorema de Pitágoras afirma que o quadrado da hipotenusa é igual à soma dos quadrados dos catetos em um triângulo retângulo."
        }

        /* Quantidade de acertos */
        document.getElementById("quantidade_acertos").innerHTML = "Total de pontos: " + contabilizador +"/4";

    }

    /* Se usuário não responder nenhuma questão */
    else {
        alert("Responda todas as questões!")
    }

}