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
    var dx = centerX - x;
    var dy = centerY - y ;
    var angle = Math.atan2(dx, dy);
    return angle;
  }

  // Params to rotate in a circle;
  var drawShip = function(){
    context.beginPath();
    context.moveTo(15,0);
    // Draw top part of ship
    context.lineTo(-15, -20);
    context.stroke();
    context.moveTo(15,0);
    context.lineTo(-15, 20);
    context.stroke();
    context.moveTo(-15,-20);
    context.lineTo(-15,20);
    context.stroke();
  }
  var render = function(){
    context.restore();
    context.save();
    context.clearRect(0, 0, width, height);
    context.translate(width/2, height/2);
    // context.rotate(getRotationPositionToCenter(mouseX, mouseY));
    drawShip();


    setTimeout(function(){
      requestAnimationFrame(render);
    }, 1000/60);
  };
  render();
};

loaded();
