var width;
var height;
var bees = [];
var sampleBee = {
  x: 0,
  y: 0,
  speed: 0.1,
  radius: 100
};

function preload(){
  
}

function setup(){
  width = window.innerWidth;
  height = window.innerHeight;
  console.log(width);
  console.log(height);
  createCanvas(width, height);
}

function draw(){
  // ellipse(50,50, 80, 80);
  clear();

  fill(0);
  ellipse(200, 200, 100);

  if (mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }

  ellipse(mouseX, mouseY, 80, 80);

  hit = collideCircleCircle(mouseX,mouseY,150,200,200,100)
	print("colliding? " + hit);

}
