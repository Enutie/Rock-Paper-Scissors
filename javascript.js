let choices = ["Rock", "Paper", "Scissors"]
let getComputerChoise = () => choices[Math.floor(Math.random() * 3)]

let youWin = (playerSelection, computerSelection) => "You Win! " + playerSelection + " beats " + computerSelection
let youLose = (playerSelection, computerSelection) => "You Lose! " + computerSelection + " beats " + playerSelection

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
  
  let playRound = (playerSelection, computerSelection) => {
    let outcome = outcomes[playerSelection.toLowerCase()][computerSelection.toLowerCase()]
    if (outcome === 'win') {
      return youWin(playerSelection, computerSelection)
    } else if (outcome === 'lose') {
      return youLose(playerSelection, computerSelection)
    } else {
      return 'Tie!'
    }
  }
  
const playerSelection = 'Rock'

let game = () => {
    for(let i = 0; i < 5; i++)
    {
        let playerChoice = prompt("Choose Rock, Paper or Scissors")
        console.log(playRound(playerChoice, getComputerChoise()))
    }
}

game()


