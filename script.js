const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C++", "JavaScript", "Java"],
        correct: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

function startTimer() {
    timer = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("time").textContent = timeLeft;
        } else {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function displayQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOptionIndex) {
    const correctOptionIndex = questions[currentQuestionIndex].correct;
    if (selectedOptionIndex === correctOptionIndex) {
        score++;
        document.getElementById("score-value").textContent = score;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        timeLeft = 30;  // Reset timer for next question
        document.getElementById("time").textContent = timeLeft;
    } else {
        clearInterval(timer);
        alert(`Quiz Over! Your score is: ${score}`);
    }
}

window.onload = function () {
    displayQuestion();
    startTimer();
};
