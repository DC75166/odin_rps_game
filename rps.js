
function playGame() {

  let humanScore = 0;
  let computerScore = 0;
  let humanChoice = '';
  let count = 0;
  const result = document.querySelector('#results');
  const hScore = document.querySelector("#hScore");
  const cScore = document.querySelector("#cScore");
  const body= document.querySelector("body");

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


  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (count < 5) {
        humanChoice = button.id;
        playRound(getComputerChoice(), humanChoice);
      }
      else{
        reset();
      }
      count++;
    });
  })

  // Function to play the game for 1 round
  function playRound(humanChoice, computerChoice) {

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

  function reset(){
    result.removeChild(hScore);
    result.removeChild(cScore);
    body.removeChild(result);
  }

}

playGame();