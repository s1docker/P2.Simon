let highScore=[];
let gameSeq=[];
let userSeq=[];
let btns=["yellow", "red", "purple", "green"];

let started= false;
let level=0;
let h2=document.querySelector("h2");
let body=document.querySelector("body");
let h3=document.querySelector("h3");

document.addEventListener('keydown', function(){
    if(started==false){
        started=true;
        console.log("started set to true");
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    

}

function resetFlash(){
    body.classList.add("resetFlash");
    setTimeout(function(){
        body.classList.remove("resetFlash");
    },250);
}



function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*3);
    let  randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
   

}

function checkBtn(idx){
    // let idx=level-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerText=`Game Over! Your Score was ${level}! Press any Key to Start.`;
        reset();
        resetFlash();
    }
}


function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkBtn(userSeq.length-1);
    console.log(gameSeq);
}


let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    highestScore();
    level=0;

}

function highestScore(){
    highScore.push(level);
    h3.innerHTML=`High Score = ${level}`;


}