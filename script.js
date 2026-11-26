const btnSaudacao = document.getElementById('btn-saudacao');
const mensagemDinamica = document.getElementById('mensagem-dinamica');

if (btnSaudacao) {
    btnSaudacao.addEventListener('click', () => {
        const mensagens = [
            "Obrigado por visitar meu portfólio!",
            "Espero que goste dos meus projetos",
            "Vamos construir algo incrível juntos!",
            "Programar é a arte de resolver problemas"
        ];
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        mensagemDinamica.textContent = mensagemAleatoria;
    });
}
   



