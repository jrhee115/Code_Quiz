window.onload = function() {
    console.log("starting")
};

var secondsLeft = 90;

var score = 0;
var index = 0;
var leaderboard;
var quizTime;

var quiz = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
var start = document.getElementById("start");
var startButton = document.getElementById("startButton");
var divAnswer = document.getElementById("divAnswer");
var allDone = document.getElementById("allDone");
var quizQuestions = document.getElementById("quiz-questions");
var congrats = document.getElementById("congrats")
var hsPage = document.getElementById("hsPage");


startButton.addEventListener("click", startQuiz) 
function startQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    setTime();
    renderQuestions();
    quizTime = setInterval(setTime, 1000);

    
}

function renderQuestions() {
    var questionsIndexLength = questions.length - 1;
    if (index <= questionsIndexLength) {
        document.getElementById("question").innerHTML = questions[index].title;
        renderQuestionChoices();
    }

    // if (index === questionsIndexLength) {
    quizOver();
    // }
}

function renderQuestionChoices() {
    let question = questions[index].choices;
    
    for (var options = 0; options < question.length; options++) {
        var questionOptionsDiv = document.getElementById("question-choices");
        var questionButtons = document.createElement("button");
        questionButtons.className ="btn btnOption btn-outline-primary btn-sm d-flex justify-content-around";
        questionButtons.innerHTML = question[options];
        //This fires the check answer function when the user clicks a question choices button
        questionButtons.setAttribute(
            "onclick",
            "checkAnswer(" + index + "," + options + ");"
        );
        questionOptionsDiv.append(questionButtons);
    }
    quizOver();
};
function clearQuestionDiv() {
    console.log("About to clear html");
    document.getElementById("question-choices").innerHTML = "";
    quizOver();
}


function checkAnswer(question, answer) {


    // var creatDiv = document.getElementById("divAnswer");
    //     creatDiv.setAttribute("id", "creatDiv");
    console.log("question: ", question);
    console.log("answer: ", answer);
    let correctAnswer = questions[question].answer;
    let userAnswer = questions[question].choices[answer];
    if (userAnswer == correctAnswer) {
        index = index + 1;
        score = score + secondsLeft
        divAnswer.textContent = "Correct"
        console.log(score);
        console.log("Correct");
    }
        //Whether they get the right or wrong answer, the program continues to the next question and then deducts 15 seconds from the quiz
    else {
        index = index + 1
        secondsLeft = secondsLeft - 15;
    }
    clearQuestionDiv();
    renderQuestions();
    quizOver();
}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

function sendMessage() {
if (secondsLeft === 0) {
    alert("Time is up. Please Try again!")
    }
}
