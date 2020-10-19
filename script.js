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
};
};

//function to check if answers are correct
function checkAnswers() {
  //compare the values of the choice clicked on and compare to answer of the array to check if right or wrong, if wrong points will be deducted from time
  //time variable for answers
if (this.value !== questions[currentIndex].answer){
  time-= 15;
  if (time < 0){
    time = 0
  };
  timerEl.textContent = time;
  //Display messages for answers right and wrong
  feedBackEl.textContent = "WRONG!!"
} else {
  feedBackEl.textContent = "RIGHT AGAIN THERE BUCKOOOO!!"
};
//removing hidden class for feedback element 
feedBackEl.removeAttribute("class");
//timer function for clock and display of questions
setTimeout( function(){
  feedBackEl.setAttribute("class", "hidden");
}, 1000);
currentIndex++;
if (currentIndex === questions.length){
  endQuiz();
} else {
  displayQuestions();
};
};

//function to end quiz
function endQuiz() {
  //clear the interval, hide the questions element, show the saved score element
clearInterval(timerDisplay);
//Variable for end quiz
var endQuizEl = document.getElementById("finDisplay");
//showing end quiz elements and removing class of hidden
endQuizEl.removeAttribute("class");
document.getElementById("finScore").textContent = time;
//hiding questions after final question is asked
questionEl.setAttribute("class", "hidden");
}

//function for saving scores
function savedScore() {
  //save time left and initials as the high score, create object and save it to array in local storage
//variable statement for initials 
var initialsSaved = initialsEL.value.trim();
//if statement to save initials in local storage

if (initialsSaved !== "") {
  var savedHighScore = JSON.parse(localStorage.getItem("savedHighScore")) || [];

  //variable for high score and saved initials with time
  var newHighScore = {
    score: time, 
    initials: initialsSaved,
  }
  //saving high score to an array in local storage
  savedHighScore.push(newHighScore);
  console.log(savedHighScore)
  localStorage.setItem("savedHighScore", JSON.stringify(savedHighScore));
};



scoreDisplayEL.removeAttribute("class");
savedHighScore.sort( function(a, b){
  return b.score-a.score
})
console.log(savedHighScore)
//for loop to display saved high score and initials
for (var i = 0; i < savedHighScore.length; i++){
  var listEl = document.createElement("li");
  listEl.textContent = savedHighScore[i].initials + ": " + savedHighScore[i].score;
  //appending list to OL element in HTML
  document.getElementById("scores").appendChild(listEl);
}
}



submitEl.onclick = savedScore;
startButton.onclick = startGame;
