// Will cook WDI Fundamentals .js file 2016

// Setup the variables...
var gameBoard = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


// Create a board and the cards within...
function createBoard () {
	for (var i=0; i<cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		gameBoard.appendChild(newCard);
	}
};

// Check if the 2 cards are the same type...
var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match (2x cards the same)");
	} else {
		alert("Not a match, try again!");
		// Moved to isTwoCards 
		//cardsInPlay =[];
	}
	alert("Play again :)");
	//Use setTimeout to reload the page after 600 miliseconds
	//no idea what the bind is, copied from stackoverflow...
	setTimeout(window.location.reload.bind(window.location), 600);
};

// Check if 2 cards are in play...
var isTwoCards = function (event) {
	// event and flipCard(event.target) idea taken from github examples.
	flipCard(event.target);
	// Access the card clicked on
	cardsInPlay.push(this.getAttribute('data-card'));
	//If 2 cards are in play, chack for a match
	if (cardsInPlay.length === 2) {
		// Pass the cards to isMatch to see if they match
		isMatch(cardsInPlay);
		// Clear the cards for next time 
		cardsInPlay = [];
	}
};

// Make the face of the cards appear
function flipCard(card) {
	if (card.getAttribute('data-card') === 'queen') {
		card.innerHTML = '<img src="queen.png" alt="queen" />';
		// cardElement.innerHTML = '<img src="my_king.png" alt="King of Spades" />';.
	} else {
		card.innerHTML = '<img src= "king.png" alt="king"/>';
	}
};



// Create the board, run the script to make the cards.
createBoard();




/* Now Redundant
for (var i=0; i<gameBoard.length; i++) {
}

//console.log("Will, Your JS file is connected to your HTML file! WooHoo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
	//queen and king
	alert("Sorry, try agian");
}

else if (cardOne === cardTwo) {
	// two queens
	alert("You got a match! 2 Queens");
} 

else if (cardThree === cardFour) {
	alert("You got a match! 2 Kings");
}
*/
