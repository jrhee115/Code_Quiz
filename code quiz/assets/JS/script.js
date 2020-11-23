//variables
var timeEL = document.getElementById("timer");
var startContainer = document.getElementById("start-container");
var startButton = document.getElementById("start-btn");
var topRow = document.getElementById("top-row");
var qContainer = document.getElementById("question-container");
var gameoverContainer = document.getElementById("gameOver-container");
var answerQ = document.getElementById("answer-buttons");
var reStart = document.getElementById("restart-btn");
var secondsLeft = 90;
var usersPoints = 0;
var index = 0;

//buttons
startButton.addEventListener("click", startQuiz);

//Quiz Starter
function startQuiz(){
  startContainer.classList.add("hide");
  qContainer.classList.remove("hide");
  nextQuestion();
  startTimer();
}

//Questions
function nextQuestion(){
  answerQ.innerHTML = "";
  var questionEl = document.getElementById("quizQuestion");
  questionEl.textContent = questions[index].title;
  
  questions[index].answers.forEach(function(answer, i){
    var buttonEl = document.createElement("button");
    buttonEl.classList.add("btn", "btn-outline-secondary");
    buttonEl.setAttribute("value", answer);
    buttonEl.textContent = answer;
    buttonEl.onclick = selectAnswer;
    answerQ.appendChild(buttonEl);
  })
}

//Timer
function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEL.textContent = "Timer: " + secondsLeft

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

var questions = [{
  title: "Which one is the starter Pokemon in generation 1?",
  choices: ["Charmander", "Pidgey", "Butterfree", "Jigglypuff"],
  answer: "Charmander"
},
{
  title: "What anime does Pikachu represent?",
  choices: ["Cat", "Horse", "Dog", "Mouse"],
  answer: "Mouse"
},
{
  title: "What type of Pokemon can beat electric type?",
  choices: ["Electic", "Water", "Ground", "Fire"],
  answer: "Ground"
},
{
  title: "How many badges do you need to advance to the Elite Four?",
  choices: ["5", "7", "8", "9"],
  answer: "7"
},
{
  title: "In generation 1, which organization steals Pokemon?",
  choices: ["Team Skull", "Team Dynamite", "Team Yell", "Team Rocket"],
  answer: "Team Rocket"
}
];
