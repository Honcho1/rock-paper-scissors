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
const body = document.querySelector("body");
const resultDiv = document.createElement("div");
const playerScoreDiv = document.createElement("div");
const computerScoreDiv = document.createElement("div");

const buttons = document.querySelectorAll(".rps-button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerSelection = event.currentTarget.value;
    const gameResult = playRound(playerSelection);
    resultDiv.textContent = gameResult;
    body.appendChild(resultDiv);
  });
});
