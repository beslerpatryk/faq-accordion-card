const buttonList = document.querySelectorAll(".btn");
const answerList = document.querySelectorAll(".answer");
const questionList = document.querySelectorAll(".question");
const questionWrapperEl = document.querySelectorAll(".question_wrapper");
const containerList = document.getElementsByTagName("li");
const ulEl = document.getElementsByTagName("ul");
const card = document.getElementById("card");

function toggleUnfold(buttons, questions, answers, questionWrapperEl) {
	questionWrapperEl.forEach((wrapper, idx) => {
		wrapper.addEventListener("click", () => {
			wrapper.classList.toggle("unfold");
			buttons[idx].classList.toggle("unfold");
			answers[idx].classList.toggle("unfold");
			questions[idx].classList.toggle("unfold");
		});
	});
}

toggleUnfold(buttonList, questionList, answerList, questionWrapperEl);
