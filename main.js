//Generate a random selection for computer
function computerPlay() {
  const items = ["rock", "paper", "scissor"];
  return items[Math.floor(Math.random() * 3)];
}
//Change player's selection image
function imageChange() {
  const playerRock = document.querySelector('.rock');
  playerRock.addEventListener('click', () => { document.querySelector('.player-selection').src = 'images/rock_white.svg'; });
  const playerPaper = document.querySelector('.paper');
  playerPaper.addEventListener('click', () => { document.querySelector('.player-selection').src = 'images/paper_white.svg'; });
  const playerScissor = document.querySelector('.scissor');
  playerScissor.addEventListener('click', () => { document.querySelector('.player-selection').src = 'images/scissors_white.svg'; });
}

//Call functions on click
const playerRock = document.querySelector('.rock');
playerRock.addEventListener('click', playRound, imageChange());
const playerPaper = document.querySelector('.paper');
playerPaper.addEventListener('click', playRound, imageChange());
const playerScissor = document.querySelector('.scissor');
playerScissor.addEventListener('click', playRound, imageChange());

//set initial values
let plays = 0;
let computerScore = 0;
let playerScore = 0;

//----
function playRound(playerSelection, computerSelection) {
  playerSelection = this.className.toUpperCase();
  computerSelection = computerPlay().toUpperCase();
  plays++;

  document.querySelector('.rounds').textContent = "ROUND " + plays;

  //Change computer's selection image
  function computerImage(computerSelection) {
    if (computerSelection == "ROCK") {
      document.querySelector('.computer-selection').src = 'images/rock_white.svg';
    } else if (computerSelection == "PAPER") {
      document.querySelector('.computer-selection').src = 'images/paper_white.svg';
    } else {
      document.querySelector('.computer-selection').src = 'images/scissors_white.svg';
    }
  }

  computerImage(computerSelection);
  //get results
  if (playerSelection === "ROCK" && computerSelection === "ROCK" ||
    playerSelection === "PAPER" && computerSelection === "PAPER" ||
    playerSelection === "SCISSOR" && computerSelection === "SCISSOR") {

    document.querySelector('.rounds-result').textContent = "It\'s a draw!";

  } else if (playerSelection === "ROCK" && computerSelection === "PAPER" ||
    playerSelection === "PAPER" && computerSelection === "SCISSOR" ||
    playerSelection === "SCISSOR" && computerSelection === "ROCK") {

    document.querySelector('.rounds-result').textContent = "You lose! " + computerSelection + " beats " + playerSelection;
    computerScore++;

  } else {
    document.querySelector('.rounds-result').textContent = "You win! " + playerSelection + " beats " + computerSelection;
    playerScore++;
  }
  //display score results
  document.querySelector('.player-score').textContent = ":" + playerScore;
  document.querySelector('.computer-score').textContent = ":" + computerScore;

  //display winner of match and reset
  if (plays == 5) {
    if (playerScore < computerScore) {
      document.querySelector('.final-result').textContent = "Game over! You lost";
      document.querySelector('.final-result').style.color = "red";
    }
    if (playerScore > computerScore) {
      document.querySelector('.final-result').textContent = "Congratulations! You won!";
      document.querySelector('.final-result').style.color = "green";
    }
    if (playerScore == computerScore) {
      document.querySelector('.final-result').textContent = "It\'s a tie! Try again.";
      document.querySelector('.final-result').style.color = "orange";
    }

    //remove buttons and result notes at the end of 5 rounds
    //create new button to reload page
    var elem = document.querySelector('.selection-buttons');
    elem.parentNode.removeChild(elem);
    var elem = document.querySelector('.rounds-result');
    elem.parentNode.removeChild(elem);
    const butt = document.querySelector('.restart-button');
    butt.textContent = 'New Match';
    butt.setAttribute('style', 'display: inline-block;');

    //reload page
    butt.addEventListener('click', () => {
      location.reload();
    });
  }
}