let humanScore = 0;
let computerScore = 0;
let humanChoiceLower;

let humanPick = document.querySelector('#humanPick');
let computerPick = document.querySelector('#computerChoice');
let humanResult = document.querySelector('#humanResult');
let humanScoreaParagraph = document.querySelector('#humanScoreaParagraph');
let computerScoreParagraph = document.querySelector('#computerScoreParagraph');









function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return 'paper';
    } else if (choice == 1){
        return 'scissor';
    } else if (choice == 2){
        return 'rock';
    }
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice()
    humanChoiceLower = humanChoice.toLowerCase()
    if (humanChoiceLower == computerChoice) {
        humanPick.textContent = `Player Choice: ${humanChoiceLower}`;
        computerPick.textContent = `Computer Choice: ${computerChoice}`;
        humanResult.textContent = 'Tie';
        humanScoreaParagraph.textContent = `Player Score: ${humanScore}`;
        computerScoreParagraph.textContent = `Computer Score: ${computerScore}`;
    } else if ((humanChoiceLower == 'scissor' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'rock' && computerChoice == 'scissor')){
        humanScore += 1;
        humanPick.textContent = `Player Choice: ${humanChoiceLower}`;
        computerPick.textContent = `Computer Choice: ${computerChoice}`;
        humanResult.textContent = 'You win';
        humanScoreaParagraph.textContent = `Player Score: ${humanScore}`;
        computerScoreParagraph.textContent = `Computer Score: ${computerScore}`;
    } else {
        computerScore += 1
        humanPick.textContent = `Player Choice: ${humanChoiceLower}`;
        computerPick.textContent = `Computer Choice: ${computerChoice}`;
        humanResult.textContent = 'You lost';
        humanScoreaParagraph.textContent = `Player Score: ${humanScore}`;
        computerScoreParagraph.textContent = `Computer Score: ${computerScore}`;

    }

    if (humanScore == 5){
        let winner = document.querySelector('#winner');
        winner.textContent = 'Player Won';
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5){
        let winner = document.querySelector('#winner');
        winner.textContent = 'Computer Won';
        humanScore = 0;
        computerScore = 0;

    }



}