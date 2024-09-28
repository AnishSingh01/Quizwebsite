const questions = [
    {
        question: "Which among the following is the first country to issue research licenses for human embryonic cloning to create stem cells?",
        answers: [
            { text: "United States", correct: false },
            { text: "Australia", correct: false },
            { text: "Germany", correct: false },
            { text: "Britain", correct: true },

        ]
    },
    {
        question: "Which among the following acid is NOT a Vitamin ?",
        answers: [
            { text: "Folic Acid", correct: false },
            { text: "Oleic Acid", correct: true },
            { text: "Pantothenic Acid", correct: false },
            { text: "Ascorbic Acid", correct: false },

        ]
    },
    {
        question: "The Indian Pipe Plant or Monotrapa can be best placed in which among the following groups?",
        answers: [
            { text: "Parasite", correct: false },
            { text: "Saprophyte", correct: true },
            { text: "Insectivorous", correct: false },
            { text: "Lithophyte", correct: false },

        ]
    },
    {
        question: "Which of the following is the largest practical unit of mass?",
        answers: [
            { text: "Slug", correct: false },
            { text: " a.m.u", correct: false },
            { text: "Hyperkg", correct: false },
            { text: "C.S.L", correct: true },

        ]
    },
    {
        question: "What do we call the device which converts the chemical energy of a spontaneous redox reaction into electrical energy?",
        answers: [
            { text: "Galvanic cell", correct: true },
            { text: "Fuel cell", correct: false },
            { text: "Electrolytic cell", correct: false },
            { text: "None of the above", correct: false },

        ]
    },
    {
        question: "Which of these chemicals is used as a water softening agent?",
        answers: [
            { text: "Baking soda", correct: false },
            { text: "Washing soda", correct: true },
            { text: "Bleaching powder", correct: false },
            { text: "Slaked lime", correct: false },

        ]
    },
    {
        question: "Which gas is called the “firedamp” in coal mines?",
        answers: [
            { text: "Hydrogen", correct: false },
            { text: "Carbon monoxide", correct: false },
            { text: "Air", correct: false },
            { text: "Methane", correct: true },

        ]
    },
    {
        question: "Which of the following bones form the wishbone of birds?",
        answers: [
            { text: "Skull", correct: false },
            { text: "Hindlimbs", correct: false },
            { text: "Clavicles", correct: true },
            { text: " None of the above", correct: false },

        ]
    },
    {
        question: "Which of these carry water into a leaf?",
        answers: [
            { text: " Leaf blade", correct: false },
            { text: "Veins", correct: true },
            { text: "Chlorophyll", correct: false },
            { text: "Roots", correct: false },

        ]
    },
    {
        question: "What are the features of Phylum Mollusca?",
        answers: [
            { text: "Less segmented body", correct: false },
            { text: "Typically, open circulatory system", correct: false },
            { text: "Limbs are present", correct: false },
            { text: "All of the above", correct: true },

        ]
    },
    {
        question: "Which one of the following is a cartilaginous fish?",
        answers: [
            { text: "Silver fish", correct: false },
            { text: "Dog fish", correct: true },
            { text: "Cray fish", correct: false },
            { text: "Star fish", correct: false },

        ]
    },
    {
        question: "Which part of the ear has no role to play in hearing but is very important?",
        answers: [
            { text: "Ear ossicles", correct: false },
            { text: "Organ of Corti", correct: false },
            { text: "Eustachian tube", correct: false },
            { text: "Vestibular apparatus", correct: true },

        ]
    },
    {
        question: "What is the excretory unit in the human excretory system?",
        answers: [
            { text: "Neuron", correct: false },
            { text: "Nephron", correct: true },
            { text: "Nephridia", correct: false },
            { text: "Nerve", correct: false },

        ]
    },
    {
        question: "Chromosome designation of Turner sydrome is ____:",
        answers: [
            { text: "44A+XO", correct: true },
            { text: " 44A+XXX", correct: false },
            { text: " 44A+XXY", correct: false },
            { text: "44A+XYY", correct: false },

        ]
    },
    {
        question: "Which of the following destroys the ozone layer?",
        answers: [
            { text: "Chlorine", correct: true },
            { text: "Silicon", correct: false },
            { text: " Sulphur", correct: false },
            { text: "Carbon", correct: false },

        ]
    },
    {
        question: "Which cell disorder in our body is responsible for colour blindness?",
        answers: [
            { text: "Cone cell", correct: true },
            { text: "Red Cell", correct: false},
            { text: "Neuron", correct: false },
            { text: "WBC", correct: false },

        ]
    },
    {
        question: "Stethoscope works on which principle?",
        answers: [
            { text: "Reflection of sound", correct: true },
            { text: "Reflection of light", correct: false },
            { text: "Conversion of current into sound", correct: false },
            { text: " Conversion of sound into current", correct: false },

        ]
    },
    {
        question: "Brain receives and sends signals in the form of ____:",
        answers: [
            { text: "Electrical impulses", correct: true },
            { text: "Magnetic impulses", correct: false },
            { text: "Mechanical impulses", correct: false },
            { text: "Chemical impulses", correct: false },

        ]
    },
    {
        question: "Chlorine gas is a major component of which of the following?",
        answers: [
            { text: "Water", correct: false },
            { text: "Tear gas", correct: true },
            { text: "Liquefied Petroleum Gas", correct: false },
            { text: "Gobar gas", correct: false },

        ]
    },
    {
        question: "Which of the following chemicals is used as rodenticide?",
        answers: [
            { text: "Copper sulphate", correct: false },
            { text: "Zinc Sulphide", correct: true },
            { text: " Iron Sulphate", correct: false },
            { text: " None of the above", correct: false },

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
