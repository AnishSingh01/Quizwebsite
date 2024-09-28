const questions = [
    {
        question: " How much population is living below the poverty line in India?",
        answers: [
            { text: " Approx 24%", correct: false },
            { text: " Approx 25%", correct: false },
            { text: "Approx 26%", correct: true },
            { text: "Approx 27%", correct: false },

        ]
    },
    {
        question: "The best indicator of economic development of any country is?",
        answers: [
            { text: "Its agriculture", correct: false },
            { text: "Its transport", correct: false },
            { text: " Its gross production", correct: false },
            { text: "Its per capita income", correct: true },

        ]
    },
    {
        question: " Who was the father of Operation Flood?",
        answers: [
            { text: " Dr. Norman Borlaug", correct: false },
            { text: "Dr. M.S. Swaminathan", correct: false },
            { text: "Dr. Verghese Kurien", correct: true },
            { text: " Dr. William Gande", correct: false },

        ]
    },
    {
        question: "The concept of Economic Planning in India is derived from?",
        answers: [
            { text: " USA", correct: false },
            { text: "UK", correct: false },
            { text: "Australia", correct: false },
            { text: "Russia", correct: true },

        ]
    },
    {
        question: "Planning Commission was constituted on?",
        answers: [
            { text: " 15 March 1948", correct: false },
            { text: "15 March 1949", correct: false },
            { text: "15 March 1950", correct: true },
            { text: "15 March 1951", correct: false },

        ]
    },
    {
        question: " Banking regulation act was passed in?",
        answers: [
            { text: "1947", correct: false },
            { text: "1948", correct: false },
            { text: "1949", correct: true },
            { text: "1950", correct: false },

        ]
    },
    {
        question: "First Regional Rural Bank came into existence in",
        answers: [
            { text: "1973", correct: false },
            { text: "1973", correct: true },
            { text: "1975", correct: false },
            { text: "1976", correct: false },

        ]
    },
    {
        question: " General Insurance Corporation (GIC) was established in?",
        answers: [
            { text: "1971", correct: false },
            { text: "1972", correct: true },
            { text: "1973", correct: false },
            { text: "1974", correct: false },

        ]
    },
    {
        question: "Gilt-edged market means",
        answers: [
            { text: "the market of government securities", correct: true },
            { text: " bullion market", correct: false },
            { text: " market dealing with metals", correct: false },
            { text: "market dealing with exports", correct: false },

        ]
    },
    {
        question: "Which state is the biggest tea producer in the country?",
        answers: [
            { text: "Andhra Pradesh", correct: false },
            { text: "Sikkim", correct: false },
            { text: "Assam", correct: true },
            { text: " West Bengal", correct: false },

        ]
    },
    {
        question: "National Agriculture Insurance Scheme was implemented on",
        answers: [
            { text: " Oct. 1997", correct: false },
            { text: "Oct. 1998", correct: false },
            { text: "Oct. 1999", correct: true },
            { text: " Oct. 2000", correct: false },

        ]
    },
    {
        question: "Reserve bank of India was established on",
        answers: [
            { text: "1st April 1935", correct: true },
            { text: " 1st April 1936", correct: false },
            { text: "1st April 1937", correct: false },
            { text: "  1st April 1938", correct: false },

        ]
    },
    {
        question: "What is the target of average economic growth rate (GDP) during the 12th Five Year Plan?",
        answers: [
            { text: "7.8%", correct: false },
            { text: "8.7%", correct: false },
            { text: "9%", correct: true },
            { text: " 10%", correct: false },

        ]
    },
    {
        question: "When was the first budget of Independent India presented and by whom?",
        answers: [
            { text: "Manmohan Singh", correct: false },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "R K Shanmukham Chetty", correct: true },
            { text: " D. Tiwari", correct: false },

        ]
    },
    {
        question: "In which budget was service tax introduced in India?",
        answers: [
            { text: "Budget 1997-98", correct: false },
            { text: "Budget 1973-74", correct: false },
            { text: "Budget 1994-95", correct: true },
            { text: "Budget 1990-91", correct: false },

        ]
    },
    {
        question: " What is the main cause of the export surplus?",
        answers: [
            { text: "The country stringent import policy", correct: false },
            { text: " Developments in national and international markets", correct: true },
            { text: " The country exports promotion value", correct: false },
            { text: " None of the above", correct: false },

        ]
    },
    {
        question: "If RBI reduces the cash reserve ratio, what will happen to the credit creation?",
        answers: [
            { text: "There will be no impact.", correct: false },
            { text: "It will decrease.", correct: false },
            { text: "It will increase.", correct: true },
            { text: " None of the above", correct: false },

        ]
    },
     {
        question: " The first complete Indian Bank was established in which year?",
        answers: [
            { text: "1794", correct: false },
            { text: "1894", correct: true },
            { text: " 1896", correct: false },
            { text: "1902", correct: false },

        ]
    },
    {
        question: " How is the CD ratio defined in the field of Banking strategies?",
        answers: [
            { text: "Cash Deposit Ratio", correct: true },
            { text: "Credit Debit Ratio", correct: false },
            { text: " Cash Debt Ratio", correct: false },
            { text: "Current Debt cumulative proportion", correct: false },

        ]
    },
    {
        question: "  FIEO stands for………………………….",
        answers: [
            { text: "Foreign Import Export Organisation.", correct: false },
            { text: "deration of Import Export Organisation", correct: true },
            { text: " Forum of Indian Export Organisation.", correct: false },
            { text: "Federation of Indian Export Organisation.", correct: false },

        ]
    },
    
];

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
    nextButton.innerHTML = "submit";
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


