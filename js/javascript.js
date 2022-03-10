
function playerPick(){
    let player = prompt("Pick Rock, Paper, or Scissors!");
    let playerSelection = player.toLowerCase();
    return(playerSelection);
}

function computerPick(){
    const randomly = ['rock', 'paper', 'scissors'];
    let pick = randomly[Math.floor(Math.random()*randomly.length)];
    return (pick);
}

function playRound() {
    let computerSelection = computerPick();
    let playerSelection = playerPick();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') 
    {
        if (playerSelection === computerSelection) {
            console.log(`Tie ${playerSelection} equals ${computerSelection}!`);
            return('Tie');
        } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
            return('Win');
        } else {
            console.log(`You Lose! ${playerSelection} loses to ${computerSelection}!`);
            return('Lose');
        }
        
    } else {
        alert("Please put in Rock, Paper, or Scissors! Reload the page.");
    }
}

function game() {
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
console.log(GameWinner); 