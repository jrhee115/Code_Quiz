//Variables
var scoreInput = document.querySelector("#quiz-text");
var quizForm = document.querySelector("#quiz-form");
var scoreList = document.querySelector("#score-list");
var scoreCountSpan = document.querySelector("#score-count");

var scoring = [];

init();

function renderScores() {
  scoreList.innerHTML = "";
  scoreCountSpan.textContent = scoring.length;

  for (var i = 0; i < scoring.length; i++) {
    var score = scoring[i];

    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    scoreList.appendChild(li);
  }
}

function init() {
  // Get stored scoring from localStorage
  // Parsing the JSON string to an object
  var storedScores = JSON.parse(localStorage.getItem("scoring"));

  if (storedScores !== null) {
    scoring = storedScores;
  }

  // Render todos to the DOM
  renderScores();
}

function storeScores() {
  // Stringify and set "todos" key in localStorage to scoring array
  localStorage.setItem("todos", JSON.stringify(scoring));
}

// When form is submitted...
quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var scoreText = scoreInput.value.trim();

  // Return from function early if submitted scoreText is blank
  if (scoreText === "") {
    return;
  }

  // Add new scoreText to todos array, clear the input
  scoring.push(scoreText);
  scoreInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeScores();
  renderScores();
});

// When a element inside of the todoList is clicked...
scoreList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    scoring.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeScores();
    renderScores();
  }
});
