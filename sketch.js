
var fixedRect, movingRect;
//var gameObject1, gameObject2;
var gameObject3;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(200, 400, 60, 50);
  fixedRect.shapeColor = "green";
  
  gameObject3 = createSprite(370,250,60,50);
  gameObject3.shapeColor = "red";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";

  }
  else {
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}


