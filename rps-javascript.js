//function for generating a random option for the computer player
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerOption = options[Math.floor(Math.random() * options.length)];
    return computerOption;
}


//function for playing the game
function play(selectedPlayerOption, generatedComputerOption) {
    let result;
    switch (selectedPlayerOption) {
        case "rock":
            switch (generatedComputerOption) {
                case "rock":
                    result = "It's a tie...";
                    break;
                case "paper":
                    result = "You LOSE :(";
                    computerScore++;
                    document.getElementById("computerScore").innerHTML = computerScore;
                    break;
                case "scissors":
                    result = "You WIN, yay!";
                    playerScore++;
                    document.getElementById("playerScore").innerHTML = playerScore;
                    
            };
            break;
        case "paper":
            switch (generatedComputerOption) {
                case "rock":
                    result = "You WIN :)";
                    playerScore++;
                    document.getElementById("playerScore").innerHTML = playerScore;
                    break;
                case "paper":
                    result = "It's a tie!";
                    break;
                case "scissors":
                    result = "You LOSE :(";
                    computerScore++;
                    document.getElementById("computerScore").innerHTML = computerScore;
            };
            break;
        case "scissors":
            switch (generatedComputerOption) {
                case "rock":
                    result = "You LOSE :(";
                    computerScore++;
                    document.getElementById("computerScore").innerHTML = computerScore;
                    break;
                case "paper":
                    result = "You WIN :)";
                    playerScore++;
                    document.getElementById("playerScore").innerHTML = playerScore;
                    break;
                case "scissors":
                    result = "It's a tie!";
            };
            break;
        }
    console.log("player score: "+playerScore);
    console.log("Computer score: "+computerScore);
    // stop game when one score reaches 5
    if (playerScore==5 || computerScore==5){
        setTimeout (() => {
            alert("Game over");
        }, 0.5);
    }
    return result;
}

let playerScore=0;
let computerScore=0;
const options = document.querySelectorAll('.container');
options.forEach((possibleOptions) => {
    possibleOptions.addEventListener('click', () => {
        let selectedOptionID = possibleOptions.id;
        console.log("Your option is " + selectedOptionID);
        let generatedComputerOption = getComputerChoice();
        console.log("Computer option is " + generatedComputerOption);
        let result = play(selectedOptionID, generatedComputerOption);
        setTimeout (() => { alert(result + " Let's see who can reach 5 points first! Click again on an option.");}, 0.3); 
    });
});