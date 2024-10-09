

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return 'paper'
    } else if (choice == 1){
        return 'scissor'
    } else if (choice == 2){
        return 'rock'
    }
}

function getHumanChoice(){
    let userInput = prompt('What is your choice?');
    return userInput
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let humanChoiceLower;

    function playRound(humanChoice, computerChoice){
        humanChoiceLower = humanChoice.toLowerCase()
        if (humanChoiceLower == computerChoice) {
            return 'tie'
        } else if ((humanChoiceLower == 'scissor' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'rock' && computerChoice == 'scissor')){
            humanScore += 1
            console.log(humanChoiceLower + computerChoice)
            return 'You win'
        } else {
            computerScore += 1
            console.log(humanChoiceLower + computerChoice)
            return 'You lose'
        }
    }


    for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let play = playRound(humanSelection, computerSelection);
    console.log(play)
    console.log(`Player Scorce: ${humanScore}`)
    console.log(`Computer Scorce: ${computerScore}`)
    }
}

playGame()