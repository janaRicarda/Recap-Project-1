//bookmark

const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

//Answerbutton, show answer ans change text

const answerButton = document.querySelector('[data-js="answerButton"]');
const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("answer--show");
  if (answer.classList.contains("answer--show")) {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
});
