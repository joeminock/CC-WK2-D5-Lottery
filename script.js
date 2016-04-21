var bankValue = 10;


	//Check bank value, if >=2, proceed. Else, insult broke player. 
	function bankCheck() {
		var guess = [];
		if (bankValue < 2) {
			document.getElementById("message").innerHTML += '<h3 style="color:red">I got 99 problems, and clearly your net-worth is one... No money, no play</h3>';
		} else {
			console.log("good to go, bank is full")
            document.getElementById("message").innerHTML = "Game On!";
			if (checkInput(guess)){
				drawNums(guess);
			}
		}
     
	}


	//Check if any input field is blank
	function checkInput(guess) {
		for (var i = 1; i <= 4; i++) {
			var inputnow = "input" + i;
			//console.log(inputnow);
			var newNum = parseInt(document.getElementById(inputnow).value);
			console.log(newNum);
			if (isValid(newNum)) {
				
				if (checkNum(newNum, guess)) {
					// Good to go. 
				} else {
					document.getElementById("message").innerHTML = "<p>" + newNum + "Is a duplicate number. Fix it</p>";
				return false;
				}
				
			} else {
				
				document.getElementById("message").innerHTML = "<p>Hey, you forgot to enter a number. You might do that before I just decide to keep your money and tell you to go away</p>";
				return false;
			}
			
		}
	}

	function isValid(newNum) {
		if (newNum == undefined) {
			return false;
		} 
		if (isNaN(newNum)) {
			return false;
		}
		if (newNum < 0 || newNum < 10) {
			return false;
		}
	}


	//Check if type is integer and in range 1-10, check if it's unique and style red border around duplicate
	function checkNum(x, guess) {
		if (guess.indexOf(x) == -1) {
			guess.push (x);
			return true;
		} 
		return false;
	}

// end of checknum function




//Draw 4 random numbers and append to draw array. Use Math.random for numbers in nums array, then remove number at that index. Loop 4 times.

function drawNums(guess){
    var nums = [1,2,3,4,5,6,7,8,9,10];
    var drawResult = [];
    for (i = 0; i < 4; i++) {
        var drawIndex = Math.floor(Math.random() * nums.length);
        //console.log(draw);
        drawResult[i] = nums[drawIndex];
        nums.splice(drawIndex, 1);
    }
    console.log(drawResult);
    compareNums(drawResult, guess);
}



//compare the guess to the draw

function compareNums(results, guesses){
    var numMatches = 0;
    for (i=0; i < 4; i++){
        var guess = guesses[i];
		if (results.indexOf(guess) != -1) {
			numMatches += 1;
		}
    }
   console.log("Your matches: " + numMatches);
    console.log(x);
   calcMoney(numMatches); 
}

//calc the money
function calcMoney(theMatches){
    bankValue = bankValue - 2 + (Math.pow(2,theMatches));
    console.log("You new Bank value is: " + bankValue);
	guess=[];
    
}