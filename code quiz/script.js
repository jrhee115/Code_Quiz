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
//setting up a way to click the correct answer
function answerClickSetUp() {
    var a = document.getElementById("A");
    var b = document.getElementById("B");
    var c = document.getElementById("C");
    var d = document.getElementById("D");
  
    a.addEventListener("click", function () { goToNextQuestion(a.innerText); });
    b.addEventListener("click", function () { goToNextQuestion(b.innerText); });
    c.addEventListener("click", function () { goToNextQuestion(c.innerText); });
    d.addEventListener("click", function () { goToNextQuestion(d.innerText); });
  }
  answerClickSetUp();
  
 
  