/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

(function(){
var called = false;
var arrayOfGuesses = [];
var playersGuess;
var hintCount = 0;

var winningNumber = generateWinningNumber();

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	var num = Math.floor(Math.random()*100) + 1;
	console.log(num);
	return num;
}

function changeAnn(str) {
	$('#message').empty();
	$('#message').append(str);
	$('#announcement').fadeIn('slow');
}
// Fetch the Players Guess

function playersGuessSubmission(){
	playersGuess = +document.getElementById("guess").value;
	console.log(playersGuess);
	document.getElementById('guess').value = "";
	checkGuess();

}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	if (playersGuess > winningNumber) {
		changeAnn("Nope, try a lower number");

	} else {
		changeAnn("Higher than that!");
	}
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if (playersGuess === winningNumber) {
		moveSection();
		changeAnn("YOU WIN!")
		faceDance();

	} else {
		if (arrayOfGuesses.includes(playersGuess)) {
			$('#announcement').fadeOut('fast');	
			changeAnn("You already guessed that number");
		} else {
			arrayOfGuesses.push(playersGuess);
			if (arrayOfGuesses.length === 5){
				changeAnn("Game Over!");
				$('#tryAgain').css('background', 'red');
				console.log(arrayOfGuesses);

			} else {
				lowerOrHigher();
				faceWag();
			}
		}
	}
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

  	while (0 !== currentIndex) {

    	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;
    	temporaryValue = array[currentIndex];
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
  	}
  	return array;
}


// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	var guessesLeft = (5 - (arrayOfGuesses.length));
	var hintArray = [winningNumber];
	for (var i = 1; i < 2*guessesLeft; i++) {
		var rand = generateWinningNumber();
		hintArray.push(rand);
	}
	shuffle(hintArray);
	changeAnn("One of these is the answer: " + hintArray);
}
function moveSection(){
	$('section').animate({top: '+= 100px'}, 500);
}

function faceDance() {
	if (called === true) {
		for (var i = 0; i < 5; i++) {
			$('.face').animate({top: '+=10px'}, 200);
			$('.face').animate({top: '-=10px'}, 200);
		}
	}
}

function faceWag() {
	if (called === true) {
		for (var i = 0; i < 4; i++) {
			$('.face').animate({right: '+=10px'}, 200);
			$('.face').animate({right: '-=10px'}, 200);
		}
	}
}

function moveFaceLeft(){
	if (called === false) {
		$('.face').animate({right: '+=80px'}, 500).delay(1000);
		called = true;
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
    });

    $('#hint').click(function() {
    	if (hintCount === 2) {
    		changeAnn("No more hints. Good luck!");
    	} else {
    		$('#announcement').fadeOut('fast');	
    		moveFaceLeft();
    		provideHint();
    		hintCount++;
   		}
    });

    $('#tryAgain').click(function() {
    	location.reload();
    });

    $('.submit').click(function() {
    	$('#announcement').fadeOut('fast');	
   		moveFaceLeft();
		playersGuessSubmission();

	});

	$('#guess').keyup(function(event){
    	if(event.keyCode == 13) {
        	$(".submit").click();
        }
    });
});


})(); 





