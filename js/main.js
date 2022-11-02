let rockBtn = document.getElementById("r");
let paperBtn = document.getElementById("p");
let scissorBtn = document.getElementById("s");

rockBtn.addEventListener("click", choiceFunc1);
paperBtn.addEventListener("click", choiceFunc2);
scissorBtn.addEventListener("click", choiceFunc3);


let uRock = "User: rock";
let uPaper = "User: paper";
let uScissor = "User: scissors";
let cRock = "Computer: rock";
let cPaper = "Computer: paper";
let cScissor = "Computer: scissors";
let uScore = 0;
let cScore = 0;



function choiceFunc1(){
    document.getElementById("result-user-stat").innerHTML = "User: rock";
    compChoice();
}
function choiceFunc2(){
    document.getElementById("result-user-stat").innerHTML = "User: paper";
    compChoice();
}
function choiceFunc3(){
    document.getElementById("result-user-stat").innerHTML = "User: scissors";
    compChoice();
}

function compChoice(){
    const choices = ["rock", "paper", "scissors"];
    let val = choices[Math.floor(Math.random()*choices.length)];
    document.getElementById("result-comp-stat").innerHTML = "Computer: " + val;
    scoreUpdate();
}



function scoreUpdate(){
    
    let userVal = document.getElementById("result-user-stat").innerHTML;
    let compVal = document.getElementById("result-comp-stat").innerHTML;
    
    
    if((userVal == uRock && compVal == cRock) || (userVal == uPaper && compVal == cPaper) || (userVal == uScissor && compVal == cScissor)){
        document.getElementById("result-final-stat").innerHTML = "Draw";
    }else if((userVal == uRock && compVal == cScissor) || (userVal == uPaper && compVal == cRock) || (userVal == uScissor && compVal == cPaper)){
        document.getElementById("result-final-stat").innerHTML = "Winner: User";
        uScore=uScore+1;
    }else if((userVal == uRock && compVal == cPaper) || (userVal == uPaper && compVal == cScissor) || (userVal == uScissor && compVal == cRock)){   
        document.getElementById("result-final-stat").innerHTML = "Winner: Computer";
        cScore= cScore+1;
    }

    document.getElementById("userScoreVal").innerHTML = uScore;
    document.getElementById("compScoreVal").innerHTML = cScore;
    
}