let choices = ['Rock', 'Paper', 'Scissors']
let getComputerChoice = () => choices[Math.floor(Math.random() * 3)]

let youWin = (playerSelection, computerSelection) => 'You Win! ' + playerSelection + ' beats ' + computerSelection
let youLose = (playerSelection, computerSelection) => 'You Lose! ' + computerSelection + ' beats ' + playerSelection

const outcomes = {
  'rock': {
    'paper': 'lose',
    'scissors': 'win',
    'rock': 'tie',
  },
  'paper': {
    'rock': 'win',
    'scissors': 'lose',
    'paper': 'tie',
  },
  'scissors': {
    'rock': 'lose',
    'paper': 'win',
    'scissors': 'tie',
  }
}

let playerScore = 0
let computerScore = 0

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
  let outcome = outcomes[playerSelection][computerSelection]
  if (outcome === 'win') {
    playerScore++
    return youWin(playerSelection, computerSelection)
  } else if (outcome === 'lose') {
    computerScore++
    return youLose(playerSelection, computerSelection)
  } else {
    return 'Tie!'
  }
}

let game = () => {
  for(let i = 0; i < 5; i++) {
    let playerChoice = prompt('Choose Rock, Paper or Scissors')
    console.log(playRound(playerChoice, getComputerChoice()))
    console.log('Player Score:', playerScore)
    console.log('Computer Score:', computerScore)
  }
  
  if(playerScore > computerScore) {
    console.log('Congratulations! You win the game.')
  } else if(computerScore > playerScore) {
    console.log('Sorry, you lost the game.')
  } else {
    console.log('The game is a tie.')
  }
}

game()
