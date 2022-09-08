//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const form_container =document.querySelector("form_containter");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
const logScore_btn = document.querySelector(".buttons .logScore");
const scoreCount = 10;
const result_form = document.querySelector("#results_form");
const intials_input = document.querySelector("#userInitials");


let timeValue = 60;
let que_count = 0;
let que_numb = 1;
let userScore5;
let counter;
let counterLine
let withValue = 0;
let time;
let resultTime = timeValue
let scoreList = [];
let intialsUser_Input = document.getElementById("userInitials");
let score_List_results = document.getElementById("score_list");
let score_List_count = document.getElementById("scoreListCount");

function queCounter(index){
    //show question number and progressions
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
};

function startTimer(time){
    counter = setInterval(function timer (){
        timeCount.textContent = timeValue;
        timeValue --;
    },1000);
};

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

function stopTimer(time){
    clearInterval;
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
});



//if user clicked on option
function optionSelected(answer){
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    //when an anwer is clicked
    //check if the choice is correct or not
    if(userAns === correcAns){ 
        //if correct
        //display correct feed back
        answer.classList.add("correct"); 
        console.log("Correct Answer");
    } //if wrong 
        else{
        //display wrong answer feedback
        answer.classList.add("incorrect"); //adding red color to correct selected option
        console.log("Wrong Answer");
        //deduct 10 seconds from timer
        timeValue -=10;         
    

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

//next question function
next_btn.addEventListener('click', function(event){
    if(que_count<questions.length -1){
        que_count++;//add to qustion count to pull next question
        que_numb++; // add to the question number 
        showQuetions(que_count); // pulls the next question based on the count number
        queCounter(que_numb); // displays next number on question list
        next_btn.classList.remove("show");//removes next button
    } else
        showResult();//will show the result of the quiz
});

function showResult(){
    info_box.classList.remove("activeInfo"); //hide quiz section 
    quiz_box.classList.remove("activeQuiz"); //hide quiz section
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    stopTimer();//stop the timer
    let resultTime = timeValue
    console.log(resultTime); //record timeValue to consolelog, this will be the score
    if (resultTime > 40){ // if user had more than 40 seconds left
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! , You had <p>'+ resultTime +'</p> seconds left.</span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(resultTime > 30){ // if user had more than 30 seconds left
        let scoreTag = '<span>and nice , You had <p>'+ resultTime +'</p> seconds left.</span>';
        scoreText.innerHTML = scoreTag;
    }
    else if (resultTime <=29){ // if user had less than 20 seconds left
        let scoreTag = '<span>and sorry , You had only <p>'+ resultTime +'</p> seconds left.</span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(resultTime <= 0){ // if user had more than 20 seconds left
        let scoreTag = '<span>and sorry , You ran out of time.</span>';
        scoreText.innerHTML = scoreTag;
    }
};

// function storeScorelist (){
//     localStorage.setItem("scoreList", JSON.stringify(scoreList));
// }

// function renderScorelist(){
//     score_List_results.innerHTML = "";
//     score_List_count.textContent = scoreList.length;
//     for (var i=0; i < scoreList.length; i++){
//         var nameList = scoreList[i];
//         var li = document.createElement("li");
//         li.textContent = nameList;
//         li.setAttribute("data-index",i);
//         scoreList.appendChild(li);
//     }
// }


// result_form.addEventListener("submit", function(event){
//     result_box.classList.remove("activeResult");
//     form_container.classList.add("activeForm");
//     event.preventDefault();
//     //show alert, tell the user to type in an input
//     var intialsUser = intialsUser_Input.value.trim();
//         console.log("Initials", intialsUser);
//     //if the user types in something and clicks submit
//     if(!intialsUser) {
//     return;
//     };
//     //store the user intial and high score in local storage
// });


//when user click on return to home -- redirect them to start page
