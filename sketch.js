var bullet,wall, speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(50,200,20,50);
  speed=random(233,321)
  weight=random(30,52)
  wall.shapeColor=color(80,80,80);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);
  bullet.velocityX=speed;
  bullet.collide(wall);
  

  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180&& deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      if(deformation<100)
    {
     bullet.shapeColor=color(0,255,0);
    }
    }

  }
  
  drawSprites();
}