
let computerCounter = 0;
let playerCounter = 0;
const playerSelects = document.querySelectorAll(".playerSelects");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");


// event listener


playerSelects.forEach((e)=>{
     e.addEventListener("click",()=>{
         selected(e);  // hovering effect
         playerPlay(e); //
     });
 })



 // computer play
function computerplay() {
    let arr = ["rock","paper","scissor"];
    let temp = Math.floor(Math.random()*arr.length);
    return arr[temp];
}    

// change color of selected
function selected(e) {
    playerSelects.forEach((element)=>{
        element.style.backgroundColor = "white";
    })
    e.style.backgroundColor = "#4158D0";
}

function playerPlay(e) {
    const computerTurn = computerplay();
    const playerTurn = e.id;
    playRound(computerTurn,playerTurn);  // comparing results;
    showResult();
    if(playerCounter === 5 || computerCounter === 5) {
        if(playerCounter === 5){
            sessionStorage.setItem("winner","player");
        }
        else {
            sessionStorage.setItem("winner","computer");
        }

        endGame();
    }
}    

// display result
function showResult() {
    playerScore.textContent = playerCounter;
    computerScore.textContent = computerCounter;
}  

// end game - go to end game page
function endGame() {
    console.log("it's an end");
    window.location = "../homepages/endgame.html";
}

// compares inputs
function  playRound(computerSelection,playerSelection){
           
        let rock = "rock";
        let paper = "paper";
        let scissor = "scissor";
        const computerSelects = document.querySelectorAll(".computerSelects");
        computerSelects.forEach((event)=>{
            event.style.backgroundColor = "white";
        })

    if(computerSelection === rock){
        document.querySelector(".rock1").style.backgroundColor = "#4158D0";
        if(playerSelection === paper)  {  return playerCounter++;} 
         else if(playerSelection === scissor) {  return computerCounter++;}
     }

     if(computerSelection === paper){
        document.querySelector(".paper1").style.backgroundColor = "#4158D0";
        if(playerSelection === rock) {  return computerCounter++;}
        else if(playerSelection === scissor) {  return playerCounter++;}
    }

    if(computerSelection === scissor){
        document.querySelector(".scissor1").style.backgroundColor = "#4158D0";
        if(playerSelection === rock)  {  return playerCounter++;}
        else if(playerSelection === paper) {  return computerCounter++;}
    }
}
