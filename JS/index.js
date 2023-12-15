const buttonAnswer = document.querySelector('[data-js="answer"]');
const buttonQuestion = document.querySelector('[data-js="question"]');

buttonQuestion.addEventListener("click", () => {
  buttonAnswer.classList.toggle("answer--show");
});
