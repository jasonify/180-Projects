var width;
var height;
var bees = [];
var points = 0;
var beesCount = 5;

// Example bee:
/*
var sampleBee = {
  x: 0,
  y: 0,
  xAngle: 0,
  yAngle: 0,
  width: 30,
  xSpeed: 0.1,
  ySpeed:  0.5,
  isQueen: false,
  radius: 100
};
*/

function preload(){
  for(var ii = 0; ii < beesCount; ii++){
    var bee = {
      x: 0,
      y: 0,
      xAngle: 0,
      yAngle: 0,
      width: 30,
      xSpeed: random(-10, 10) / 100 ,
      ySpeed:  random(-5, 5) / 100 ,
      isQueen: false,
      radius: 150 
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


function checkOverlappingBees(){

  var hits = 0;
  for(var ii = 0; ii < bees.length-1; ii++){
    var bee = bees[ii];
    for(var ll  = ii+1; ll < bees.length; ll++){
      var bee2 = bees[ll];
      var hit = collideCircleCircle(bee.x,bee.y,bee.width,bee2.x, bee2.y,bee2.width);
      //console.log(hit);
      var count = hit == true? 1:0;
      // print(count);
      hits +=  count; 
    }
  }
  print("hits " + hits);
  return hits;
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

var hitFailed = false;
function draw(){
  clear();
  if(hitFailed){
    fill(255,0,0); // set to black 
  } else {
    fill(0); // set to black 
  }
  text("Poinst: " + points, 10, 10);
  text("Press mouse when most bees are overlapping: "  , 10, 30);

  if (mouseIsPressed){
    fill(0);
    var hits = checkOverlappingBees();
    if(hits === 0) {
      points = 0;
      hitFailed = true;
    } else {
      hitFailed = false;
      points+=hits;
    }
  } else {
    fill(255);
  }

  translate(width/2, height/2);

  // Draw bees:
  drawBees();
  translate(-width/2, -height/2);
  // ellipse(mouseX, mouseY, 20, 20);
}
