function loaded(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d'); 
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  var mouseX = 0;
  var mouseY = 0;

  document.addEventListener('mousemove', function(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  var getRotationPositionToCenter = function(x,y){
    var centerX = width/2;
    var centerY = height/2;
    var dx = x - centerX ;
    var dy = y - centerY;
    var angle = Math.atan2(dy, dx);
    return angle;
  }

  // Params to rotate in a circle;
  var drawShip = function(){
    context.beginPath();
    // Draw top part of ship
    context.moveTo(35,0);
    context.lineTo(-15, -20);
    context.stroke();
    // Draw bottom part of ship
    context.moveTo(35,0);
    context.lineTo(-15, 20);
    context.stroke();
    // Draw back of ship
    context.moveTo(-15,-20);
    context.lineTo(-15,20);
    context.stroke();
  }
  var render = function(){
    context.restore();
    context.save();
    context.clearRect(0, 0, width, height);
    context.translate(width/2, height/2);
    context.rotate(getRotationPositionToCenter(mouseX, mouseY));
    drawShip();


    setTimeout(function(){
      requestAnimationFrame(render);
    }, 1000/60);
  };
  render();
};

loaded();
