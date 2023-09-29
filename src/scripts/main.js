document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll("[data-faq-question]");
  
  const heroSection = document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;
  
  
  // Seção FAQ
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", abreFechaRespostas);
  }
  function abreFechaRespostas(event) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = event.target.parentElement;
    elementoPai.classList.toggle(classe);
  };
  
  // alteração da visibilidade no header
  function ocultaElementosHeader (){
    const header = document.querySelector(".header");
    header.classList.add("header--is-hidden");
  }
  function mostraElementosHeader (){
    const header = document.querySelector(".header");
    header.classList.remove("header--is-hidden");
  }
  window.addEventListener("scroll", function () {
    const posiçãoAtual = window.scrollY;
    if (posiçãoAtual < alturaHero) {
      ocultaElementosHeader();
    } else {
      mostraElementosHeader();
    }
  })
});


