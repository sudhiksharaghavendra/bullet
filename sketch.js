var wall,thickness
var bullet,speed,weight
function setup() {
  createCanvas(1600,800);
   bullet= createSprite(20, 400, 50, 50);
   wall =createSprite(1570,400,50,300);
bullet.shapeColor="blue"
   speed=random(40,70);
   weight=random(100,300);
bullet.velocityX=speed;
}
 function draw() {
    background(255,255,255); 
  
    wall.velocityX=0;
     
    if(bullet.hasCollided(wall)){
      wall.velocityX=0;
      bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness)}
     console.log(damage);
    if (damage>10) {     
      bullet.shapeColor=("red");
    }
    if (damage<10) {
      bullet.shapeColor=("green")
      bullet.velocityX=0
      wall.velocityX=0;
      
    }
    
    
    
    drawSprites();}
 function hasCollided(bullet,wall) {
   bulletRightEdge=bullet.x+bullet.width
   wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge)
{
return true

 }
 return false  
}