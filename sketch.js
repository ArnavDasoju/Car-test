var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "orange";
  movingrect = createSprite(500, 600, 80, 80);
  movingrect.shapeColor = "green";
}

function draw() {
  background("black");  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  // creating Algorithm for Collision Detection
if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
  fixedrect.x - movingrect.x < movingrect. width/2 + fixedrect.width/2 &&
  movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
  fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2
  )

{

  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";

}
else 
{
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";

}


  drawSprites();
}