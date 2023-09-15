document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll("[data-faq-question]");
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", abreFechaRespostas);
    }
});

function abreFechaRespostas(event) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = event.target.parentElement;
    elementoPai.classList.toggle(classe);
};
