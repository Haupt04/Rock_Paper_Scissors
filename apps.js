

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

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) {
            return 'tie'
        } else if ((humanChoice == 'scissor' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'rock' && computerChoice == 'scissor')){
            humanScore += 1
            console.log(humanChoice + computerChoice)
            return 'You win'
        } else {
            computerScore += 1
            console.log(humanChoice + computerChoice)
            return 'You lose'
        }
    }


    for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let play = playRound(humanSelection, computerSelection);
    console.log(play)
    console.log(humanScore)
    console.log(computerScore)
    }
}

playGame()