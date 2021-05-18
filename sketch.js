
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var background,backgrondImg;
var pillar,pillarImg;
var bird,birdImg;

function preload()
{
birdImg=loadAnimation("bird.gif");	
backgroundImg=loadAnimation("2Ct5.gif");
pillarImg=loadImage("pillar.png");
}

function setup() {
	createCanvas(1000, 500);
backgr=createSprite(490,250,800,700);
backgr.addAnimation("moving",backgroundImg);
bird=createSprite(60,200,50,50);
bird.addAnimation("flying",birdImg);
bird.scale=0.4;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

backgr.scale=2;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (keyCode===UP_ARROW) {
	  bird.velocityY=-3;
  }
  if (keyCode===DOWN_ARROW) {
	bird.velocityY=3;
}

spawnObstacles();
  drawSprites();
 
}

function spawnObstacles(){
	if (frameCount%80===0) {
		var rand=Math.round(random(1,2))
		obstacle=createSprite(600,rand,30,100);
obstacle.addImage(pillarImg);
obstacle.velocityX=-3;
if (rand===1) {
	obstacle.y=50;
}
else{
	obstacle.y=400;
}
obstacle.lifetime=400;
obstacle.scale=0.6;
	}
}

