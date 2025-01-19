
function playRps() {

  let humanScore = 0;
  let computerScore = 0;
  let humanSelection = '';
  let computerSelection = '';
  let count = 0;
  const result = document.querySelector('#results');
  const hScore = document.querySelector("#hScore");
  const cScore = document.querySelector("#cScore");
  const text = document.querySelector("#text");
  const buttons = document.querySelectorAll("button");
  let loss = "You loose";
  let win = "You win";


  //function to randomly generate the computer choices
  function getComputerChoice() {

    let random = (Math.floor(Math.random() * 100) + 1);

    if (random >= 0 && random < 33) {
      computerSelection = "rock";
    }
    else if (random >= 33 && random < 66) {
      computerSelection = "paper";
    }
    else {
      computerSelection = "scissors";
    }
    return computerSelection;
  }

  // Function to play the game 5 times
  function playGame() {
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (count == 4) {
          humanSelection = button.id;
          playRound(humanSelection, getComputerChoice());
          if (humanScore > computerScore) {
            text.textContent = ("You win! Congrats");
          }
          else if (computerScore > humanScore) {
            text.textContent = ("Computer Wins! Try again");
          }
          else {
            text.textContent = ("Its a tie!");
          }
          updateScore();
        }
        else if (count < 4) {
          humanSelection = button.id;
          playRound(humanSelection, getComputerChoice());
        }
        else {
          reset();
        }
        count++;
      });
    })
  }


  // Function to play the game for 1 round
  function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
      text.textContent = ( `Draw, Computer Choice : ${computerChoice} Human Choice : ${humanChoice}`);
      computerScore++;
      humanScore++;
    }

    if (humanChoice == "rock") {
      if (computerChoice == "paper") {
        text.textContent = (`${loss} , ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
      else if (computerChoice == "scissors") {
        text.textContent = (`${win} , ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
    }

    if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        text.textContent = (`${win} , ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
      else if (computerChoice == "scissors") {
        text.textContent = (`${loss} , ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    }

    if (humanChoice == "scissors") {
      if (computerChoice == "paper") {
        text.textContent = (`${win} , ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
      else if (computerChoice == "rock") {
        text.textContent = (`${loss} , ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    }
  }

  //Function to Print the score for each round
  function updateScore() {
    hScore.textContent = (`Your Score : ${humanScore}`);
    cScore.textContent = (`Computer's Score : ${computerScore}`);
    text.appendChild(hScore);
    text.appendChild(cScore);
  }

  //Function to reset the game after 5 rounds  
  function reset() {
    result.removeChild(text);
    text.textContent = ("End of Game! Reload to play again");
    result.appendChild(text);
  }

  playGame();
}

playRps();