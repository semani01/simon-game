//Step 2 - Creating an Array to hold button colors and Generating Random Number
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber = 0;
var randomChosenColor = "";
var userClickedPattern = [];

var gamePattern = [];

function nextSequence(){
    
    userClickedPattern = [];
    level++;   
    $("#level-title").html("Level " + level);

    randomNumber = Math.round(Math.random() * 3);
    randomChosenColor = buttonColors[randomNumber];

    //console.log(randomNumber);
    //console.log(randomChosenColor);

    gamePattern.push(randomChosenColor);    

    //Step 3 - Show the Sequence to the User with Animations and Sounds
    $("#" + randomChosenColor).fadeOut(500).fadeIn(500);

    playSound(randomChosenColor);
    // animatePress(randomChosenColor);

     

}

//Step 4 - Check Which Button is Pressed
$(document).ready(function() {
    $(".btn").click(function() {
        // OPTIMIZATION: Stop here if the game hasn't started
        if (!started) return;

        var userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        
        //console.log(userChosenColor);
        
        playSound(userChosenColor);
        animatePress(userChosenColor);

        // Call checkAnswer passing the index of the last answer in the user's sequence
        checkAnswer(userClickedPattern.length - 1);
    });
});



//Step 5 - Add Sounds to Button Clicks
function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}


//Step 6 - Add Animations to User Clicks
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


//Step 7 - Start the Game
var started = false;
var level = 0;

$(document).one("keydown", function(){
    // $("#level-title").html("Level " + level);
    if(!started){
        nextSequence();
        started = true;
    }
});


//Step 8 - Check the User's Answer Against the Game Sequence8
function checkAnswer(currentLevel){

    // 1. Check if the most recent user answer is the same as the game pattern
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        //console.log("Success");

        // 2. If the user got the most recent answer right, then check that they have finished their sequence
        if (userClickedPattern.length === gamePattern.length) {
            
            // 3. Call nextSequence() after a 1000 millisecond delay
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        //console.log("Wrong");
        
        //Step 9 - Game Over
        //1. Playing game over sound
        playSound("wrong");
        
        //2.Flashing a red background
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        //3.Changing h1 to say 'Game Over'
        $("#level-title").html("Game Over, Press Any Key to Restart");
        

        //4. Call startOver with a timeout
        setTimeout(function() {
            startOver();    
        }, 200);
        
    }
}

//Step 10 - Restart the Game
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;

    
    $(document).one("keydown", function(){
        // $("#level-title").html("Level " + level);
        if(!started){
            nextSequence();
            started = true;
        }
    });
}