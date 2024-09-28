const questions = [
    {
        question: "Who invented Java Programming?",
        answers: [
            { text: "Guido van Rossum", correct: false },
            { text: " James Gosling", correct: true },
            { text: "Dennis Ritchie", correct: false },
            { text: " Bjarne Stroustrup", correct: false },

        ]
    },
    {
        question: "Which statement is true about Java?",
        answers: [
            { text: " Java is a sequence-dependent programming language", correct: false },
            { text: "Java is a code dependent programming language", correct: false },
            { text: " Java is a platform-dependent programming language", correct: false },
            { text: "Java is a platform-independent programming language", correct: true },

        ]
    },
    {
        question: "Which component is used to compile, debug and execute the java programs?",
        answers: [
            { text: "JRE", correct: false },
            { text: "JIT", correct: false },
            { text: "JDK", correct: true },
            { text: "JVM", correct: false },

        ]
    },
    {
        question: " Which one of the following is not a Java feature?",
        answers: [
            { text: "Object-oriented", correct: false },
            { text: " Use of pointers", correct: true },
            { text: " Portable", correct: false },
            { text: " Dynamic and Extensible", correct: false },

        ]
    },
    {
        question: "Which of these cannot be used for a variable name in Java?",
        answers: [
            { text: "identifier & keyword", correct: false },
            { text: "identifier", correct: false },
            { text: " keyword", correct: true },
            { text: "none of the mentioned", correct: false },

        ]
    },
    {
        question: " What is the extension of java code files?",
        answers: [
            { text: ".js", correct: false },
            { text: " .txt", correct: false },
            { text: ".class ", correct: false },
            { text: ".java", correct: true },

        ]
    },
    {
        question: " Which environment variable is used to set the java path?",
        answers: [
            { text: "MAVEN_Path", correct: false },
            { text: "JavaPATH", correct: false },
            { text: "JAVA", correct: false },
            { text: " JAVA_HOME", correct: true },

        ]
    },
    {
        question: " Which of the following is not an OOPS concept in Java?",
        answers: [
            { text: " Polymorphism", correct: false },
            { text: "Inheritance", correct: false },
            { text: "Compilation", correct: true },
            { text: "Encapsulation", correct: false },

        ]
    },
    {
        question: ". What is not the use of “this” keyword in Java?",
        answers: [
            { text: " Referring to the instance variable when a local variable has the same name", correct: false },
            { text: " Passing itself to the method of the same class", correct: true },
            { text: " Passing itself to another method", correct: false },
            { text: "Calling another constructor in constructor chaining", correct: false },

        ]
    },
    {
        question: " What is Truncation in Java?",
        answers: [
            { text: "Floating-point value assigned to a Floating type", correct: false },
            { text: "Floating-point value assigned to an integer type", correct: true },
            { text: "Integer value assigned to floating type", correct: false },
            { text: " Integer value assigned to floating type", correct: false },

        ]
    },
    {
        question: " What is the extension of compiled java classes?",
        answers: [
            { text: ".txt", correct: false },
            { text: " .js", correct: false },
            { text: ".class", correct: true },
            { text: " .java", correct: false },

        ]
    },
    {
        question: " Which exception is thrown when java is out of memory?",
        answers: [
            { text: " MemoryError", correct: false },
            { text: "OutOfMemoryError", correct: true },
            { text: "MemoryOutOfBoundsException", correct: false },
            { text: "MemoryFullException", correct: false },

        ]
    },
    {
        question: " Which of these are selection statements in Java?",
        answers: [
            { text: "break", correct: false },
            { text: "continue", correct: false },
            { text: " for()", correct: false },
            { text: " if()", correct: true },

        ]
    },
    {
        question: " Which of these keywords is used to define interfaces in Java?",
        answers: [
            { text: "intf", correct: false },
            { text: "Intf", correct: false },
            { text: "interface", correct: true },
            { text: "Interface", correct: false },

        ]
    },
    {
        question: "Which of the following is a superclass of every class in Java?",
        answers: [
            { text: "ArrayList", correct: false },
            { text: "Abstract class", correct: false },
            { text: "Object class", correct: true },
            { text: "String", correct: false },

        ]
    },
    {
        question: "Which of the below is not a Java Profiler?",
        answers: [
            { text: "JProfiler", correct: false },
            { text: "Eclipse Profiler", correct: false },
            { text: "JVM", correct: true },
            { text: "JConsole", correct: false },

        ]
    },
    {
        question: "Which of these packages contains the exception Stack Overflow in Java?",
        answers: [
            { text: " java.io", correct: false },
            { text: " java.system", correct: false },
            { text: " java.lang", correct: true },
            { text: " java.util", correct: false },

        ]
    },
    {
        question: " Which of these keywords are used for the block to be examined for exceptions?",
        answers: [
            { text: "check", correct: false },
            { text: "throw", correct: false },
            { text: "catch", correct: false },
            { text: "try", correct: true },

        ]
    },
    {
        question: " Which one of the following is not an access modifier?",
        answers: [
            { text: "Protected", correct: false },
            { text: "Void", correct: true },
            { text: "Public", correct: false },
            { text: "Private", correct: false },

        ]
    },
    {
        question: "What is the numerical range of a char data type in Java?",
        answers: [
            { text: "0 to 256", correct: false },
            { text: " -128 to 127", correct: false },
            { text: " 0 to 65535", correct: true },
            { text: " 0 to 32767", correct: false },

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