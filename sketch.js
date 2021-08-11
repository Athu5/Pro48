var database;
var form,player,game;
var gameState =0;
var playerCount;
var allPlayers;
var distance = 0;
var passedFinish;
var bg, bgImg;

var b1Img,b2Img;

var bike1,bike2,bikes;

var BikesAtEnd = 0;

var firstImg, secondImg;

function preload(){
b1Img = loadImage("b4.png");
b2Img = loadImage("b5.png");
bgImg = loadImage("track.jpg");
firstImg = loadImage("gold.png");
secondImg = loadImage("silver.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    }

function draw(){
    background("lightgreen");

   if(playerCount === 2 && BikesAtEnd === 0){
       game.update(1);
   }
   if(gameState === 1){
       clear();
       game.play();
   }

   if(BikesAtEnd === 2){
    gameState = 2;
    }

   if(gameState === 2 && BikesAtEnd === 2){
       game.end();
   }
}
