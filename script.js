
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var pTag = document.querySelector("p");
score = 0








//if time is zero or all questions are answered, show final message//

function sendMessage() {
  timeEl.textContent = "Time :  " + secondsLeft;

  var finalScore = document.createElement ("ul");
  finalScore.innerHTML = "Your final score is" + score ;
  pTag.appendChild(finalScore);
}

//call the function, when click start button



function buildQuiz(){}

function showResults(){}

//once click the submit button, the questions will be presented
buildQuiz();

// click on answer, show results
//submitButton.addEventListener('click', showResults);


function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }



// if answer is correct
//if(userAnswer === currentQuestion.correctAnswer){
    // add to the number of correct answers
    //score++;
  
    // show yes
    //answerContainers[questionNumber].style.color = 'lightgreen';
  //}
  // if answer is wrong or blank
  //else{
    // shows wrong
    //answerContainers[questionNumber].style.color = 'red';
  //}








//Final step, to record the scores

// put the final score in highscore page

    //scoreSubmit.addEventListener("click", function(event) {
   // event.preventDefault();
    
    //var item = document.createElement("div");
    //item.textContent = inital + score;
     // formEl.append(item);
    //}
  //);