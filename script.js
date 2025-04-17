'use strict';
//* Create Number randomly
let Secret =Math.trunc(Math.random()*20)+1;
 //* Create Score 
 let score = 20 ; 
// * Create highscore 
 let highscore = 0;
 //* Create event and function of button check 
document.querySelector('.check').addEventListener
('click',function() {
  const guess = Number(document.querySelector(".guess").value); 
 //* if input IsEmpty()
  if(!guess){
    document.querySelector('.message').textContent='NO Number enterd ❌';
    document.body.style.backgroundColor = 'black';
  }
  //* if guess IsCorrect()
  else if (guess===Secret){
    document.querySelector('.message').textContent='Correct Answer😎✅';
    document.querySelector('.number').textContent=Secret;
    document.body.style.backgroundColor = '#12403a';
    document.querySelector('.number').style.width='30rem';
    if(score > highscore){
        highscore = score ; 
        document.querySelector('.highscore').textContent = highscore ; 
    }
  }
  //* if guess ISWrong()
  else if (guess !==Secret){
    if(score>1){
        document.querySelector('.message').textContent=guess>Secret?'num too high!':'num too low!' ;
        score--;
        document.querySelector('.score').textContent=score;
    }else {
        document.querySelector('.message').textContent='You lost the Game';
        document.querySelector('.score').textContent=0;
    }
  }
})
//* Create event and function of Try again
document.querySelector('.again').addEventListener
('click',function(){
    score = 20 ; 
    Secret =Math.trunc(Math.random()*20)+1 ; 
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='🤔';
    document.querySelector('.guess').value='';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
