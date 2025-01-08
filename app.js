const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
    { question: "Which language is used for web development?", options: ["Python", "C++", "JavaScript", "Java"], correct: 2 },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1 },
    { question: "What is 10 * 10?", options: ["100", "10", "200", "50"], correct: 0 },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Hemingway", "Austen"], correct: 0 },
    { question: "What is the color of the sky?", options: ["Blue", "Green", "Red", "Yellow"], correct: 0 },
    { question: "How many continents are there?", options: ["6", "7", "8", "5"], correct: 1 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], correct: 1 },
    { question: "What is the boiling point of water?", options: ["100°C", "90°C", "110°C", "120°C"], correct: 0 },
    { question: "What is the currency of the USA?", options: ["Dollar", "Euro", "Pound", "Yen"], correct: 0 }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;
let userInfo = {};

function startTimer() {
    timer = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("time").textContent = timeLeft;
        } else {
            clearInterval(timer);
            document.getElementById("next-button").style.display = "none";
            document.getElementById("submit-button").style.display = "block";
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

    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById("next-button").style.display = "none";
        document.getElementById("submit-button").style.display = "block";
    }
}

function checkAnswer(selectedOptionIndex) {
    const correctOptionIndex = questions[currentQuestionIndex].correct;
    if (selectedOptionIndex === correctOptionIndex) {
        score++;
        document.getElementById("score-value").textContent = score;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        timeLeft = 30;
        document.getElementById("time").textContent = timeLeft;
    }
}

function submitQuiz() {
    clearInterval(timer);
    alert(`Quiz Submitted! Your final score is: ${score}`);
    document.getElementById("next-button").style.display = "none";
    document.getElementById("submit-button").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("score").style.display = "none";
}

document.getElementById("info-form").addEventListener("submit", function(event) {
    event.preventDefault();
    userInfo.name = document.getElementById("name").value;
    userInfo.number = document.getElementById("number").value;
    userInfo.age = document.getElementById("age").value;

    document.getElementById("user-info").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    displayQuestion();
    startTimer();
});
