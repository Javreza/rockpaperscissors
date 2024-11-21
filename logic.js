const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceBttns = document.querySelectorAll(".choiceBttn");
let player;
let computer;
let result;

choiceBttns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() *3 +1 )
    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 1:
            computer = "SCISSORS";
             break;
    }
}