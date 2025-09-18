let userScore=0;
let compScore=0;

let userScoreP=document.querySelector("#user-score");
let compScoreP=document.querySelector("#comp-score");

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")
const gencompChoice =() =>{
    const options=["rock","paper","scissor"];
    let compIdx=Math.floor(Math.random()*3);
    return options[compIdx];
}

const drawGame = () => {
    msg.innerText="The Game was Draw, Play Again!";
    msg.style.backgroundColor="#5d2f77";
}

const showWinner = (userWin,userChoice,compChoice) =>{
   if(userWin){
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userScore++;
    userScoreP.innerText=userScore;
   }else{
    msg.innerText=`You lose. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor="red";
    compScore++;
    compScoreP.innerText=compScore;
   }
}

const playGame=(userChoice)=>{
   const compChoice=gencompChoice();
   if(userChoice===compChoice){
    drawGame();
   }else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin= compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="rock"?true:false;
    }else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
}


choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
     let userChoice=choice.getAttribute("id");
     playGame(userChoice);
    });
});

