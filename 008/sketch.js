var width;
var height;
var bees = [];
var points = 0;
var beesCount = 4;

// Example bee:
var sampleBee = {
  x: 0,
  y: 0,
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
      width: 10,
      xSpeed: random(-10, 10) / 10 ,
      ySpeed:  random(-5, 5) * 3 ,
      isQueen: false,
      radius: 100
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

function draw(){
  clear();
  fill(0); // set to black 
  text("Poinst: " + points, 10, 10);
  ellipse(200, 200, 100);

  if (mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  var hit = collideCircleCircle(mouseX,mouseY,150,200,200,100)
}
