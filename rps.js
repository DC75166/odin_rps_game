
function playRps() {

  let humanScore = 0;
  let computerScore = 0;
  let humanSelection = '';
  let count = 0;
  const result = document.querySelector('#results');
  const hScore = document.querySelector("#hScore");
  const cScore = document.querySelector("#cScore");
  // const body = document.querySelector("body");
  const text = document.querySelector("#text");
  let loss = "you loose";
  let win = "you win";


  //function to randomly generate the computer choices
  function getComputerChoice() {

    let random = (Math.floor(Math.random() * 100) + 1);
    console.log(random);
    let choice = '';

    if (random >= 0 && random < 33) {
      choice = "rock";
    }
    else if (random >= 33 && random < 66) {
      choice = "paper";
    }
    else {
      choice = "scissors";
    }
    console.log(choice);
    return choice;
  }

  function playGame() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (count == 4) {
          humanSelection = button.id;
          console.log(humanSelection);
          playRound(humanSelection, getComputerChoice());
          if (humanScore > computerScore) {
            text.textContent = ("You win! Congrats");
            updateScore();
          }
          else if (computerScore > humanScore) {
            text.textContent = ("Computer Wins! Try again");
            updateScore();
          }
          else {
            text.textContent = ("Its a tie!");
            updateScore();
          }
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
      text.textContent = ("Draw");
      computerScore++;
      humanScore++;
    }

    if (humanChoice == "rock") {
      if (computerChoice == "paper") {
        text.textContent = (`${loss} . ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
      else if (computerChoice == "scissors") {
        text.textContent = (`${win} . ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
    }

    if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        text.textContent = (`${win}.${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
      else if (computerChoice == "scissors") {
        text.textContent = (`${loss}.${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    }

    if (humanChoice == "scissors") {
      if (computerChoice == "paper") {
        text.textContent = (`${win}.${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
      else if (computerChoice == "rock") {
        text.textContent = (`${loss}.${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    }
    updateScore();
  }

  //Prints the score for each round
  function updateScore() {
    hScore.textContent = (`Your Score : ${humanScore}`);
    cScore.textContent = (`Computer's Score : ${computerScore}`);
    text.appendChild(hScore);
    text.appendChild(cScore);
  }

  function reset() {
    result.removeChild(text);
    text.textContent = ("End of Game!Reload to play again");
    result.appendChild(text);
  }

  playGame();
}

playRps();