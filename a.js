var arriString = localStorage.getItem('itemsi');
var arri = JSON.parse(arriString);

var arriString = localStorage.getItem('itemst');
var arrt = JSON.parse(arriString);

var quest = document.getElementById("quest");
var result = document.getElementById("example");
var score = document.getElementById("score");

var scoreCount = 0;

function displayQuestion() {
    var num = Math.floor(Math.random() * arri.length);
    quest.innerHTML = arri[num];
    return num;
}

var currentQuestionIndex = displayQuestion();

function verificate() {
    var selectedOption = result.value;
    if (selectedOption === arrt[currentQuestionIndex]) {
        scoreCount += 10;
    } else {
        scoreCount -= 10;
    }
    score.innerHTML = "Score: " + scoreCount;
    currentQuestionIndex = displayQuestion();
    result.value = "";
}

function myFunction(event) {
    let key = event.key;
    if (key == "Enter") { 
        verificate();
    }
  }