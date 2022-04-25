var gameState,database
var form, player, playerCount;
var allPlayers,dino1,dino2;
var bike = [];


var begin,beginImg;

//START BUTTON//
var start,startImg;

function preload() {
    beginImg = loadImage("beginning.jpg");
    startImg = loadImage("start.png");
    music = loadSound("m1.mp3");
    track = loadImage("background.png");
    bike1_img = loadImage("bike_1.png");
    bike2_img = loadImage("bike_2.png");
   
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

    music.play();
    music.loop();

}

function draw(){
   background("white");

   if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  
  }
  if(gameState === 0){
   image(beginImg ,0,10, width, height)
  }   
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


