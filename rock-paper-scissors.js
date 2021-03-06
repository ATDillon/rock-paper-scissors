let playerScore = 0,
comScore = 0;


playerSelection();

/* Function for the rock/paper/scissors game to be played in the console
 that tallies the current scores and outputs a winner once either the player or COM has reached 5 points*/

function game(winState){

    const resultOutput = document.getElementById("final"),
    runningScore = document.getElementById("running-score");

    if (winState === "Player wins"){

        ++playerScore;
        runningScore.textContent = `${playerScore} - ${comScore}`;

    }
    else if (winState ==="COM wins"){

        ++comScore;
        runningScore.textContent = `${playerScore} - ${comScore}`;

    }

    if(playerScore >= 5 || comScore >= 5){


        if (playerScore > comScore){

            resultOutput.textContent = "You've won!";
            
        }
        else{

            resultOutput.textContent = "Better luck next time, you've lost.";

        }

        disableAndReset();

    }
}

/*Function for deciding the COMs selection. Picks an integer 0-2 and
 returns the string located at that location in the array. */

function computerPlay(){

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*3)];

}

/*Function for getting the players choice of rock, paper, or scissors.*/

function playerSelection(){

    let selection = "";
    const rpsButtons = document.querySelectorAll('button');

    rpsButtons.forEach((button) => {

        button.addEventListener('click', () => {

            selection = button.id;
            game(playRound(selection, computerPlay()));

        });

    });

}

/*Function for playing each individual round. Compares selections and
 returns the result of each round. */

function playRound(playerChoice, comChoice){
    
    const roundResult = document.getElementById("round-result");

    if (playerChoice === comChoice){

        roundResult.textContent = `Both you and COM chose ${playerChoice}, it's a tie`;
        return("Tie");

    }
    else if ((playerChoice==="paper" && comChoice==="rock") || (playerChoice==="rock" && comChoice==="scissors") || (playerChoice==="scissors" && comChoice==="paper")){

        roundResult.textContent = `COM chose ${comChoice}, ${playerChoice} beats ${comChoice}`
        return("Player wins");

    }
    else{

        roundResult.textContent = `COM chose ${comChoice}, ${comChoice} beats ${playerChoice}`
        return("COM wins");
    }
    
}

/* Disables the rock paper scissors buttons until the game has been reset. */

function disableAndReset(){

    const rpsButtons = document.querySelectorAll('button'),
    resetButton = document.createElement('button');

    resetButton.textContent = "Replay?";
    resetButton.className = "reset";
    document.getElementById('results').appendChild(resetButton);

    rpsButtons.forEach((button) => {
        button.disabled = true;
    });

    resetButton.addEventListener('click', () =>{

        playerScore = 0;
        comScore = 0;
        document.getElementById('round-result').textContent = "Best of five will win, choose any option to start!";
        document.getElementById('running-score').textContent = "0 - 0";
        document.getElementById('final').textContent = "";

        rpsButtons.forEach((button) => {
            button.disabled = false;
        })

        document.getElementById('results').removeChild(resetButton);

    });


}
