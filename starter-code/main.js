var gameBoard = document.getElementById('game-board');

// Now Redundant
//for (var i=0; i<gameBoard.length; i++) {
//}

function createBoard () {
	for (var i=0; i<4; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
};

createBoard();


//console.log("Will, Your JS file is connected to your HTML file! WooHoo!")
/*
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