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
function start (){
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
