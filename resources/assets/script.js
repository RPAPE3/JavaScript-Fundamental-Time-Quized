var start_menu = document.querySelector(".card")
var start_btn = document.querySelector(".start");
var q_box = document.querySelector(".q_box");
var timer = document.querySelector(".timer")
var high_score = document.querySelector(".high_score")
var question = document.querySelector(".question");
var choice_A = document.querySelector(".choice_A");
var choice_B = document.querySelector(".choice_B");
var choice_C = document.querySelector(".choice_C");
var choice_D = document.querySelector(".choice_D");
var s_box = document.querySelector(".s_box");
var stop_timer = document.querySelector(".stop_timer");
var final_score = document.querySelector(".final_score");
var enter_score = document.querySelector(".enter_score");
var user_input = document.querySelector(".user_input");
var score_display = document.querySelector(".score_display");


var question_key = [
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        optionA: "var",
        optionB: "const",
        optionC: "let",
        optionD: "All of the above",
        correct: "All of the above"
    }, {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        optionA: "Boolean",
        optionB: "Undefined",
        optionC: "Object",
        optionD: "Integer",
        correct: "Object"
    }, {
        question: "How to stop an interval timer in Javascript",
        optionA: "clearTimer",
        optionB: "clearInterval",
        optionC: "clearClock",
        optionD: "clearWatch",
        correct: "clearInterval"
    }, {
        question: "How do we write a comment in javascript?",
        optionA: "//",
        optionB: "/* */",
        optionC: "#",
        optionD: "$ $",
        correct: "//"
    }, {
        end: "end"
    }
];

var secondsLeft = 100;
var questionIndex = 0


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

        if (secondsLeft === 0) {
            scoreScreen();
        }
    }, 1000);
};

function time_minus_10 () {
    secondsLeft = secondsLeft - 10;
};

function retrieve_question () {
    var question_screen = question_key[questionIndex];
    question.innerHTML = question_screen.question;
    choice_A.innerHTML = question_screen.optionA;
    choice_B.innerHTML = question_screen.optionB;
    choice_C.innerHTML = question_screen.optionC;
    choice_D.innerHTML = question_screen.optionD;

}

function next_question () {

    questionIndex++

    var question_screen = question_key[questionIndex];
    question.innerHTML = question_screen.question;
    choice_A.innerHTML = question_screen.optionA;
    choice_B.innerHTML = question_screen.optionB;
    choice_C.innerHTML = question_screen.optionC;
    choice_D.innerHTML = question_screen.optionD;
}

// added event listener to the document. 
document.addEventListener("click", function (event) {
// specified the target of the click to class ".choices"
    var target = event.target; 
// if the textContent of the click from ".choices" equals the value of .correct from the question_key array, it will bring you to next set up questions by calling the next_question function. If not then it will subtract 10 seconds from the timer by calling the time_minus_10 and also bring you to the next question.
    if (target.matches(".choice")){
        if (question_key[questionIndex].correct === event.target.textContent) {
            next_question();
        } else {
            next_question();
            time_minus_10();
        }
// once we hit index 4 of the question_key array it will bring us to the score screen by calling the scoreScreen function. 
        if (questionIndex === 4) {
            scoreScreen();
        }
    }
})

function scoreScreen () {
    q_box.style.display = "none";
    s_box.style.display = "block";

    stop_timer.textContent = secondsLeft;
    final_score.textContent = ('Final Score:' + secondsLeft);
}

document.addEventListener("click", function(event) {
    var target = event.target;
    
    if (target.matches(".submit")) {
        var inputValue = user_input.value; 
        var listEl = document.createElement("li");
        listEl.textContent = (inputValue + " - " + stop_timer.textContent)
        score_display.appendChild(listEl);

        user_input.value = '';
    }
})

high_score.addEventListener("click", scoreScreen);