// Adiciona um destaque temporário à seção acessada pela navegação
// Seleciona os Links da navegação
const links = document.querySelectorAll(".nav-link");

// Adiciona o efeito destaque a seção do link clicado
links.forEach(link => {
    link.addEventListener("click", () => {

        //Obtém a seção de destino com o href
        const destino = document.querySelector(
            link.getAttribute("href")
        );

        //Espera o scroll terminar
        setTimeout(() => {
            
            //Adiciona o destaque
            destino.classList.add("destaque");

            //Remove o destaque 
            setTimeout(() => {
                destino.classList.remove("destaque");
            }, 2000);

        }, 100);

    });
});

//simulação de envio de formulário
const formulario = document.querySelector("#formContato");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});