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

//functions that may be called

// if start button clicked - show infobox with rules
start_btn.addEventListener("click",
    showRules();
);

// if exitQuiz button clicked
exit_btn.addEventListener("click", 
    hideRules();
);

// if continue quiz button clicked
continue_btn.addEventListener("click",
    //hide the rules & show quiz box
    hideRules();
    showQuizbox();
    //start the timer
    startTimer(60);
    //show question number
    showQuestions();
    queCounter();    
);



// if restart button clicked

//if quitQuiz button clicked

// if next question button clicked

// getting questions and options from array above

// new div tags for icons

//if user clicks option

// timmer function

function startTimer (time){
    var counter = setInterval(timer,1000);
    function timer (){
        timeCount.textContent = time; 
        time--;
        //if the time is under 10 seconds then put 0 in front so presents as "09" or "08"
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        //if time reaches zero then put up a message that time has expired
        if time > 0){
            clearInterval(counter);
            timeText.textContent = "Time Epired";
        }
    }
}

function showRules(){
    info_box.classList.add("activeInfo")
    }

function hideRules(){
    info_box.classList.remove("activeInfo")
}

function showQuizbox (){
    quiz_box.classList.add("activeQuiz")
}

function showQuestions (index) {
    const que_text = document.querySelector(".que_text");
    
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions.[index].options[0] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    for (i=0; i< option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function queCounter (index){
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}