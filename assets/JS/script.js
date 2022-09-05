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
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

let timeValue = 60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine
let withValue = 0;
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
};

function queCounter(index){
    //show question number and progressions
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
};

function startTimer(time){
    counter = setInterval(timer,1000);
    function timer (){
        timeCount.textContent = time;
        time --;
    }
};


// when the start game button is clicked
start_btn.addEventListener('click', function(event){
    //show rules and do you want to start the quiz
    info_box.classList.add("activeInfo"); 
});
// when exit quiz button clicked
exit_btn.addEventListener('click', function(event){
    //return to landing page
    info_box.classList.remove("activeInfo");
});
// when continue botton clicked
continue_btn.addEventListener('click', function(event){
    //hide the rules box
    info_box.classList.remove("activeInfo");
    // activate questions
    quiz_box.classList.add("activeQuiz");
    //show questions
    showQuetions(que_count); //calling the showQuestions function
    queCounter(que_numb); //calling question number counter
    startTimer(timeValue);// start timer
    startTimerLine(0);
});


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

// end game
//show the end game page
//stop the timer
//hide the question section

//end game section
//if the user click on submit without input
//show alert, tell the user to type in an input

//if the user types in something and clicks submit
//stor the user intial and high score in local storage
//hide the end game page
//show the highscore page

// high score page
//show all the previous highscores
//grab data from local storage

//when user click on return to home -- redirect them to start page