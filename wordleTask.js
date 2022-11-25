let row = 0;
let gameOver = true;
let attempt = 10;
window.onload = function(){
    intialize();
}
//var word = "HOCKEY";
var guesslist = ["hellow","welcme","orange","hockey"];
var word = guesslist[Math.floor(Math.random()*guesslist.length)].toUpperCase();
console.log(word);
function intialize() {
    // Create the game board
		 
           
        
        document.addEventListener("keyup", (e) => {
            processInput(e);
			
        })
}

function processInput(e) {
    //if (gameOver) return; 

    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        console.log(e.code);
         if (row < 7) {
            let currTile = document.getElementById(row.toString());
            
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
				
            }
			 row += 1;
			
        }
    }
    else if (e.code == "Backspace") {
        if (0 < row && row <= 6) {
            row -=1;
        }
        let currTile = document.getElementById(row.toString());
        currTile.innerText = "";
    }

    else if (e.code == "Enter") {
        update();
    }
}

function update() {
	let absent= "";
    let guess = "";
	attempt -=1;

    //string up the guesses into the word
    for (let c = 0; c < row; c++) {
        let currTile = document.getElementById(c.toString() );
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase(); 
    //word= word.toLowerCase();//case sensitive
    console.log(guess+" "+word);


    let letterCount = {}; 
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letterCount[letter]) {
           letterCount[letter] += 1;
        } 
        else {
           letterCount[letter] = 1;
        }
    }

    console.log(letterCount);

    let correct = 0;
	
    for (let c = 0; c < row; c++) {
            let currTile = document.getElementById(c.toString());
            let letter = currTile.innerText;
            console.log(letter+word[c]);

    
            //Is it in the correct position?
            if (word[c] == letter) {
                currTile.classList.add("correct");
               
    
                correct += 1;
               
            }
			
            else if(!(word.includes(letter)))
			{
				
				absent += letter+ ",";
				currTile.innerHTML = "";
			}
			else
			currTile.innerHTML = "";

			document.getElementById("wrong").innerHTML= absent;
			console.log("ab:"+absent);
			document.getElementById("attempt").innerHTML= attempt;
           if(correct == 6)
		   {
			   document.getElementById("message").innerHTML= "You Win";
		   }
		   if(attempt == 0 && correct!= 6)
		   {
			   document.getElementById("message").innerHTML= "You Lost";
		   }
	}
    row =0; //start new row

}