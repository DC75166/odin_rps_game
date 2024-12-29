function getComputerChoice(){

  var random = Math.floor(Math.random()*100);
  console.log(random);

  if(random>=0 && random<33){
    console.log("rock");
  }
  else if(random>=33 && random<66){
    console.log("paper");
  }
  else{
    console.log("scissors");
  }
}

getComputerChoice();

