const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Tool Markup Language",
            "Home Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Java", "Python"],
        correct: 1
    },
    {
        question: "Which language makes a website interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        correct: 2
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");
const restartBtn = document.getElementById("restartBtn");

function loadQuiz() {
    const currentQuestion = quizData[currentIndex];
    questionEl.textContent = currentQuestion.question;
    progressEl.textContent = `Question ${currentIndex + 1} of ${quizData.length}`;

    optionsEl.innerHTML = "";
    currentQuestion.options.forEach((opt, i) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="option" value="${i}">
            ${opt}
        `;
        optionsEl.appendChild(label);
    });
}

nextBtn.addEventListener("click", () => {
    const selected = document.querySelector("input[name='option']:checked");

    if (!selected) {
        alert("Please select an option");
        return;
    }

    if (parseInt(selected.value) === quizData[currentIndex].correct) {
        score++;
    }

    currentIndex++;

    if (currentIndex < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
});

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;

    if (score === quizData.length) {
        feedbackEl.textContent = "Excellent! 🎉";
    } else if (score >= 2) {
        feedbackEl.textContent = "Good effort 👍";
    } else {
        feedbackEl.textContent = "Try again 💪";
    }
}

restartBtn.addEventListener("click", () => {
    score = 0;
    currentIndex = 0;
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuiz();
});

loadQuiz();
