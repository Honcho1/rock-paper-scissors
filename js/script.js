// This function plays a single round of the "rock paper scissors" game

function playRound(playerSelection) {
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  if (playerSelection === computerSelection) {
    return "It is a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose ${computerSelection} beats ${playerSelection}`;
  }
}

let playerScore = 0;
let computerScore = 0;
const resultDiv = document.getElementById("result");

const buttons = document.querySelectorAll(".rps-button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerSelection = event.currentTarget.value;
    const gameResult = playRound(playerSelection);
    resultDiv.textContent = gameResult;
    if (gameResult.startsWith("You win")) playerScore++;
    else if (gameResult.startsWith("You lose")) computerScore++;
    document.getElementById(
      "player-score"
    ).innerText = `Player: ${playerScore}`;
    document.getElementById(
      "computer-score"
    ).innerText = `Computer: ${computerScore}`;
    if (playerScore === 5) {
      alert("You have won the round!");
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      alert("You have lost the round!");
      playerScore = 0;
      computerScore = 0;
    }
  });
});
