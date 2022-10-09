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
const save_UserID = document.querySelector("#submitUserID");


let timeValue = 60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
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
        //increase score by one
        userScore +=1;
        //display correct feed back
        answer.classList.add("correct"); 
        console.log("Correct Answer");
    } //if wrong 
        else{
        //display wrong answer feedback
        answer.classList.add("incorrect"); //adding red color to correct selected option
        console.log("Wrong Answer");
        //if there is 10 seconds or less on the clock end the game
        //if more than 10 seconds on the clock
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
    
    console.log(userScore); //record timeValue to consolelog, this will be the score
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore + '<p> out of </p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user had more than 30 seconds left
        let scoreTag = '<span>and nice , You got <p>'+ userScore + '<p> out of </p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else {
        let scoreTag = '<span>and sorry , You only had </p>' + userScore + '<p> out of </p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }

    document.getElementById('scoreListCount').innerHTML=userScore;
};


//log scores in local storage
//recall from local storage to create leaderboard
//present leaderboard after each quiz and scores are logged



function storeScorelist (event){
    event.preventDefault();
    if(localStorage.getItem('scoreList')){
        //get current localStorage values
        var scoreBoard = JSON.parse(localStorage.getItem('scoreList'));
        //adding new value to localStorage array
        scoreBoard.push({name: intialsUser_Input.value ,score: userScore});
        //saving amended array to local storage
        localStorage.setItem("scoreList", JSON.stringify(scoreBoard));

        // loop over the values
        for (let index = 0; index < scoreBoard.length; index++) {
            const element = scoreBoard[index];

            const nameElement = document.createElement('td');
            nameElement.innerHTML = element.name;

            const scoreElement = document.createElement('td');
            scoreElement.innerHTML = element.score;

            // add to html
            const rowElement =  document.createElement('tr');
            rowElement.appendChild(nameElement)
            rowElement.appendChild(scoreElement)
            document.getElementById("score_list").appendChild(rowElement)
        }
    }else{
      var scoreBoard = [{name: intialsUser_Input.value ,score: userScore}]  
      localStorage.setItem("scoreList", JSON.stringify(scoreBoard));
    }
}

save_UserID.addEventListener("click",storeScorelist);


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
