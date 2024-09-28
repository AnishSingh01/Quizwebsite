const questions = [
    {
        question: "Which of the following is not a valid C variable name?",
        answers: [
            { text: "int number;", correct: false },
            { text: " float rate;", correct: false },
            { text: "int variable_count;", correct: false },
            { text: " int $main;", correct: true },

        ]
    },
    {
        question: "All keywords in C are in ____________",
        answers: [
            { text: "LowerCase letters", correct: true },
            { text: "UpperCase letters", correct: false },
            { text: "CamelCase letters", correct: false },
            { text: " None of the mentioned", correct: false },

        ]
    },
    {
        question: "Which of the following cannot be a variable name in C?",
        answers: [
            { text: "volatile", correct: true },
            { text: "true", correct: false },
            { text: "friend", correct: false },
            { text: "export", correct: false },

        ]
    },
    {
        question: "Which keyword is used to prevent any changes in the variable within a C program?",
        answers: [
            { text: "immutable", correct: false },
            { text: "mutable", correct: false },
            { text: "const", correct: false },
            { text: "volatile", correct: true },

        ]
    },
    {
        question: " Which of the following typecasting is accepted by C language?",
        answers: [
            { text: "Widening conversions", correct: false },
            { text: " Narrowing conversions", correct: false },
            { text: "Widening & Narrowing conversions", correct: false },
            { text: "None of the mentioned", correct: true },

        ]
    },
    {
        question: "What is an example of iteration in C?",
        answers: [
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "do-while", correct: false },
            { text: "all of the mentioned", correct: true },

        ]
    },
    {
        question: " What is #include <stdio.h>?",
        answers: [
            { text: "Preprocessor directive", correct: true },
            { text: " Inclusion directive", correct: false },
            { text: " File inclusion directive", correct: false },
            { text: " None of the mentioned", correct: false },

        ]
    },
    {
        question: " Which of the following is not possible statically in C language?",
        answers: [
            { text: " Jagged Array", correct: false },
            { text: " Rectangular Array", correct: false },
            { text: "Cuboidal Array", correct: false },
            { text: "Multidimensional Array", correct: true },

        ]
    },
    {
        question: "What is required in each C program?",
        answers: [
            { text: "The program must have at least one function.", correct: false },
            { text: "The program does not require any function.", correct: false },
            { text: " Input data", correct: false },
            { text: "Output data", correct: true },

        ]
    },
    {
        question: " What is the sizeof(char) in a 32-bit C compiler?",
        answers: [
            { text: "1 bit", correct: false },
            { text: "2 bits", correct: false },
            { text: "1 Byte", correct: true },
            { text: "2 Bytes", correct: false },

        ]
    },
    {
        question: " Which of the following is not an operator in C?",
        answers: [
            { text: " ,", correct: false },
            { text: "sizeof()", correct: false },
            { text: "~", correct: false },
            { text: "None of the mentioned", correct: true },

        ]
    },
    {
        question: "Which of the following function declaration is illegal?",
        answers: [
            { text: "return-type function-name(argument type);", correct: true },
            { text: " return-type function-name(argument type){}", correct: false },
            { text: "return-type (argument type)function-name;", correct: false },
            { text: "all of the mentioned", correct: false },

        ]
    },
    {
        question: "The value obtained in the function is given back to main by using ________ keyword.",
        answers: [
            { text: "return", correct: true },
            { text: "static", correct: false },
            { text: "new", correct: false },
            { text: "volatile", correct: false },

        ]
    },
    {
        question: " Who is the father of C language?",
        answers: [
            { text: "Steve Jobs", correct: false },
            { text: "James Gosling", correct: false },
            { text: "Dennis Ritchie", correct: true },
            { text: "Rasmus Lerdorf", correct: false },

        ]
    },
    {
        question: "In C, parameters are always ",
        answers: [
            { text: "Passed by value", correct: true },
            { text: "Passed by reference", correct: false },
            { text: "Cross Non-pointer variables are passed by value and pointers are passed by reference", correct: false },
            { text: " Passed by value result", correct: false },

        ]
    },
    {
        question: " What is the 16-bit compiler allowable range for integer constants?",
        answers: [
            { text: "-3.4e38 to 3.4e38", correct: false },
            { text: "-32767 to 32768", correct: false },
            { text: "-32668 to 32667", correct: false },
            { text: "-32768 to 32767", correct: true },

        ]
    },
    {
        question: "What is required in each C program?",
        answers: [
            { text: "The program must have at least one function.", correct: true },
            { text: "The program does not require any function.", correct: false },
            { text: "Input data", correct: false },
            { text: "Output data", correct: false },

        ]
    },
    {
        question: "What is a lint?",
        answers: [
            { text: "C compiler", correct: false },
            { text: "Interactive debugger", correct: false },
            { text: "Analyzing tool", correct: true },
            { text: "C interpreter", correct: false },

        ]
    },
    {
        question: "Why is a macro used in place of a function?",
        answers: [
            { text: "It reduces execution time.", correct: false },
            { text: "It reduces code size.", correct: false },
            { text: "It increases execution time.", correct: false },
            { text: "It increases code size.", correct: true },

        ]
    },
    {
        question: " In the C language, the constant is defined _______.",
        answers: [
            { text: "Before main", correct: false },
            { text: "After main", correct: false },
            { text: "Anywhere, but starting on a new line.", correct: true },
            { text: "None of the these.", correct: false },

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