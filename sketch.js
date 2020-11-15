var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,700,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
movingRect.velocityY=-5;
fixedRect.velocityY=5;
 
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  bounceOff(movingRect,fixedRect);


  drawSprites();
}
function bounceOff(object1,object2){
  //if (object1.x - object2.x < object2.width/2 + object1.width/2
    //&& object2.x - object1.x < object2.width/2 + object1.width/2){
      //object1.velocityX=object1.velocitX*(-1);
      //object2.velocityX=object2.velocitX*(-1);
    //}
    if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.velocityY=object1.velocitY*(-1);
      object2.velocityY=object2.velocitY*(1);

}


}