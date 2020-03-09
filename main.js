//1. set variables
var startcontainerEl = document.getElementById("start-container");
var qustioncontainerEl = document.getElementById("question-container");
var timeEl = document.querySelector(".time");
var questionEl = document.getElementById("question");//to put in questions
var answerEl = document.getElementById("answers");
var optionaEl = document.getElementById("optiona");
var optionbEl = document.getElementById("optionb");
var optioncEl = document.getElementById("optionc");
var optiondEl = document.getElementById("optiond");
var optionContainer = document.querySelector(".answer-buttons");
console.log(optionContainer);
var rightorwrong = document.getElementById("rightorwrong");
var resultpageEl = document.querySelector("#resultpage");
console.log(resultpageEl);
var score = 0;
var questionCounter = 0;
var scoreEl = document.getElementById("score");



//2. create timer countdown, when start button is clicked, this function starts//
var secondsLeft = 90;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time : " + secondsLeft ;

    if(secondsLeft === 0) {
        //once seceond left is 0, a page shows"all done,
        //your final score is--,enter initials
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

//3. To start the game after click the start button
var startButton = document.getElementById("start-button");
var currentqustionIndex = 0;

startButton.addEventListener("click",startQuiz)
function startQuiz(){
    setTime();
    startcontainerEl.classList.add("hide");
    currentqustionIndex = 0;
    qustioncontainerEl.classList.remove("hide");
    setnextQueston();
}


//4. a function to set next question---?

    //put the question in the question text area
    


// 5. create an array of qustions
var myQuestions = [
    {
        title: "What does HTML stand for?",
        answers: [
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language ",
            "Hyper Text Markup Language ",
            "None of the above"
        ],
        correctanswer:"Hyperlinks and Text Markup Language"
    },
    
    {   
        title: "Choose the correct HTML element for the largest heading:",
        answers: [
         "<h1> ",
         "<head>" ,
         "<h6>",
        "<h2>"
        ],
        correctanswer:"<h1> "
    },

    { 
        title: "What does CSS stand for?",
        answers: [
        "Creative Style Sheets" ,
         "Colorful Style Sheets " ,
         "Cascading Style Sheets ",
        "Computer Style Sheets",
        ],
        correctanswer:"Cascading Style Sheets"
    }
]
console.log(currentqustionIndex);

console.log(myQuestions[currentqustionIndex].title);

var correct = myQuestions[1].answers;
//console.log(correct);

console.log(myQuestions[0].correctanswer);



function setnextQueston(){
//6. loop thru the qustion array
    

        var question = myQuestions[currentqustionIndex];
        console.log(currentqustionIndex);
        if (currentqustionIndex<myQuestions.length){
            var title = question.title;
            console.log(title);
            questionEl.innerText = title;
            //console.log(question.);
            optionaEl.innerText = question.answers[0];
            console.log(optionaEl.innerText);
            optionbEl.innerText = question.answers[1];
            optioncEl.innerText = question.answers[2];
            optiondEl.innerText = question.answers[3];
            console.log(question);
            console.log(optionaEl);
            

        
            console.log(questionCounter);
        
            
        }
        else{
            sendMessage();
        }  
}
    
//this is to set next question
optionContainer.addEventListener("click",function(event) {
    var element = event.target;
    questionCounter++;
    console.log(element);
    console.log(element.innerText);
    console.log(questionCounter);
    
        if (element.innerText === myQuestions[currentqustionIndex].correctanswer ) {
            rightorwrong.innerText = "Correct!";
            score = score + 10;
            currentqustionIndex++;
        
        }
        else{
            rightorwrong.innerText = "Wrong!" ;
            currentqustionIndex++;
        }
        //then go to next question
    setnextQueston();
    
});

console.log(score);

   function sendMessage(){
       //remove the hide class
       qustioncontainerEl.classList.add("hide");
       resultpageEl.classList.remove("hide");
       rightorwrong.innerText = "";
        scoreEl.innerText = "Your score is : " + score ;
   }
   //need to delay one second for next question
   //when time is up or last question, go to enter detail page.

 //store the user initial and score into local storage
   var submitScoreButton = document.querySelector("#submitscore")
   console.log(submitScoreButton);
   var storeUserInputs = [];

   submitScoreButton.addEventListener("click",function(event){
        event.preventDefault();
        var initialEl = document.querySelector("#initial").value;
        var user = {
            initial : initialEl,
            userScore : score, 
        }
        console.log(user);
        if (initialEl === ""){
            alert("Initial cannot be blank !");
        }
        else{
            alert("Your initial and score are stored !");
        }

        storeUserInputs.push(user);
        console.log(storeUserInputs);
        initialEl = "";
        console.log(initialEl);
        storeUserInput();


   })

   function storeUserInput(){
        localStorage.setItem("user", JSON.stringify(storeUserInputs));
    }
   //need to put every entry into an array

