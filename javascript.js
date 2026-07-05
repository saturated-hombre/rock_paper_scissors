function getComputerChoice(){
    let choice=Math.floor(Math.random() * 3);
    if(choice===0){
        return 'rock';
    }
    else if(choice===1){
        return 'paper';
    }
    else{
        return 'scissor';
    }
}

function getHumanChoice(){
    return choice=prompt("Enter choice").toLowerCase();
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    //if humanChoice is equal to computerChoice then tie
    if (humanChoice===computerChoice){
        console.log('Tie!');
    }
    //if choice is rock vs scissor, rock wins, increments winner
    else if((humanChoice=='rock' && computerChoice==='scissor')|| (humanChoice=='scissor' && computerChoice=='rock' )){
        if(humanChoice=='rock'){
            console.log('You win,Rock beats scissor');
            humanScore++;
        }
        else{
            console.log('You lose,Rock beats scissor');
            computerScore++;
        }
    }
    //if choice is rock vs paper, paper wins, increments winner
    else if((humanChoice=='rock' && computerChoice==='paper')|| (humanChoice=='paper' && computerChoice=='rock' )){
        if(humanChoice=='paper'){
            console.log('You win, Paper beats rock');
            humanScore++;
        }
        else{
            console.log('You lose, Paper beats rock');
            computerScore++;
        }
    }
    //if choice is scissor vs paper, scissor wins
    else if((humanChoice=='scissor' && computerChoice==='paper')|| (humanChoice=='paper' && computerChoice=='scissor' )){
        if(humanChoice=='scissor'){
            console.log('You win, scissor cuts paper ');
            humanScore++;
        }
        else{
            console.log('You lose, scissor cuts paper');
            computerScore++;
        }
    }
}

function playGame(){
    for(i=0;i<5;i++){
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    if(humanScore>computerScore){
        console.log('You win');
    }
    else if(humanScore==computerScore){
        console.log('Tie');
    }
    else{
        console.log('You lose');
    }
}

playGame();