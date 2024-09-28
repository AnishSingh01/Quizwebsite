const questions = [
    {
        question: " Who invented C++?",
        answers: [
            { text: " Dennis Ritchie", correct: false },
            { text: "Ken Thompson", correct: false },
            { text: "Brian Kernighan", correct: false },
            { text: "Bjarne Stroustrup", correct: true },

        ]
    },
    {
        question: "What is C++?",
        answers: [
            { text: " C++ is an object oriented programming language", correct: false },
            { text: "C++ is a procedural programming language", correct: false },
            { text: "C++ supports both procedural and object oriented programming language", correct: true },
            { text: " C++ is a functional programming language", correct: false },

        ]
    },
    {
        question: "Which of the following is used for comments in C++?",
        answers: [
            { text: " /* comment */", correct: false },
            { text: "// comment */", correct: false },
            { text: "// comment", correct: false },
            { text: "both // comment or /* comment */", correct: true },

        ]
    },
    {
        question: "Which of the following user-defined header file extension used in c++?",
        answers: [
            { text: "hg", correct: false },
            { text: "cpp", correct: false },
            { text: "h", correct: true },
            { text: "hf", correct: false },

        ]
    },
    {
        question: "Which of the following is a correct identifier in C++?",
        answers: [
            { text: " VAR_1234 ", correct: true },
            { text: "$var_name", correct: false },
            { text: "7VARNAME", correct: false },
            { text: "7var_name", correct: false },

        ]
    },
    {
        question: "Which of the following is not a type of Constructor in C++?",
        answers: [
            { text: "Default constructor", correct: false },
            { text: "Parameterized constructor", correct: false },
            { text: "Copy constructor", correct: false },
            { text: " Friend constructor", correct: true },

        ]
    },
    {
        question: "Which of the following approach is used by C++?",
        answers: [
            { text: " Left-right", correct: false },
            { text: " Right-left", correct: false },
            { text: "Bottom-up", correct: true },
            { text: "Top-down", correct: false },

        ]
    },
    {
        question: "Which of the following type is provided by C++ but not C?",
        answers: [
            { text: "double", correct: false },
            { text: "float", correct: false },
            { text: "int", correct: false },
            { text: "bool", correct: true },

        ]
    },
    {
        question: "By default, all the files in C++ are opened in _________ mode.",
        answers: [
            { text: "Binary", correct: false },
            { text: "VTC", correct: false },
            { text: "Text", correct: true },
            { text: "ISCII", correct: false },

        ]
    },
    {
        question: " What is the size of wchar_t in C++?",
        answers: [
            { text: "Based on the number of bits in the system", correct: true },
            { text: "2 or 4", correct: false },
            { text: "4", correct: false },
            { text: "2", correct: false },

        ]
    },
    {
        question: "What is the use of the indentation in c++?",
        answers: [
            { text: " r distinguishes between comments and inner data", correct: false },
            { text: "distinguishes between comments and outer data", correct: false },
            { text: "distinguishes between comments and code", correct: true },
            { text: "r distinguishes between comments and outer data", correct: false },

        ]
    },
    {
        question: "Which is more effective while calling the C++ functions?",
        answers: [
            { text: " call by object", correct: false },
            { text: "call by pointer", correct: false },
            { text: " call by value", correct: false },
            { text: "call by reference", correct: true },

        ]
    },
    {
        question: "Which keyword is used to define the macros in c++?",
        answers: [
            { text: " #macro", correct: false },
            { text: " #define", correct: true },
            { text: "macro", correct: false },
            { text: "define", correct: false },

        ]
    },
    {
        question: " The C++ code which causes abnormal termination/behaviour of a program should be written under _________ block.",
        answers: [
            { text: "catch", correct: false },
            { text: "throw", correct: false },
            { text: "try", correct: true },
            { text: "finally", correct: false },

        ]
    },
    {
        question: " What is Inheritance in C++?",
        answers: [
            { text: "Deriving new classes from existing classes", correct: true },
            { text: "Overloading of classes", correct: false },
            { text: " Classes with same names", correct: false },
            { text: " Wrapping of data into a single class", correct: false },

        ]
    },
    {
        question: "Which of the following symbol is used to declare the preprocessor directives in C++?",
        answers: [
            { text: " $", correct: false },
            { text: " ^", correct: false },
            { text: "#", correct: true },
            { text: " *", correct:  false },

        ]
    },
    {
        question: " What is meant by a polymorphism in C++?",
        answers: [
            { text: "class having only single form", correct: false },
            { text: "class having four forms", correct: false },
            { text: "class having many forms", correct: true },
            { text: " class having two forms", correct: false },

        ]
    },
    {
        question: "Which of the following constructors are provided by the C++ compiler if not defined in a class?",
        answers: [
            { text: "Copy constructor", correct: false },
            { text: " Default constructor", correct: false },
            { text: " Assignment constructor", correct: false },
            { text: " All of the mentioned", correct: true },

        ]
    },
    {
        question: "Which concept allows you to reuse the written code in C++?",
        answers: [
            { text: "Inheritance", correct: true },
            { text: " Polymorphism", correct: false },
            { text: " Abstraction", correct: false },
            { text: "Encapsulation", correct: false },

        ]
    },
    {
        question: " What is the benefit of c++ input and output over c input and output?",
        answers: [
            { text: "Both Type safety & Exception", correct: false },
            { text: " Sequence container", correct: false },
            { text: "Exception", correct: false },
            { text: " Type safety", correct: true },

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