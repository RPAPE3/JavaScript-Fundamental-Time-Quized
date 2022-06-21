// var startBtn = document.querySelector(".start");
// startBtn.innerHTML = "Start";
// // document.body.childe.appendChild(startBtn);

var start_menu = document.querySelector(".card")
var start_btn = document.querySelector(".start");
var q_box = document.querySelector(".q_box");
var timer = document.querySelector(".timer")
var question = document.querySelector(".question");
var choice_A = document.querySelector(".choice_A");
var choice_B = document.querySelector(".choice_B");
var choice_C = document.querySelector(".choice_C");
var choice_D = document.querySelector(".choice_D");
var s_box = document.querySelector(".s_box");
var stop_timer = document.querySelector(".stop_timer")


var question_key = [
    {
        question: "question 1",
        optionA: "no",
        optionB: "no",
        optionC: "no",
        optionD: "yes",
        correct: "yes"
    }, {
        question: "question 2",
        optionA: "no",
        optionB: "no",
        optionC: "yes",
        optionD: "no",
        correct: "yes"
    }, {
        question: "question 3",
        optionA: "no",
        optionB: "yes",
        optionC: "no",
        optionD: "no",
        correct: "B"
    }, {
        question: "question 4",
        optionA: "yes",
        optionB: "no",
        optionC: "no",
        optionD: "no",
        correct: "A"
    }
];

var secondsLeft = 100;


start_btn.addEventListener("click", beginQuiz); 

function beginQuiz () {
    start_menu.style.display = "none";
    q_box.style.display = "block";
    retrieve_question();
    timeClock();
};

function timeClock () {
    setInterval(function() {
        secondsLeft--; 
        timer.textContent = secondsLeft;
    }, 1000);
};

function time_minus_10 () {
    secondsLeft = secondsLeft - 10;
};




function retrieve_question () {
    var question_screen = question_key[0];
    question.innerHTML = question_screen.question;
    choice_A.innerHTML = question_screen.optionA;
    choice_B.innerHTML = question_screen.optionB;
    choice_C.innerHTML = question_screen.optionC;
    choice_D.innerHTML = question_screen.optionD;

    choice_D.addEventListener("click", retrieve_question_2);

    choice_A.addEventListener("click", time_minus_10);
    choice_A.addEventListener("click", retrieve_question_2);
    choice_B.addEventListener("click", time_minus_10);
    choice_B.addEventListener("click", retrieve_question_2);
    choice_C.addEventListener("click", time_minus_10);
    choice_C.addEventListener("click", retrieve_question_2);

};



function retrieve_question_2 () {

    var question_screen = question_key[1];
    question.innerHTML = question_screen.question;
    choice_A.innerHTML = question_screen.optionA;
    choice_B.innerHTML = question_screen.optionB;
    choice_C.innerHTML = question_screen.optionC;
    choice_D.innerHTML = question_screen.optionD;

    choice_D.addEventListener("click", retrieve_question_3);

    choice_A.addEventListener("click", time_minus_10);
    choice_A.addEventListener("click", retrieve_question_3);
    choice_B.addEventListener("click", time_minus_10);
    choice_B.addEventListener("click", retrieve_question_3);
    choice_C.addEventListener("click", time_minus_10);
    choice_C.addEventListener("click", retrieve_question_3);
        
};


function retrieve_question_3 () {

    var question_screen = question_key[2];
    question.innerHTML = question_screen.question;
    choice_A.innerHTML = question_screen.optionA;
    choice_B.innerHTML = question_screen.optionB;
    choice_C.innerHTML = question_screen.optionC;
    choice_D.innerHTML = question_screen.optionD;

    choice_D.addEventListener("click", retrieve_question_4);

    choice_A.addEventListener("click", time_minus_10);
    choice_A.addEventListener("click", retrieve_question_4);
    choice_B.addEventListener("click", time_minus_10);
    choice_B.addEventListener("click", retrieve_question_4);
    choice_C.addEventListener("click", time_minus_10);
    choice_C.addEventListener("click", retrieve_question_4);

};

function retrieve_question_4 () {

    var question_screen = question_key[3];
        question.innerHTML = question_screen.question;
        choice_A.innerHTML = question_screen.optionA;
        choice_B.innerHTML = question_screen.optionB;
        choice_C.innerHTML = question_screen.optionC;
        choice_D.innerHTML = question_screen.optionD;

    choice_D.addEventListener("click", scoreScreen);

    choice_A.addEventListener("click", time_minus_10);
    choice_A.addEventListener("click", scoreScreen);
    choice_B.addEventListener("click", time_minus_10);
    choice_B.addEventListener("click", scoreScreen);
    choice_C.addEventListener("click", time_minus_10);
    choice_C.addEventListener("click", scoreScreen);
};

function scoreScreen () {
    q_box.style.display = "none";
    s_box.style.display = "block";
    stop_timer.textContent = secondsLeft;
}