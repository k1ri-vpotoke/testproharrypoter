const questions = [
    { question: "Яка тварина зображена на гербі Грифіндора?", answers: ["Лев", "Змія", "Барс"], correct: "Лев" },
    { question: "Який патронус у Гаррі Поттера?", answers: ["Олень", "Кіт", "Вовк"], correct: "Олень" },
    { question: "Як звали фенікса Дамблдора?", answers: ["Фоукс", "Букбі", "Нагіні"], correct: "Фоукс" },
    { question: "Як називається закляття для левітації?", answers: ["Wingardium Leviosa", "Expelliarmus", "Expecto Patronum"], correct: "Wingardium Leviosa" },
    { question: "Хто зрадив батьків Гаррі Поттера?", answers: ["Пітер Петтигрю", "Сіріус Блек", "Северус Снейп"], correct: "Пітер Петтигрю" },
    { question: "Скільки гуртожитків у Гоґвортсі?", answers: ["4", "3", "5"], correct: "4" }
];

let currentQuestion = 0;

function loadQuestion() {
    let questionElement = document.getElementById("question");
    let answersElement = document.getElementById("answers");
    let resultElement = document.getElementById("result");
    
    questionElement.textContent = questions[currentQuestion].question;
    answersElement.innerHTML = "";
    resultElement.textContent = "";

    questions[currentQuestion].answers.forEach(answer => {
        let button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(answer);
        answersElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    let resultElement = document.getElementById("result");
    if (answer === questions[currentQuestion].correct) {
        resultElement.textContent = "Правильно!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Неправильно! Спробуй ще раз!";
        resultElement.style.color = "red";
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Квіз завершено!");
    }
}

window.onload = loadQuestion;
