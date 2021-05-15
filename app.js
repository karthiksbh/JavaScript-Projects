let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");

const ScoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");

const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function wordConvert(choice)
{
    if(choice==="r") return "Rock";
    if(choice==="p") return "Paper";
    return "Scissors";
}


function getComputer()
{
    const choices=['r','p','s'];
    returnValue= (Math.floor(Math.random()*3));
    return choices[returnValue];
}

function win(userChoice,computerChoice)
{
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smalluserWord="user".fontsize(3).sub();
    const smallcompWord="comp".fontsize(3).sub();
    result_p.innerHTML= wordConvert(userChoice) + smalluserWord + " beats " + wordConvert(computerChoice) + smallcompWord + " . You WIN!!!";
    document.getElementById(userChoice).classList.add('greenglow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('greenglow')},300);
}

function lose(userChoice,computerChoice)
{
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    const smalluserWord="user".fontsize(3).sub();
    const smallcompWord="comp".fontsize(3).sub();
    result_p.innerHTML= wordConvert(userChoice) + smalluserWord + " loses to " + wordConvert(computerChoice) + smallcompWord + " . You LOSE!!!";
    document.getElementById(userChoice).classList.add('redglow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('redglow')},300);
}

function draw(userChoice,computerChoice)
{
    const smalluserWord="user".fontsize(3).sub();
    const smallcompWord="comp".fontsize(3).sub();
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML= wordConvert(userChoice) + smalluserWord + " equals " + wordConvert(computerChoice) + smallcompWord +  " . Its a DRAW!!!";
    document.getElementById(userChoice).classList.add('yellowglow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('yellowglow')},300);
}


function game(userChoice)
{
    const computerChoice=getComputer();
    switch(userChoice + computerChoice)
    {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice,computerChoice);
            break;
        
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice,computerChoice);
            break;

        case "pp":
        case "rr":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function main()
{
    rock_div.addEventListener('click',function(){
        game("r");
    })  
    
    paper_div.addEventListener('click',function(){
        game("p");
    })
    
    scissors_div.addEventListener('click',function(){
        game("s");
    })
}

main();