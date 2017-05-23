function loaded(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d'); 
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;

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
    context.translate(width/2, height/2);
    drawShip();


    setTimeout(function(){
      requestAnimationFrame(render);
    }, 1000/60);
  };
  render();
};

loaded();
