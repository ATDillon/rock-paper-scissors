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
        console.log("Better luck next time, you've lost. The score was " + playerScore + " to " + comScore)
    }
}
function computerPlay(){

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*3)];

}
function playerSelection(){

    let choice = window.prompt("Rock, paper, or scissors?").toLowerCase();
    
    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = window.prompt("Error, please only input rock, paper, or scissors.").toLowerCase();
    }

    return(choice);

}
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

/* function for rock/paper/scissors that takes an argument for
the total number of rounds to be played*/

    //create variables playerScore and comScore starting at 0.
    // for num in rounds argument

        /*run winstate function with com ouput function
         and player input function as arguments*/
        
    //if playerScore is equal to comScore

        //output that it's a tie

    //else if playerScore is greater than comScore

        //output that the player has won

    //else
    
        //output that the computer has won

//function for deciding the COMs output

    // create array containing 'rock' 'paper' and 'scissors'
    // randomly generate an integer 0-2 inclusively
    // return the string stored at that location in the array

/*function that gets players input and checks that it is rock
paper or scissors */

    //get text input and store in a variable
    //if lowercase text input is not equal to 'rock', 'paper', or 'scissors'

        //while input is not rock paper or scissors

            //output error message
            //repeat input

    //return lowercase players input


/*function that checks if its a winning combination,
 taking the com output function and player input function as arguments*/

    // if players input is equal to coms output

        //output that it was a tie
    
    // else if it is a winning combination

        //output that the player won and tell them the coms choice
        //add +1 to playerScore variable

    // else

        //output that the player lost and tell them the coms choice
        //add +1 to comScore variable