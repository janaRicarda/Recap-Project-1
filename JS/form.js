const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const section = document.createElement("section");
  section.classList.add("question-card");

  const question = document.createElement("p");
  question.classList.add("question-text");
  question.textContent = data.question;

  const answer = document.createElement("p");
  answer.classList.add("answer");
  answer.textConten = data.answer;

  const answerButton = document.createElement("button");
  answerButton.classList.add("question");
  answerButton.textContent = "Show answer";

  const tagSection = document.createElement("section");
  tagSection.classList.add("hashtag-section");

  const hashtag = document.createElement("p");
  hashtag.classList.add("hashtag");
  hashtag.textContent = data.tag;

  tagSection.append(hashtag);
  section.append(question, answer, answerButton, tagSection);

  main.append(section);
});
