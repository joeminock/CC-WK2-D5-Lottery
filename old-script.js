//Variables
var bank = 10;
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var guess = [];
var draw = [];
var match = 0;


//Check bank value, if >=2, proceed. Else, alert "You no money, you no play"

function bankCheck() {
	'use strict'
	if (bank < 2) {
		document.getElementById("errormessage").innerHTML = "I got 99 problems, and clearly your net-worth is one... No money, no play ";
	} else {
		checkInput();
	};
};

//Check if any input field is blank

function checkInput() {
	for (var i = 1; i <= 4; i++) {
		var inputnow = "input" + i;
		//console.log(inputnow);
		var newNum = document.getElementById(inputnow).value;
		console.log(newNum);
		if (newNum.length < 1 || newNum == undefined) {
			document.getElementById("errormessage").innerHTML = "<p>Hey Dummy, You forgot to enter a number. You might do that before I just decide to keep your money and tell you to go away</p>";
		} else {
			console.log("checking number" + newNum);
			checkNum(newNum);
		}
	}
}


//Check if type is integer and in range 1-10, check if it's unique and style red border around duplicate
function checkNum(x) {
	var arrayLength = guess.length;
	var match = false;
	if (x > 0 && x < 11 && (x % 1 == 0)) {
		if (guess.length < 1) {
			guess.push(x);
		} else {
			for (i = 0; i <= arrayLength; i++) {
				if (guess[i] == x) {
					document.getElementById("errormessage").innerHTML = "<p>Oops! Duplicate numers! Try again!</p>";
					match = true;
					break;
				} else {
					match = false;
				}
			}
		}
	}

	if (!match) {
		guess.push(x);
	}
}




//After Looping through all 4 inputs, take $2. 



//Draw 4 random numbers and append to draw array. Use Math.random for numbers in nums array, then remove number at that index. Loop 4 times. 



//Compare Guess and Draw numbers, increment matches when present



//Present user with game status message and add money to bank if win.