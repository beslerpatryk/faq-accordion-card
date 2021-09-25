const buttonList = document.querySelectorAll(".btn");
const answerList = document.querySelectorAll(".answer");
const questionList = document.querySelectorAll(".question");
const containerList = document.getElementsByTagName("li");
const ulEl = document.getElementsByTagName("ul");

function toggleUnfold(buttons, questions, answers, containers, list) {
	buttons.forEach((button, idx) => {
		button.addEventListener("click", () => {
			if (answers[idx].style.display === "none") {
				console.log("unfolding");
				answers[idx].style.display = "block";
				questions[idx].style.fontWeight = "700";
				let answerHeight = answers[idx].offsetHeight;
				ulEl[0].style.transform = `translateY(${answerHeight}px)`;
				// containers[idx].style.marginBottom = "50px";
			} else {
				console.log("folding");
				answers[idx].style.display = "none";
				questions[idx].style.fontWeight = null;
				ulEl[0].style.transform = null;

				// containers[idx].style.marginBottom = null;
			}
		});
	});
}

toggleUnfold(buttonList, questionList, answerList, containerList, ulEl);
