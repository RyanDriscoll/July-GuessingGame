/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

(function(){


var playersGuess;

var winningNumber = generateWinningNumber();

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random()*100) + 1;
}

// Fetch the Players Guess

function playersGuessSubmission(){
	
	playersGuess = +$("input[name=number]").val();
	$("input[name=number]").val("");
	checkGuess();

	// return playersGuess;

	// add code here
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	$('.face').animate({marginLeft: '10px'}, 500);
	if (playersGuess === winningNumber) {
		$('.face').append('<p id="winner">You Win!</p>');

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

/* **** Event Listeners/Handlers ****  */

$(document).ready(function() {

	$('button').focus(function() {
        $(this).css('outline-color', '#009933');
    });

	$('input').focus(function() {
        $(this).css('outline-color', '#009933');
    });
    
    $('button').hover(
    function() {
        $(this).addClass('highlight');
    },
    function() {
    	$(this).removeClass('highlight');
    })

    $('#submit').click(function() {
		playersGuessSubmission();
	});

}); 

})(); 