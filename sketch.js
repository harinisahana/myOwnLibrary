var fixedRect,movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 100, 80, 30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green"; 
  fixedRect.debug = true;
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";

  movingRect.velocityX = -1;
}

function draw() {
  background(0,0,0);
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY; 
 
  if(isTouching(movingRect, gameObject4)){
    //true code
    gameObject4.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    //false code
    gameObject4.shapeColor = "green";
    movingRect.shapeColor = "green"; 
  }

  console.log(movingRect.x - fixedRect.x);
  console.log(fixedRect.width/2 + movingRect.width/2);
  bounceOff(movingRect,gameObject4);
  drawSprites();
}

