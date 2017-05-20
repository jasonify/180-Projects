var width;
var height;
var bees = [];
var points = 0;
var beesCount = 5;

// Example bee:
var sampleBee = {
  x: 0,
  y: 0,
  xAngle: 0,
  yAngle: 0,
  width: 10,
  xSpeed: 0.1,
  ySpeed:  0.5,
  isQueen: false,
  radius: 100
};

function preload(){
  for(var ii = 0; ii < beesCount; ii++){
    var bee = {
      x: 0,
      y: 0,
      xAngle: 0,
      yAngle: 0,
      width: 10,
      xSpeed: random(-10, 10) / 100 ,
      ySpeed:  random(-5, 5) / 100 ,
      isQueen: false,
      radius: random(80, 100)
    };
    bees.push(bee);
  }
  bees[bees.length -1 ].isQueen = true;
  print(bees);
}

function setup(){
  width = window.innerWidth;
  height = window.innerHeight;
  createCanvas(width, height);
}


function drawBee(bee){
  ellipse(bee.x, bee.y, bee.width, bee.width);
}
function drawBees(){

  for(var ii = 0; ii < bees.length; ii++){
    // Update bees:
    var bee = bees[ii];
    bee.xAngle += bee.xSpeed
    bee.yAngle += bee.ySpeed;
    bee.x = Math.cos(bee.xAngle) * bee.radius;
    bee.y = Math.sin(bee.yAngle) * bee.radius;
    drawBee(bee);
  }
}

function draw(){
  clear();
  fill(0); // set to black 
  text("Poinst: " + points, 10, 10);

  if (mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }
  // var hit = collideCircleCircle(mouseX,mouseY,150,width/2 + 200, height/2 + 200,100)

  // console.log('hit?', hit);
  translate(width/2, height/2);

  // Draw bees:
  drawBees();
  translate(-width/2, -height/2);
  ellipse(mouseX, mouseY, 20, 20);
}
