function getComputerChoice(){
    let choice=Math.floor(Math.random() * 3);
    if(choice()===0){
        return 'rock';
    }
    else if(choice()===1){
        return 'paper';
    }
    else{
        return 'scissor';
    }
}

function getHumanChoice(){
    let choice=prompt("Enter choice").toLowerCase();
    console.log(choice);
}

let humanScore=0;
let computerScore=0;

