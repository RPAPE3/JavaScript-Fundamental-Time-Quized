// var startBtn = document.querySelector(".start");
// startBtn.innerHTML = "Start";
// // document.body.childe.appendChild(startBtn);

var start_menu = document.querySelector(".card")
var start_btn = document.querySelector(".start");
var q_box = document.querySelector(".q_box");


var question_key = [
    {
        question: "question 1 test",
        optionA: "no",
        optionB: "no",
        optionC: "no",
        optionD: "yes",
        correct: "D"
    }
]

start_btn.addEventListener("click", beginQuiz); 

function beginQuiz () {
    start_menu.style.display = "none";
    q_box.style.display = "block";
};

