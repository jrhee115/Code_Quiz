//variables
var timeEL = document.getElementById("timer");
var startContainer = document.getElementById("start-container");
var startButton = document.getElementById("start-btn");
var topRow = document.getElementById("top-row");
var qContainer = document.getElementById("question-container");
var gameoverContainer = document.getElementById("gameOver-container");
var answerQ = document.getElementById("answer-buttons");
var reStart = document.getElementById("restart-btn");
var correctAnswer = document.getElementById("answer-reveal");
var scoreContainer = document.getElementById("score-container");
var secondsLeft = 60;
var usersPoints = 0;
var index = 0;

//buttons
startButton.addEventListener("click", startQuiz);

//Quiz Starter
function startQuiz() {
  startContainer.classList.add("hide");
  qContainer.classList.remove("hide");
  nextQuestion();
  startTimer();
}

//Questions
function nextQuestion() {
  answerQ.innerHTML = "";
  var questionEl = document.getElementById("quizQuestion");
  questionEl.textContent = questions[index].title;

  questions[index].choices.forEach(function (answer, i) {
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
    timeEL.textContent = "Timer: " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

//Correct or Wrong Answer
function selectAnswer() {
  if (this.value === questions[index].choices) {
    var correctAn = setInterval(rightAnswer, 50);
    function rightAnswer() {
      correctAnswer.classList.remove("hide");
      clearInterval(correctAn);
    };
    usersPoints += 3;
    index += 1;
    nextQuestion();
  } else {
    secondsLeft -= 10;
      if (secondsLeft <= 0) {
          endQuiz();
          startTimer();
      } else {
          var wrongAn = setInterval(incorrectAnswer, 50)
            function incorrectAnswer() {
              correctAnswer.classList.remove("hide");
              clearInterval(wrongAn);
            };
          index += 1
          nextQuestion();
    }
  }
}
//end game
function endQuiz(){
  qContainer.classList.add("hide");
  gameoverContainer.classList.remove("hide");
  usertotalScore = document.getElementById("totalScore");
  usertotalScore.innerHTML = "Your total score is: " + usersPoints;
};
//highscore
function finalscoreContainer(){
  gameoverContainer.classList.add("hide");
  scoreContainer.classList.remove("hide");
  startContainer.classList.add("hide");
  qContainer.classList.add("hide");
}
//questions
var questions = [{
  title: "Which one is the starter Pokemon in generation 1?",
  choices: ["Charmander", "Pidgey", "Butterfree", "Jigglypuff"],
  answer: "Charmander"
},
{
  title: "What animal does Pikachu represent?",
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
},
{
  title: "Whats the main protagonist name?",
  choices: ["Misty", "Chad", "Ash", "Brock"],
  answer: "Ash"
},
{
  title: "which pokemon is a flying type?",
  choices: ["Staryu", "Jinx", "Geodude", "Spearow"],
  answer: "Spearow"
},
{
  title: "which pokemon is a ground type?",
  choices: ["Sandslash", "Nidoking", "Gengar", "Charizard"],
  answer: "Sandslash"
},
{
  title: "which pokemon is lengendary?",
  choices: ["Pikachu", "Mew", "Blastoise", "Dragonite"],
  answer: "Mew"
}
];
