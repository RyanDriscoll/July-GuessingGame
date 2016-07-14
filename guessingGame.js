/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

(function(){


var playersGuess;

var winningNumber = generateWinningNumber();

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	var num = Math.floor(Math.random()*100) + 1;
	console.log(num);

}


// Fetch the Players Guess

function playersGuessSubmission(){
	playersGuess = +document.getElementById("guess").value;
	console.log(playersGuess);
	document.getElementById('guess').value = "";

	// return playersGuess;

	// add code here
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if (playersGuess === winningNumber) {
		$('#question').append('<p id="winner">You Win!</p>');


	}
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}

function moveFace(){
	debugger;
	$('img').animate({left: '+=100px'}, 500);
}

/* **** Event Listeners/Handlers ****  */

$(document).ready(function() {

	$('button, input').focus(function() {
        $(this).css('outline-color', '#009933');
    });

    
    $('button, .submit').hover(
    function() {
        $(this).addClass('highlight');
    },
    function() {
    	$(this).removeClass('highlight');
    })

    $('.submit').click(function() {
		playersGuessSubmission();
		checkGuess();

	});

}); 

})(); 