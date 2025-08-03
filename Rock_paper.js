let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector

const genCompChoice = () => {
    const options= ["stone" , "paper","scissor"];
    const randIndx = Math.floor(Math.random() *3);
    return options [randIndx];
}

    const drawgame = () =>{
    console.log("game was draw");
    msg.innerText = "Game was draw. Play again";
};

  const showWinner = (userWin,userchoice,compchoice) => {
    if(userWin){
        console.log("you win!");
        msg.innerText = `you win!  your ${userchoice}beats ${compchoice}`;
        msg.style.backgroundColor = "#42f578";
    }
    else{
        console.log("you lose!");
        msg.innerText = `you lost. ${compchoice}beats your ${userchoice}`;
         msg.style.backgroundColor = "red";
    }
  };

const playgame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    //generate Computer choice -> modular function 
    const compchoice = genCompChoice();
    console.log("comp choice = ",compchoice);


    if(userchoice === compchoice){
       //draw game
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "stone"){
            //scissors, paper

            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){

            //rock,scissors
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            //rock,paper

           userwin =  compchoice === "stone" ? false : true;
        }

            showWinner(userwin);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    // const choiceId=choice.getAttribute
    choice.addEventListener("click",() =>{
        const userchoice= choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});