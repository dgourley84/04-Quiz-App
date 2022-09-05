//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

function startButton 

// when the start game button is clicked

    // hide landing page
    //showe rules and do you want to start the quiz

// when continue botton clicked
    // activate questions

// when exit quiz button clicked
    //return to landing page

// question section activated
    //show questions
    // start timer

//when an anwer is clicked
//check if the choice is correct or not

//if correct
//display correct feed back
//move to next question

//if wrong 
//display wrong answer feedback
//deduct 10 seconds from timer

//if deducting time and time becomes negative then
// -- end game function

// if time remaining is positive move to next question

//click on answer in last question then
//run end game function