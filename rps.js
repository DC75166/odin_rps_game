
//function to randomly generate the computer choices
function getComputerChoice() {

  let index = (Math.floor(Math.random() * 3));
  console.log(index);
  let option = ['rock', 'paper', 'scissors'];
  return option[index];
}

function playGame() {

  // Variables to track the score of both computer and human
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  function getHumanChoice() {
    const buttons = document.querySelector("button");

    buttons.foreach((button) => {
      button.addEventListener('click', (event) => {
        let buttonId = event.target;
        return buttonId.id;
      })
    })
  }

  // Function to play the game for 1 round
  function playRound(humanChoice, computerChoice) {

    const result = document.querySelector('#results');
    const hScore = document.querySelector("#hScore");
    const cScore = document.querySelector("#cScore");

    let loss = "you loose";
    let win = "you win";

    if (humanChoice == computerChoice) {
      result.textContent = ("Draw");
      computerScore;
      humanScore;
    }

    if (humanChoice == "rock") {
      if (computerChoice == "paper") {
        result.textContent = (`${loss} . ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
      else if (computerChoice == "scissors") {
        result.textContent = (`${win} . ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
    }

    if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        result.textContent = (`${win}.${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
      else if (computerChoice == "scissors") {
        result.textContent = (`${loss}.${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    }

    if (humanChoice == "scissors") {
      if (computerChoice == "paper") {
        result.textContent = (`${win}.${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
      else if (computerChoice == "rock") {
        result.textContent = (`${loss}.${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    }

    //  Prints the score for each round
    hScore.textContent = (`Your Score : ${humanScore}`);
    cScore.textContent = (`Computer's Score : ${computerScore}`);
    result.appendChild(hScore);
    result.appendChild(cScore);
  }
  // hScore.textContent = (`Your Score : ${humanScore}`);
  // cScore.textContent = (`Computer's Score : ${computerScore}`);
  // result.appendChild(hScore);
  // result.appendChild(cScore);
  console.log("loop ends");
}

playGame();