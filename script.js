import Ball from "./Ball.js"
import Paddle from "./Paddle.js"
 const ball=new Ball(document.getElementById("ball"));

const playerPaddle=new Paddle(document.getElementById("paddleBottom"));
const computerPaddle=new Paddle(document.getElementById("paddleTop"));
var playerScore=0;
var computerScore=0;
 let lastTime;
 function update(time){
 if(lastTime!= null){
    const delta=time - lastTime;
    ball.update(delta , [playerPaddle.rect() ,computerPaddle.rect()]);
    computerPaddle.update(delta, ball.y);

    if(isLose()){
       handleLose();
    }
  }
   
    lastTime= time;
     window.requestAnimationFrame(update)
 }
 
 function isLose(){
    const rect=ball.rect();
    return rect.right >=window.innerWidth || rect.left<=0;
   
 }
 function handleLose(){
    const rect=ball.rect();
    if(rect.top <= 0)
    {
        playerScore++;
    }
    else
    {
        computerScore++;
    }
  //  window.alert(`Player's score : ${playerScore}`);
    ball.reset();
    computerPaddle.reset();
    playerPaddle.reset();
 }
 document.addEventListener("mousemove",e=>{
    playerPaddle.position= (e.y / window.innerHeight) *100;
 })

 window.requestAnimationFrame(update)