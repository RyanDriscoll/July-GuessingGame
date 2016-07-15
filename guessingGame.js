/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

//(function(){
var called = false;
var arrayOfGuesses = [];
var playersGuess;

var winningNumber = generateWinningNumber();

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	var num = Math.floor(Math.random()*100) + 1;
	console.log(num);
	return num;
}


// Fetch the Players Guess

function playersGuessSubmission(){
	playersGuess = +document.getElementById("guess").value;
	arrayOfGuesses.push(playersGuess);
	console.log(arrayOfGuesses);
	if (arrayOfGuesses.length === 5) {
		alert("Game over!");
	}
	document.getElementById('guess').value = "";

	// return playersGuess;

	// add code here
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	if (playersGuess > winningNumber) {
		$('#announcement h1').replaceWith("Nope, try a lower number");
		$('#announcement').delay(1000).fadeIn('slow');

	} else {
		$('#announcement h1').replaceWith("Higher than that!");
		$('#announcement').delay(1000).fadeIn('slow');
	}
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if (playersGuess === winningNumber) {
		//$('.face').css('position', 'static');
		$('#announcement h1').replaceWith("YOU WIN!");
		$('#announcement').delay(1000).fadeIn('slow');
		//alert("You guessed my lucky number!")
		//$('.face').after('<div id="winner"><br><h1>You Win!</h1></div>');
	} else {
		lowerOrHigher();

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

function moveFaceLeft(){
	if (called === false) {
		$('.face').animate({right: '+=80px'}, 500).delay(1000);
		called = true;
		//
	}
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
    	moveFaceLeft();
		playersGuessSubmission();
		checkGuess();

	});

}); 

//})(); 