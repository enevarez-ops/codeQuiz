//Questions asked for Code Quiz.
var questions = [ 
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<scripting>", "<java>", "<javascript>"],
    answer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["<head>", "<body>", "both"],
    answer: "both",
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    choices: ["False", "True"],
    answer: "False",
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "function = exFunction()",
      "function exFunction()",
      "function {exFunction}",
      "function:exFunction()",
    ],
    answer: "function exfunction()",
  },
  {
    question: "How do you call a function named exFunction?",
    choices: ["exFunction()", "run exFunction", "call exFunction()"],
    answer: "exFunction()",
  },
  {
    question: "How can you add a comment in a JavaScript?",
    choices: ["//comment", ":comment", "<!--comment-->"],
    answer: "//comment",
  },
];

//variable for timer on questions
var time = questions.length * 15;

//Created DOM variables, start button, questions, timer, choices, feedback, and score
var startButton = document.getElementById("startBut");

var questionEl = document.getElementById("questionEl");

var choicesEl = document.getElementById("options");

var feedBackEl = document.getElementById("feedBack");

var timerEl = document.getElementById("timer");

var initialsEL = document.getElementById("initials");

var scoreDisplayEL = document.getElementById("scoreDisplay");

var submitEl = document.getElementById("submit");

var currentIndex = 0;

//Variable for timer display and countdown
var timerDisplay; //tie it to its own thing, adding set interval to this

//event listener for start button starting game and initiate timing and score keeping, hide the beginning of the quiz, show the question element, start the interval
function startGame() {
  var startQuizEl = document.getElementById("startQuiz");
  startQuizEl.setAttribute("class", "hidden");
  questionEl.removeAttribute("class");
  timerDisplay = setInterval(function () {
    time--;

    timerEl.textContent = time;

    if (time <= 0) {
      endQuiz();
    }
  }, 1000);
  displayQuestions();
}

//function for displaying questions and choices
function displayQuestions() {
  //loop through the questions array and display questions and the choices, create a button for all the choices dynamically and add a value of the choice to that button
//Variable for current question index  
var currentQuestion = questions[currentIndex];
//Displays question using dot notation
document.getElementById("questionDisplay").textContent = currentQuestion.question;
//Clearing HTML
choicesEl.innerHTML = "";

for (var i = 0; i < currentQuestion.choices.length; i++){
  //Variables and elements for button choices
  var buttonChoices = document.createElement("button");
  buttonChoices.setAttribute("class", "choiceEl");
  buttonChoices.setAttribute("value", currentQuestion.choices[i]);
  buttonChoices.textContent = currentQuestion.choices[i];
  buttonChoices.onclick = checkAnswers;
  choicesEl.appendChild(buttonChoices);
}

}

//function to check if answers are correct
function checkAnswers() {
  //compare the values of the choice clicked on and compare to answer of the array to check if right or wrong, if wrong points will be deducted from time
for (var i = 0; i < checkAnswers.length; i++) {

}
}

//function to end quiz
function endQuiz() {
  //clear the interval, hide the questions element, show the saved score element

}

//function for saving scores
function savedScore() {
  //save time left and initials as the high score, create object and save it to array in local storage

}

//function to print scores on the page
function getScores() {
  //take array from local storage and display it with a loop on page

}

startButton.onclick = startGame;
