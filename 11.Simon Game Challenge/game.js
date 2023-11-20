//Step 2
var gamePattern=[];
//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red","blue","green","yellow"];

//Store clicked colours
var userClickedPattern=[];

var level=0;
var started = false;
//1. Inside game.js create a new function called nextSequence()
function nextSequence(){
    userClickedPattern=[];
    level++;
  $("#level-title").text("Level " +level);
    //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random()*4);

    //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //Step 3
  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  playSound(randomChosenColour);
//   animatePress(randomChosenColour);
}


// Click Handle Step 4
    //Detect click
    $(".btn").on("click",function(){
//      console.log($(this).attr("id"));

//Store the id that got clicked
        var userChosenColour=$(this).attr("id");
        userClickedPattern.push(userChosenColour);
        // var audio = new Audio("./sounds/" + userChosenColour + ".mp3");
        // audio.play();
        playSound(userChosenColour);
        animatePress(userChosenColour);
         //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
    });

//Step 5
function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

// Step 6 - Add Animations to User Clicks
//Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
//Javascript to remove the pressed class after a 100 milliseconds
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");     
    }, 100);
}

//Step 7

$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level " +level);
    nextSequence();
    started= true;
    }
    
});

//Step 8
function checkAnswer(currentLevel){

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){
  
          //5. Call nextSequence() after a 1000 millisecond delay.
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        startOver();
      }
      
}
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
    }