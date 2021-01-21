var a,b;

function setup() {
  createCanvas(800,400);
   a = createSprite(100, 100, 100, 50);
   b = createSprite(300, 300, 50, 100);

   a.shapeColor = "green";
   b.shapeColor = "green";

   a.velocityX = 5;
   b.velocityX = -5;
   a.velocityY = 5;
   b.velocityY = -5;

}

function draw() {
  //console.log(b.x - a.x);
  console.log(b.y- a.y);

  //b.x = World.mouseX;
  //b.y = World.mouseY;

  //if(b.x - a.x < a.width/2 + b.width/2 && a.x - b.x<a.width/2 + b.width/2 && b.y - a.y < a.height/2 + b.height/2 && b.y - a.y> -(a.height/2 + b.height/2)){

  if(b.x - a.x < a.width/2 + b.width/2 && a.x - b.x<a.width/2 + b.width/2 ){
   a.shapeColor = "red";
   b.shapeColor = "red";
   a.velocityX = a.velocityX * (-1);
   b.velocityX = b.velocityX * (-1)
  } 
  //else{
   //a.shapeColor = "green";
   //b.shapeColor = "green";
  //}
  if(b.y - a.y < a.height/2 + b.height/2 && b.y - a.y> -(a.height/2 + b.height/2)){
    a.shapeColor = "red";
    b.shapeColor = "red";
    a.velocityY = a.velocityY * (-1);
    b.velocityY = b.velocityY * (-1);
   } 

  
  edges = createEdgeSprites();
  a.bounceOff(edges);
  b.bounceOff(edges);

  background(255,255,255);  
  drawSprites();
}