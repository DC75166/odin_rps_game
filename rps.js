function getComputerChoice() {
    let numb =  Math.floor((Math.random()*100)+1);
    console.log(numb);
    if(numb<=40){
        console.log("rock");
    }
    else if(numb<=70){
        console.log("paper");
    }
    else{
        console.log("scissors");
    }
}
getComputerChoice();