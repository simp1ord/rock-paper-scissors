//functions for the game

function computerPick(){
    const randomly = ['rock', 'paper', 'scissors'];
    let pick = randomly[Math.floor(Math.random()*randomly.length)]; //picks between the 3 in the array
    return (pick);
}

function playRound(playerSelection, computerScore, playerScore) {
  //importing computerPick
  let computerSelection = computerPick();
    
    if (playerScore === 5){
        results.textContent = 'We have a winner, YOU beat the COMPUTER!';
    } else if (computerScore === 5){
        results.textContent = 'Sorry, dude, you lose to the COMPUTER!';
    }else{
        //continue Game
    }
        if (playerSelection === computerSelection) {
            results.textContent = `Tie ${playerSelection} equals ${computerSelection}!`;
        } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                    (playerSelection === 'paper' && computerSelection === 'rock') ||
                    (playerSelection === 'scissors' && computerSelection === 'paper')) {
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
        } else {
            results.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}!`;
            computerScore++;
        }
}

//The Dom Maniupulation code below 

//buttons and what they do
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

rock.addEventListener("click", function () {
    playRound('rock', 0, 0);
});
paper.addEventListener("click", function () {
    playRound('paper', 0, 0);
});
scissors.addEventListener("click", function () {
    playRound('scissors', 0, 0);
});

//results in a text box
const results = document.querySelector('#results');
results.style.color = 'white';
results.style.border = '2px solid white';
results.style.background = "#333385";


//not used

/*function game() {
let computerScore = 0;
let playerScore = 0;
    for (let i = 0; i < 5; i++){
        let round1 = playRound();
        if (round1 === 'Win') {
            playerScore++;
        } else if (round1 === 'Lose') {
            computerScore++;
        } else {
            //Tie. nothing happens!
        } console.log(`The score is ${playerScore} to ${computerScore}, continue!`);
    }
        if (playerScore > computerScore) {
            return("Player Wins!");
        } else if (playerScore < computerScore) {
            return("Computer Wins!");
        } else {
            return("Wow, 5 ties in a row?!");
        }
}
let GameWinner = game();
console.log(GameWinner);  */

/*function playerPick(){
    let player = prompt("Pick Rock, Paper, or Scissors!");
    let playerSelection = player.toLowerCase();
    return(playerSelection);
}*/