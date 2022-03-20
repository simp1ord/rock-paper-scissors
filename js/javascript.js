let playerScore = 0;
let computerScore = 0;


function changeImageDisplay(playerSelection){
const imageReplace = document.getElementById('playerPlaceholder');
    if (playerSelection === 'rock'){
        imageReplace.src = "images/rock-paper-scissors-clipart-rock-paper-scissor-stencil-bowl-symbol-label-transparent-png-153543-removebg-preview.png";
    } else if (playerSelection === 'paper'){
        imageReplace.src = "images/rock-paper-scissors-clipart-rock-paper-scissors-clothing-apparel-axe-tool-transparent-png-212485-removebg-preview.png";
    } else if (playerSelection === 'scissors'){
        imageReplace.src = "images/536-5360227_scissors-hand-rock-paper-scissors-png-clipart-removebg-preview.png";
    }
}

function scoreDisplayUpdate(){
    playerScoreDisplay.innerHTML = parseInt(playerScore);
    computerScoreDisplay.innerHTML = parseInt(computerScore);
}

function computerPick(){
    const randomly = ['rock', 'paper', 'scissors'];
    let pick = randomly[Math.floor(Math.random()*randomly.length)]; //picks between the 3 in the array
    const imageReplaceComputer = document.getElementById('computerPlaceholder');
    if (pick === 'rock'){
        imageReplaceComputer.src = "images/rock-paper-scissors-clipart-rock-paper-scissor-stencil-bowl-symbol-label-transparent-png-153543-removebg-preview.png";
    } else if (pick === 'paper'){
        imageReplaceComputer.src = "images/rock-paper-scissors-clipart-rock-paper-scissors-clothing-apparel-axe-tool-transparent-png-212485-removebg-preview.png";
    } else if (pick === 'scissors'){
        imageReplaceComputer.src = "images/536-5360227_scissors-hand-rock-paper-scissors-png-clipart-removebg-preview.png";
    }
    return (pick);
}

function playRound(playerSelection) {
  //importing computerPick
  let computerSelection = computerPick();
        //decides who wins
        if (playerSelection === computerSelection) {
            results.textContent = `Tie ${playerSelection} equals ${computerSelection}!`;
        } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                    (playerSelection === 'paper' && computerSelection === 'rock') ||
                    (playerSelection === 'scissors' && computerSelection === 'paper')) {
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore += 1;
        } else {
            results.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}!`;
            computerScore += 1;
        }
    //sees if one accumulates 5 points before continuing    
    if (playerScore === 5){
        playerModal.style.display = "block";
    } else if (computerScore === 5){
        computerModal.style.display = "block";
    }else{
        //continue Game
    }

//playerScoreDisplay.innerHTML = parseInt(playerScore);
//computerScoreDisplay.innerHTML = parseInt(computerScore);
}

//The Dom Maniupulation code below 


//results in a text box
const results = document.querySelector('#results');
results.style.color = 'white';
results.style.border = '2px solid white';
results.style.background = "#333385";


//Ending Modal
const playerModal = document.getElementById('player');
const computerModal = document.getElementById('computer');
function refreshPage(){
    window.location.reload(); //button refreshes page
}


//buttons
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');


//plays a round based on what player clicks
rock.addEventListener("click", function () {
    rock.style.backgroundColor = "#191972";
    playRound('rock');
    scoreDisplayUpdate();
    changeImageDisplay('rock');
});
paper.addEventListener("click", function () {
    paper.style.backgroundColor = "#191972";
    playRound('paper');
    scoreDisplayUpdate();
    changeImageDisplay('paper');
});
scissors.addEventListener("click", function () {
    scissors.style.backgroundColor = "#191972";
    playRound('scissors');
    scoreDisplayUpdate();
    changeImageDisplay('scissors');
});

//turns buttons back normal color (give sensation of pressing)
rock.addEventListener("click", () => setTimeout(function () {
    rock.style.backgroundColor = "#333385";
},100));
paper.addEventListener("click", () => setTimeout(function () {
    paper.style.backgroundColor = "#333385";
},100));
scissors.addEventListener("click", () => setTimeout(function () {
    scissors.style.backgroundColor = "#333385";
},100));

//Score Display
const playerScoreDisplay = document.getElementById('playerScoreDisplayed');
const computerScoreDisplay = document.getElementById('computerScoreDisplayed');
playerScoreDisplay.innerHTML = 0;
computerScoreDisplay.innerHTML = 0;


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