function computerPlay() {   // computer selection

    var choice = ["rock", "paper", "scissors"];
    
    // randomize computer CHOICE
    return choice[Math.floor(Math.random() * choice.length)];
}



function playRound(playerSelection, computerSelection) {    // the workhorse of the game

    var msg;    // message to be built to display winner/loser/draw and player/computer selections
    var rating; // player rating: 0 = loser, 1 = winner, 2 = draw

    // determine if draw
    if (playerSelection === computerSelection) {

        rating = 2;
    }
    else {

        switch(playerSelection) {   // use player decision to guage RATING vs computer

            case "rock":

                if (computerSelection == "paper") {

                    rating = 0;
                }
                else {
                    rating = 1;
                }    
                break;

            case "paper":
                
                if (computerSelection == "scissors") {

                    rating = 0;
                }
                else {
                    rating = 1;
                }
                break;

            case "scissors":
                
                if (computerSelection == "rock") {

                    rating = 0;
                }
                else {
                    rating = 1;
                }

        }
    }

    switch(rating) {    // determine message to be displayed and which scores to update

        case 0:
            msg = "Loser! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase();
            
            // increase computer score (on scoreboard AND in the SCORE OBJECT's COMPUTER property value)
            scoreboard.children.cScore.textContent = ++score.computer;
            break;

        case 1:
            msg = "Winner! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase();
            
            // increase player score (on scoreboard AND in the SCORE OBJECT's PLAYER property value)
            scoreboard.children.pScore.textContent = ++score.player;
            break;
        
        case 2:
            msg = "Draw. " + playerSelection.toUpperCase() + " and " + computerSelection.toUpperCase();
    }

    // update message stating round results
    scoreboard.children.results.textContent = msg;

    // create ARRAY of SCORE OBJECT - use FIND to see whether PLAYER or COMPUTER is at 5 for end of game
    if (Object.values(score).find(win => win == 5)) {

        // remove each gameplay button
        btns.forEach( btn => {

            document.body.children.container.removeChild(btn);
        });
        
        // grey the container and 50% opacity on player choice text
        document.body.children.container.style.backgroundColor = "grey";
        document.body.children.container.children.choice.classList.add('opacity');

        // figure rightful champion
        if (score.player > score.computer) {

            winner.textContent = "YOU are the CHAMPION!";
        }
        else {
            winner.textContent = "COMPUTER is the CHAMPION!"
        }

        // update DOM with final champion and option to play again
        document.body.children.container.appendChild(winner);
        document.body.children.container.appendChild(refresh);
    }
}



function game() {   // ready to play

    // wait for click on each gameplay button. player choice is represented by button's id
    btns.forEach(btn => btn.addEventListener('click', () => playRound( btn.id, computerPlay() )));
} 



// store gameplay buttons and scoreboard
const btns = document.querySelectorAll('button');
const scoreboard = document.getElementById('scoreboard');

// create element and apply styling for displaying champion at end of game
const winner = document.createElement('h1');
winner.classList.add('winner');

// create element and apply styling for displaying play again at end of game
const refresh = document.createElement('h3');
refresh.classList.add('refresh', 'opacity');
refresh.textContent = "refresh browser to play again";

// score tracker object
let score = {player: 0, computer: 0};

game();