/* -----------storing variable so that we can use it as globally----------- */

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/* -----------storing variable so that we can use it as globally----------- */


/*--------to get random computer choices--------*/ 
function getComputerChoice() {
    const choice = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}
/*--------to get random computer choices--------*/ 


/*--- to convert the 'r' ,'p', 's' to Rock, Paper, Scissor---*/
function convertToWord(letter) {
if (letter === "r") return "Rock";
if (letter === "p") return "Paper";
return "Scissors";
}
/*--- to convert the 'r' ,'p', 's' to Rock, Paper, Scissor---*/

/*---to create the function for Win, Lose & and draw--- */
function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallCompWord}   You Win!! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 900);
}


function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to  ${convertToWord(computerChoice)}${smallCompWord}   You lost... 💩`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 900);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals  ${convertToWord(computerChoice)}${smallCompWord}   Its a draw 😎`;
    userChoice_div.classList.add('orange-glow');
    setTimeout(() => userChoice_div.classList.remove('orange-glow'), 900);
}
/*---to create the function for Win, Lose & and draw--- */

/*-------------to get users choices-------------*/
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
            
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
/*-------------to get users choices-------------*/


/*game function is related to main function in order to get choices which is rock, paper, scissor which is 
redirecting from main function to game function and helps to get the choices regarding rock, paper, scissor.*/

function main() {
    rock_div.addEventListener('click', () =>  game("r"));

    paper_div.addEventListener('click', () => game("p"));
       
    scissors_div.addEventListener('click', () => game("s"));      
}
main();