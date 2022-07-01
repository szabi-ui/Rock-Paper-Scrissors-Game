// VARIABLES
const score = document.querySelector('.score');
const outcome = document.querySelector('.outcome');



// GENERATE A RANDOM  RESULT OUT OF: rock, paper, scissors
function computerPlay(){
    let num = Math.floor(Math.random() * 3);
    if(num === 0) {
        return "rock";
    }
    else if(num === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


// COMPARE PLAYER SELECTION WITH COMPUTER'S SELECTION
function playRound(playerChoice, computerChoice) {

    if(playerChoice === computerChoice) {
        return "Tie! Pick again!";
    }
    else if(computerChoice === "paper" && playerChoice === "rock") {
        return "You lost! Paper beats rock!"
    }
    else if(computerChoice === "paper" && playerChoice === "scissors") {
        return "You win! Scissors cutts paper!"
    }
    else if(computerChoice === "scissors" && playerChoice === "rock") {
        return "You win! Rock beats scissors!";
    }
    else if(computerChoice === "scissors" && playerChoice === "paper") {
        return "You lost! Scissors cutts paper!"
    }
    else if(computerChoice === "rock" && playerChoice === "scissors") {
        return "You lost! Rock breaks scissors!"
    }else if(computerChoice === "rock" && playerChoice === "paper") {
        return "You win! Paper covers rock!"
    }else {
        console.log("Pick a valid value: rock, paper, scissors");
    }
}

// STARTS THE GAME
function game() {
    let playerCount = 0;
    let computerCount = 0;
    update(playerCount, computerCount);
    
    while (playerCount < 5 && computerCount < 5) {
        let playerSelection = prompt("Enter your pick! May it be rock, paper, or scissors");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        
        if(result === "Tie! Pick again!") {
            continue;
        } 
        else if(result === "You lost! Paper beats rock!") {
            computerCount++;
            update(playerCount, computerCount);
        }
        else if(result === "You lost! Scissors cutts paper!") {
            computerCount++;
            update(playerCount, computerCount);
        }
        else if(result === "You lost! Rock breaks scissors!") {
            computerCount++;
        }
        else if(result === "You win! Scissors cutts paper!") {
            playerCount++;
            update(playerCount, computerCount);
        }
        else if(result === "You win! Rock beats scissors!") {
            playerCount++;
            update(playerCount, computerCount);
        }
        else if(result === "You win! Paper covers rock!") {
            playerCount++;
            update(playerCount, computerCount);
        }
    }

    // UPDATE OUTCOME, the paragraph beneath score
    if(playerCount === 5) {
        outcome.textContent = "Yay, you won!";
    }
    else if(computerCount === 5) {
        outcome.textContent = "O no, you lose!";
    }

}


// CALL  Functions
game();


// THIS BLOCK IS ADDED BY ME AS AN EXTRA
// it updates score variable in viewport
function update(count1, count2) {
    score.textContent = `${count1} : ${count2}`;
}



