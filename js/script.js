function computerPlay() {

    // returns random integer from 0-9
    var randomNum=  Math.floor(Math.random() * 10);

    if (randomNum >= 0 && randomNum <= 3) {
        return "rock";
    }
    else if (randomNum >=4 && randomNum <= 6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}



function playerPlay() {

    var selectRPS = null;
    var pick = true;

    while (pick) {

        selectRPS = prompt("Please choose: Rock, Paper, Scissors?", "");

        if (selectRPS !== null)
        {
            selectRPS = selectRPS.toLowerCase();

            switch(selectRPS) {
                
                case "rock":
                    pick = false;
                    break;

                case "paper":
                    pick = false;
                    break;

                case "scissors":
                    pick = false;
            }
        }
    }

    return selectRPS;
}



function playRound(playerSelection, computerSelection) {

    var player = playerSelection.toLowerCase();
    var computer = computerSelection.toLowerCase();
    var msg;
    var n;

    if (player === computer) {
        n = 2;
    }
    else {

        switch(player) {

            case "rock":

                if (computer === "paper") {
                    n = 0;
                } else {
                    n = 1;
                }    
                break;

            case "paper":
                
                if (computer === "scissors") {
                    n = 0;
                } else {
                    n = 1;
                }
                break;

            case "scissors":
                
                if (computer === "rock") {
                    n = 0;
                } else {
                    n = 1;
                }
                break;
        }
    }

    switch(n) {

        case 0:
            msg = "You lose! " + computer.toUpperCase() + " beats " + player.toUpperCase();
            break;

        case 1:
            msg = "You win! " + player.toUpperCase() + " beats " + computer.toUpperCase();
            break;
        
        case 2:
            msg = "It was a tie! " + player.toUpperCase() + " and " + computer.toUpperCase();
    }

    console.log(msg);

    return n;
}



function game() {

    var player = 0;
    var computer = 0;
    var i;
    
    for (i = 0; i < 5; i++) {

        var playerSelection = playerPlay();
        var computerSelection = computerPlay();

        var round = playRound(playerSelection, computerSelection);

        switch(round) {

            case 0:
                computer++;
                break;

            case 1:
                player++;
                break;

            case 2:
                computer++;
                player++;
        }

        console.log("Player: " + player + " Computer: " + computer);
    }
    
    if (player > computer) {
        console.log("You are the CHAMPION!");
    }
    else if (player < computer) {
        console.log("Computer is the CHAMPION!");
    }
    else {
        console.log("TIE GAME! Play another five rounds.");
    }
}



game();