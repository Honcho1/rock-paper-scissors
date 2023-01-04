// This function returns either 'Rock', 'Paper', or 'Scissors'.
function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];

}

// This function plays a single round of the "Rock Paper Scissors" game.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "This is a draw";
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock crushes scissors.";
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors cuts paper.";
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock crushes scissors.";
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors cuts paper.";
    
    } else {
        return "";
    }

}

const playerSelection = prompt("Choose your hand: Rock, Paper, or Scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));