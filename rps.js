
function playGame() {
//function to randomly generate the computer choices
function getComputerChoice() {

  let index = (Math.floor(Math.random() * 3));
  console.log(index);
  let option = ['rock', 'paper', 'scissors'];
  return option[index];
}

    let humanChoice = '';
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        humanChoice = button.id;
        playRound(getComputerChoice(),humanChoice);
    });
    })

    let humanScore=0;
    let computerScore=0;
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
}
  // hScore.textContent = (`Your Score : ${humanScore}`);
  // cScore.textContent = (`Computer's Score : ${computerScore}`);
  // result.appendChild(hScore);
  // result.appendChild(cScore);
  // console.log("loop ends");

playGame();