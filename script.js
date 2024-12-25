
// All the stuff to display
const playerScore = document.querySelector("#player-score span");
const computerScore = document.querySelector("#computer-score span");
const playerMoveDisplay = document.querySelector("#player-move span");
const computerMoveDisplay = document.querySelector("#computer-move span");
const resultDisplay = document.querySelector(".result-container h3");

// all buttons in an iterator
const playerChoices = document.querySelectorAll("button");

let playerMove;
let computerMove;
let playerChoice;

function generateComputerMove(){
    let choiceIndex = Math.floor(Math.random()*playerChoices.length);
    return playerChoices[choiceIndex].id;
}

function getResult(playerMove, computerMove){

    if (playerMove == computerMove){
        resultDisplay.innerHTML = "Tied";
    } 
    else if ( (playerMove=="rock" && computerMove=="scissor") || (playerMove=="paper" && computerMove=="rock") || (playerMove=="scissor" && computerMove=="paper") ){
        resultDisplay.innerHTML = "You Won";
        updatedPlayerScore = String(parseInt(playerScore.innerHTML) + 1);
        playerScore.innerHTML = updatedPlayerScore;
    } 
    else{
        resultDisplay.innerHTML = "You Lose";
        updatedComputerScore = String(parseInt(computerScore.innerHTML) + 1);
        computerScore.innerHTML = updatedComputerScore;
    }
}

for (let i=0; i<playerChoices.length; i++){

    playerChoice = playerChoices[i];
    playerChoice.addEventListener("click", (e) => {
        
        let index = e.target.src.lastIndexOf("/");
        playerMove = e.target.src.slice(index+1, -4);
        computerMove = generateComputerMove();

        playerMoveDisplay.innerHTML = playerMove;
        computerMoveDisplay.innerHTML = computerMove;
    
        getResult(playerMove, computerMove);
    });
}