//variables
var questQuiz = document.getElementById("quiz");
var questSubmit = document.getElementById("results");
var score = document.getElementById("score");
var timer = document.getElementById("timer");

var startQuiz = document.getElementById("start");

//variables
var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;
// Once user clicks it will become a string ""
function goToNextQuestion(userClick) {
  var correctAns = questions[currentQuestionIndex].answer;

  if (userClick === correctAns) {
    console.log("Nice!");
    score++;
  }
  else {
    console.log("Try again!");
  }
  currentQuestionIndex++;
  getNewQuestion(currentQuestionIndex);


}
