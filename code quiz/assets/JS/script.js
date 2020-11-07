//variables
var questQuiz = document.getElementById("quiz");
var questSubmit = document.getElementById("results");
var score = document.getElementById("score");
var timer = document.getElementById("timer");

var startQuiz = document.getElementById("start");

//variables
var score = 0;
var secondsLeft = 90;
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

startQuiz.addEventListener("click", function () {
  getNewQuestion(currentQuestionIndex);
});
//after question was answered it will change to the next
var currentQuestion;
function getNewQuestion(questionIndex) {
  var question = questions[questionIndex];
  currentQuestion = question;
  var title = question.title;

  var questionEl = document.getElementById("question");
  questionEl.innerText = title;

  var option1 = question.choices[0];
  var answerEl1 = document.getElementById("A");
  answerEl1.innerText = option1;
  
  var option2 = question.choices[1];
  var answerEl2 = document.getElementById("B");
  answerEl2.innerText = option2

  var option3 = question.choices[2];
  var answerEl3 = document.getElementById("C");
  answerEl3.innerText = option3;

  var option4 = question.choices[3];
  var answerEl4 = document.getElementById("D");
  answerEl4.innerText = option4;
 
  document.getElementById("question").innerText = title;
  document.getElementById("A").innerText = choice1;
  document.getElementById("B").innerText = choice2;
  document.getElementById("C").innerText = choice3;
  document.getElementById("D").innerText = choice4;
}

//function to set up timer, timer should decrease every sec
function setTime() {
  var timeInterval = setInterval(function(){
    secondsLeft--;
    timer.textContent = "Time " + secondsLeft
    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      sendMessage();
    }
  },1000)

  function sendMessage(){
    timer.textContent = "You're out of time!"
  }
  
}