//questions
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
    Choices: ["Team Skull", "Team Dynamite", "Team Yell", "Team Rocket"],
    answer: "Team Rocket"
},
{
    title: "Which Pokemon is my favorite?",
    Choices: ["Squirtle1", "Squirtle2", "Squirtle3", "All of the above"],
    answer: "All of the above"
}
]

//variables for score and time
var score = 0;
var currentQuestion = -1;
var timeRemaining = 0;
var timer;

//Once user clicks start, timer begins
function start(){
//Gave user 100 sec
    timeRemaining = 100;
    document.getElementById("timeRemaining").innerHTML = timeRemaining;

    timer = setInterval(function(){
    timeRemaining--;
    document.getElementById("timeRemianing").innerHTML = timeRemaining;
    if (timeRemaining === 0){
        clearInterval(timer);
        endquiz();
    }
    }, 1000);

    next();
}

//stop timer at end of quiz
function endquiz(){
    clearInterval(timeRemaining);
    
    var htmlString = "<h6> End of Quiz </h6>"
    htmlString += "<h7> Your score is + 'score' </h7>"
    htmlString += "<input type='text' id='name' placeholder='First name'></input>"
    htmlString += "<button onclick='setScore()'>Place your score</button>"

    document.getElementById("quizbod").innerHTML = htmlString;
}

//Storing on local storage
function scoreList() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("usersname", document.getElementById('name').value);
    scoreList();
}

function getScore(){
    var quizContent = 
    '<h8>' + localStorage.getItem("username") + '</h8>'
    '<h9>' + localStorage.getItem("highscore")  + '</h9>'

    <button onclick="clearScore()">Clear</button><button onclick="resetGame()">Retry</button>;

    document.getElementById("quizbod").innerhtml = quizContent; 
}

function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("username", ""); 

    resetScore();
}
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeRemaining = 0
    timer = null

    document.getElementById("timeRemaining").innerHTML = timeRemaining;

    var quizbody = 
    toHtmlString += <h1> JavaScript Quiz </h1>
    toHtmlString += <h3> Click to play </h3>
    <button onclick="start()">Start</button>; 

    document.getElementById("quizbod").innerHTML = quizbody;
}

function wrong() {
    timeLeft -=15;
    next();
}

function correct() {
    score +=20; 
    next();
}
function next() {
    currentQuestion++;
    if(currentQuestion  > questions.length -1) {
        endGame();
            return;
    }
}

