const questions = [
    {
        question: "What is the pH value of the human body?",
        answers: [
            { text: "9.2 to 9.8", correct: false },
            { text: "7.0 to 7.8 ", correct: true },
            { text: "6.1 to 6.3", correct: false },
            { text: "5.4 to 5.6", correct: false },

        ]
    },
    {
        question: " Elections to panchayats in state are regulated by",
        answers: [
            { text: "Gram panchayat", correct: false },
            { text: "Nagar Nigam", correct: false },
            { text: "Election Commission of India", correct: false },
            { text: "State Election Commission", correct: true },

        ]
    },
    {
        question: " Forming of Association in India is",
        answers: [
            { text: "Legal Right", correct: false },
            { text: "Illegal Right", correct: false },
            { text: "Natural Right", correct: false },
            { text: "Fundamental Right.", correct: true },

        ]
    },
    {
        question: "Pustaz grasslands are situated at?",
        answers: [
            { text: "South Africa", correct: false },
            { text: "China", correct: false },
            { text: "Hungary", correct: true },
            { text: "USA", correct: false },

        ]
    },
    {
        question: "Which of the given devices is used for counting blood cells?",
        answers: [
            { text: "Hmelethometer", correct: false },
            { text: "Spyscometer", correct: false },
            { text: "Hemocytometer", correct: true },
            { text:"Hamosytometer", correct: false },

        ]
    },
    {
        question: "Which of the given is a disease caused by protozoa?",
        answers: [
            { text: "Cancer", correct: false },
            { text: "Typhoid", correct: false },
            { text: "Kala-azar", correct: true },
            { text: "Chicken Pox", correct: false },

        ]
    },
    {
        question: "Which of the given coins was known as 'Karshapana' in ancient literature?",
        answers: [
            { text: "Gold coins", correct: false },
            { text: "Bronze coins", correct: false },
            { text: "Punch marked coins", correct: true },
            { text: "Iron coins", correct: false },

        ]
    },
    {
        question: "When the metal reacts with dilute acid, which gas is formed?",
        answers: [
            { text: "Carbon Dioxide", correct: false },
            { text: "Helium", correct: false },
            { text: "Neon", correct: false },
            { text: "Hydrogen", correct: true },

        ]
    },
    {
        question: "What is the name of the lower layer of the Earth's three concentric layers?",
        answers: [
            { text: "SAIL", correct: false },
            { text: "SIMA", correct: true },
            { text: "SAMA", correct: false },
            { text: "SIAL", correct: false },

        ]
    },
    {
        question: "Which of the following is responsible for nitrogen fixation?",
        answers: [
            { text: "Fungus", correct: false },
            { text: "Bacteria", correct: true },
            { text: "Virus", correct: false },
            { text: "Insects", correct: false },

        ]
    },
    {
        question: "Press Council of India is a",
        answers: [
            { text: "Profitable organization", correct: false },
            { text: "The constitutional quasi-judicial body", correct: false },
            { text: "The statutory quasi-judicial body", correct: true },
            { text: "None of these", correct: false },

        ]
    },
    {
        question: "Who is the author of the book titled 'Tipane Kashmirchi'?",
        answers: [
            { text: "Arun Karmakar", correct: true},
            { text: "Arun Jaitley", correct: false },
            { text: "Arun Sharma", correct: false },
            { text: "Manoj Sinha", correct: false },

        ]
    },
    {
        question: "Nepenthes Khasiana an endangered and rare plant found in",
        answers: [
            { text: "Bihar", correct: false },
            { text: "Meghalaya", correct: true },
            { text: "Orrisa", correct: false },
            { text: "Madhya Pradesh", correct: false },

        ]
    },
    {
        question: "The hero of the Malvikagnimitram of Kalidas is associated with which of the given dynasties?",
        answers: [
            { text: "The Sunga Dynasty", correct: true },
            { text: "Pallava Dynasty", correct: false },
            { text: "Magadha Dynasty", correct: false},
            { text: "Vakataka Dynasty", correct: false },

        ]
    },
    {
        question: "The tropic of cancer does pass through which state of India?",
        answers: [
            { text: "Uttar Pradesh", correct: false },
            { text: "Madhya Pradesh", correct: true },
            { text: "Bihar", correct: false },
            { text: "Andhra Pradesh", correct: false },

        ]
    },
    {
        question: "Who among the given had translated the Upanishads from Sanskrit to Persian",
        answers: [
            { text: "Dara Shukoh", correct: true },
            { text: "Babar", correct: false },
            { text: "Mirza Galib", correct: false },
            { text: "Abul Fazal", correct: false },

        ]
    },
    {
        question: " Which of the given shows the density gradient in a body of water?",
        answers: [
            { text: "Pycnocline", correct: true },
            { text: "Picnoclyne", correct: false },
            { text: "Econoline", correct: false},
            { text: "Pyctolene", correct: false },

        ]
    },
    {
        question: " How many goals are added in Sustainable Developments Goals adopted by the UN?",
        answers: [
            { text: "18", correct: false },
            { text: "17", correct: true },
            { text: "20", correct: false },
            { text: "21", correct: false },

        ]
    },
    {
        question: "Which of the given Mughal emperors had introduced the Mansabdari system?",
        answers: [
            { text: "Shahjahan", correct: false },
            { text: "Babar", correct: true },
            { text: "Akbar", correct: false },
            { text: "Aurangzeb", correct: false },

        ]
    },
    {
        question: "Which of the given industries uses limestone as a raw material?",
        answers: [
            { text: "Paper", correct: false },
            { text: "Cement", correct: true },
            { text: "Textile", correct: false },
            { text: "Leather", correct: false },

        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currentQuestion.question;

    // for answers .

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if (isCorrect) {
        selectedbtn.classList.add("correct");
        score++;

    }
    else {
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}
function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = " Play again";
    nextButton.style.display = "block";
}


function handleNextButtons() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButtons();
    }
    else {
        startQuiz();
    }
})

startQuiz();
