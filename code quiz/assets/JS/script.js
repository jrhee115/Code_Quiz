//variables
var timeEL = document.getElementById("timer");
var startContainer = document.getElementById("start-container");
var startButton = document.getElementById("start-btn");
var topRow = document.getElementById("top-row");
var qContainer = document.getElementById("question-container");
var gameoverContainer = document.getElementById("gameOver-container");
var answerQ = document.getElementById("answer-button");
var reStart = document.getElementById("restart-btn");
var secondsLeft = 90;

//Quiz Starter
function startQuiz(){
  startContainer.classList.add("hide");
  qContainer.classList.remove("hide");
  nextQuestion();
  startTimer();
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

//Questions
function nextQuestion(){
  answerQ.innerHTML = "";
  var quizQuestion = document.getElementById("quizQuestion");
  quizQuestion.textContent = questions[index].title;
  
  questions[index].answer.forEach(function(answer, i){
    var buttonEl = document.createElement("button");
    buttonEl.classList.add("btn", "btn-outline-secondary");
    buttonEl.setAttribute("value", answer);
    buttonEl.textContent = answer;
    buttonEl.onclick = selectAnswer;
    answerQ.appendChild(buttonEl);
  })
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
