//Generate a random selection for computer
function computerPlay() {
const items = ["rock", "paper", "scissor"];
return items[Math.floor(Math.random() * 3)];
}
//Change player's selection image
function imageChange() {
  const playerRock = document.querySelector('.rock');
  playerRock.addEventListener('click', () => {document.querySelector('.playerSelection').src='images/rock_white.svg';});
  const playerPaper = document.querySelector('.paper');
  playerPaper.addEventListener('click', () => {document.querySelector('.playerSelection').src='images/paper_white.svg';});
  const playerScissor = document.querySelector('.scissor');
  playerScissor.addEventListener('click', () => {document.querySelector('.playerSelection').src='images/scissors_white.svg';});
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

  document.querySelector('.rounds').textContent="ROUND " + plays;

//Change computer's selection image
  function computerImage(computerSelection){
    if(computerSelection == "ROCK"){
      document.querySelector('.computerSelection').src='images/rock_white.svg';
    }else if(computerSelection == "PAPER"){
      document.querySelector('.computerSelection').src='images/paper_white.svg';
    }else{
      document.querySelector('.computerSelection').src='images/scissors_white.svg';
    }
  }

  computerImage(computerSelection);
  //get results
  if(playerSelection === "ROCK" && computerSelection === "ROCK" ||
   playerSelection === "PAPER" && computerSelection === "PAPER" ||
   playerSelection === "SCISSOR" && computerSelection === "SCISSOR"){
     document.querySelector('.result').textContent="It\'s a draw!";

    }else if(playerSelection === "ROCK" && computerSelection === "PAPER" ||
             playerSelection === "PAPER" && computerSelection === "SCISSOR" ||
             playerSelection === "SCISSOR" && computerSelection === "ROCK"){
               document.querySelector('.result').textContent="You lose! " + computerSelection + " beats " + playerSelection;
               computerScore++;

        }else{
          document.querySelector('.result').textContent="You win! " + playerSelection + " beats " + computerSelection;
          playerScore++;
        }
        //display score results
        document.querySelector('.playerScore').textContent=":" + playerScore;
        document.querySelector('.computerScore').textContent=":" + computerScore;

        //display winner of match and reset
        if(plays == 5){
          if (playerScore < computerScore){
            document.querySelector('.finalResult').textContent="Game over! You lost";
            document.querySelector('.finalResult').style.color="red";
          }
          if (playerScore > computerScore){
            document.querySelector('.finalResult').textContent="Congratulations! You won!";
            document.querySelector('.finalResult').style.color="green";
          }
          if (playerScore == computerScore){
            document.querySelector('.finalResult').textContent="It\'s a tie! Try again.";
            document.querySelector('.finalResult').style.color="orange";
          }

          //remove buttons and result notes at the end of 5 rounds
          //create new button to reload page
          var elem = document.querySelector('.buttons');
          elem.parentNode.removeChild(elem);
          var elem = document.querySelector('.result');
          elem.parentNode.removeChild(elem);
          const butt = document.createElement('button');
          butt.classList.add('restart');
          butt.textContent='New Match';
          butt.setAttribute('style','font-size:2.5em;')
          const startNew = document.querySelector('.restartButton');
          startNew.appendChild(butt);

          //reload page
          butt.addEventListener('click', () => {
            location.reload();
          });
        }
}
