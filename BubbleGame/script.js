var timer=60;

var score=0;

var hitval=0;

function makeScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score
}

function makeBubble(){
    var bubble="";

    for(var i=1;i<=112;i++){
        bubble+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.querySelector("#pbtm").innerHTML=bubble
}

function runTimer(){
    var timeInt=setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#timeval").textContent=timer
        }else{
            clearInterval(timeInt)
            document.querySelector("#pbtm").innerHTML=`<h1 id="gameOver">Game Over</h1>`;
        }
    },1000);
}


function makeHit(){
    hitval=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitval
}


document.querySelector("#pbtm").addEventListener('click',(details)=>{
  var clickedval=Number(details.target.textContent);

  if (clickedval === hitval){
    makeScore();
    makeBubble();
    makeHit();
  }
})
makeBubble();

runTimer();

makeHit();





