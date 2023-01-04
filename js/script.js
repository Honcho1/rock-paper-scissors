// This function returns either 'Rock', 'Paper', or 'Scissors'.
function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];

}

// This function plays a single round of the "Rock Paper Scissors" game.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "This is a tie";
    }

    else if (playerSelection === "rock" && computerSelection === "paper" ||
             playerSelection === "paper" && computerSelection === "scissors" ||
             playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer wins!";
    } else {
        return "You win!";
    }

}


const computerSelection = getComputerChoice();


// This function plays a 5 round game that keeps score and reports a winner or loser at the end.
function game() {

    let userScore = 0;
    let computerScore = 0;
    

    for (i = 0; i < 5; i++) {

        const playerSelection = prompt("Choose your hand: Rock, Paper, or Scissors").toLowerCase();
        const result = playRound(playerSelection, computerSelection);

        if (result === "Computer wins!") {
                computerScore++;
            } 

        else if (result === "You win!") {
                    userScore++;
                 }

    }

    if (userScore < computerScore) {
        return "You lost! Computer wins the game."
    }

    else if (userScore > computerScore) {
        return "You won! You have beaten computer."
    } else {
        return "The game is a tie! Do you want to play again?"
    }

  
}

const finalWinner = game();
console.log(finalWinner);
