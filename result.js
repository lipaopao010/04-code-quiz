// get user data from local storage
var storeUserInputs = [];
//need to put every entry into an array
var storedScoreEl = document.querySelector("#stored-score");

init();


function renderUsers() {
    // Clear todoList element and update todoCountSpan
    storedScoreEl.innerHTML = "";
    
  
    // Render a new li for data
    for (var i = 0; i < storeUserInputs.length; i++) {
      var eachUser = storeUserInputs[i].initial + "--" + storeUserInputs[i].userScore;
  
      var li = document.createElement("li");
      li.textContent = eachUser;
      storedScoreEl.appendChild(li);
    }
  }

function init(){
    //get stored data from local storage
    //parsing the JSON string to an object
    var storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);
    if (storedUser !== null){
        storeUserInputs = storedUser;
        console.log(storeUserInputs[0].initial);
    }
    renderUsers();
}

//WHEN CLEAR HIGHSCORES, CLEAR THE RESULTS//
    clear.addEventListener("click",function(){
    storedScoreEl.textContent = "";

   })