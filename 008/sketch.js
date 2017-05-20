var width;
var height;

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
  if (mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }

  ellipse(mouseX, mouseY, 80, 80);
}
