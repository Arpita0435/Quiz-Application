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
            document.getElementById("next-button").style.display = "none";
            document.getElementById("submit-button").style.display = "block";  // Show Submit button
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
        document.getElementById("next-button").style.display = "none";  // Hide Next button on last question
        document.getElementById("submit-button").style.display = "block";  // Show Submit button
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
        timeLeft = 30;  // Reset timer for next question
        document.getElementById("time").textContent = timeLeft;
    }
}

function submitQuiz() {
    clearInterval(timer);
    alert(`Quiz Submitted! Your final score is: ${score}`);
    document.getElementById("next-button").style.display = "none";
    document.getElementById("submit-button").style.display = "none";  // Hide Submit button
    document.getElementById("timer").style.display = "none";  // Hide timer
    document.getElementById("score").style.display = "none";  // Hide score display
    // Optionally, you can show a final score or a "Restart Quiz" button
}

window.onload = function () {
    displayQuestion();
    startTimer();
};
