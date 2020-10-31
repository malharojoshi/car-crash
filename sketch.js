var car,wall,speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1000, 200, 60, height/2);
  wall.color=80,80,80;
  car.depth = wall.depth + 1;
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
  deformation = (0.5 * weight * speed * speed) / 22509;
}

function draw() {
  background(255,255,255);  
  if (car.x - wall.x < (car.width / 2 + (wall.width/2)) &&
    wall.x - car.x < (car.width / 2 + (wall.width/2)) &&
    car.y - wall.y < (car.height / 2 + (wall.height / 2)) &&
    wall.y - car.y < (car.height / 2 + (wall.height/2))) {
      car.velocityX=0;
      if (deformation < 100) {
        car.shapeColor = color(0,255,0);
      }
      if (deformation < 180 && deformation > 100) {
        car.shapeColor = color(230,230,0);
      }
      if (deformation > 180) {
        car.shapeColor = color(255,0,0);
      }
  }
  drawSprites();
  text('speed: ' + speed + ' weight: ' + weight + ' deformation: ' + deformation,500,20)
}