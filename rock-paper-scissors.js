game(5);

/* Function for the rock/paper/scissors game to be played in the console
 that takes an argument for the total number of rounds to be played
 and gives a winner at the end of all rounds*/

function game(rounds){

    let playerScore = 0,
    comScore = 0,
    winState = "";

    for (let i = 1; i <= rounds; i++){

        console.log("Round "+ i)
        winState = playRound(playerSelection(), computerPlay());

        if (winState === "Player wins"){

            ++playerScore;

        }
        else if (winState ==="COM wins"){

            ++comScore;

        }
    }

    if (playerScore === comScore){

        console.log("It's a tie this time! The score was " + playerScore + " to " + comScore)

    }
    else if (playerScore > comScore){

        console.log("You've won! The score was " + playerScore + " to " + comScore);

    }
    else{

        console.log("Better luck next time, you've lost. The score was " + playerScore + " to " + comScore);

    }
}

/*Function for deciding the COMs selection. Picks an integer 0-2 and
 returns the string located at that location in the array. */

function computerPlay(){

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*3)];

}

/*Function for getting the players choice of rock, paper, or scissors. 
 Any input outside of those three words will repeat the prompt.*/

function playerSelection(){

    let choice = window.prompt("Rock, paper, or scissors?").toLowerCase();
    
    while(choice != "rock" && choice != "paper" && choice != "scissors"){

        choice = window.prompt("Error: Please only input rock, paper, or scissors.").toLowerCase();

    }

    return(choice);

}

/*Function for playing each individual round. Compares selections and
 returns the result of each round. */

function playRound(playerChoice, comChoice){

    if (playerChoice === comChoice){

        console.log("Computer chose " + comChoice + "! It's a tie this round!")
        return("Tie")

    }
    else if ((playerChoice==="paper" && comChoice==="rock") || (playerChoice==="rock" && comChoice==="scissors") || (playerChoice==="scissors" && comChoice==="rock")){

        console.log("Computer chose " + comChoice + "! You win this round!")
        return("Player wins");

    }
    else{

        console.log("Computer chose " + comChoice + "! You lose this round!")
        return("COM wins");
    }
    
}
