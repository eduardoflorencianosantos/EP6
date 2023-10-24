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

    /* Questão 5 */
    var resposta_5 = document.querySelector('input[name="questao_5"]:checked');

    /* Questão 6 */
    var resposta_6 = document.querySelector('input[name="questao_6"]:checked');

    /* Questão 7 */
    var resposta_7 = document.querySelector('input[name="questao_7"]:checked');

    /* Questão 8 */
    var resposta_8 = document.querySelector('input[name="questao_8"]:checked');

    /* Questão 9 */
    var resposta_9 = document.querySelector('input[name="questao_9"]:checked');

    /* Questão 10 */
    var resposta_10 = document.querySelector('input[name="questao_10"]:checked');

    /* Contalizador */
    var contabilizador = 0;

    /* Se todas as questões forem respondidas */
    if (resposta_1 && resposta_2 && resposta_3 && resposta_4 && resposta_5 && resposta_6 && resposta_7 && resposta_8 && resposta_9 && resposta_10) {

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

        /* Se a questão for correta, o usuário acerta */
        if (resposta_5.value == "correta") {
            document.getElementById("resposta_correta_5").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_5").innerHTML = "Errou! A alternativa correta é a letra C."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_6.value == "correta") {
            document.getElementById("resposta_correta_6").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_6").innerHTML = "Errou! A alternativa correta é a letra D."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_7.value == "correta") {
            document.getElementById("resposta_correta_7").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_7").innerHTML = "Errou! A alternativa correta é a letra B."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_8.value == "correta") {
            document.getElementById("resposta_correta_8").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_8").innerHTML = "Errou! A alternativa correta é a letra A."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_9.value == "correta") {
            document.getElementById("resposta_correta_9").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_9").innerHTML = "Errou! A alternativa correta é a letra C."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_10.value == "correta") {
            document.getElementById("resposta_correta_10").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_10").innerHTML = "Errou! A alternativa correta é a letra B."
        }

        /* Quantidade de acertos */
        document.getElementById("quantidade_acertos").innerHTML = "Total de pontos: " + contabilizador + "/10";

    }

    /* Se usuário não responder nenhuma questão */
    else {
        alert("Responda todas as questões!")
    }

}