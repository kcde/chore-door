// getting door ids
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
// Door paths
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

// creating random door function
let currentlyPlaying = true;
let numClosedDoors = 3;
let openDoor1 = '';
let openDoor2 = '';
let openDoor3 = '';

const isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  }

}
const isClicked = (door) => {
  if(door.src === closedDoorPath){
    return false
  }else{
    return true
  }
}


const gameOver = (status) =>{
  if(status==='win'){
    startButton.innerHTML = 'You win! Play again?'
  }else{
    startButton.innerHTML = 'Game over!'
  }
  currentlyPlaying = false;
}

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors ===0){
    gameOver('win');
  }else if(isBot(door)){
    gameOver();

  }

}
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor===0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
    
  }else if(choreDoor ===1){
    openDoor1 = beachDoorPath;
    openDoor2=botDoorPath;
    openDoor3 = spaceDoorPath;
    
  }else if(choreDoor === 2){
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
    
  }

}




// creating click function for door
doorImage1.onclick = () =>{
  if(currentlyPlaying && !isClicked(doorImage1)){
  doorImage1.src =openDoor1;
  playDoor(doorImage1);
  }
  
}

doorImage2.onclick = () =>{
  if(currentlyPlaying && !isClicked(doorImage2)){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
  
}

doorImage3.onclick = () =>{
  if(currentlyPlaying && !isClicked(doorImage3)){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
  
}
const startRound = () => {
  doorImage1.src = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

  doorImage2.src = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

  doorImage3.src = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

  numClosedDoors =3;
  startButton.innerHTML='Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startButton.onclick = () =>{
  if(!currentlyPlaying){
  startRound();
  }
}



startRound();





