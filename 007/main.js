window.onload = function(){
  var canvas = document.getElementById("canvas");
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  var context = canvas.getContext('2d');
  var angle = 0;
  var angley = 0;
  var speed = 0.1;
  var radius = height /3 ;
  var xPos = 0.0;
  var x = 0.0;
  var xspeed = 2.1;

  var restart = function(){
    console.log('mousedown');
    context.clearRect(0, 0, width, height);
  };

  var render = function(){
      context.restore();
      context.clearRect(0, 0, width, height);

      var y = Math.sin(angle) * radius;
      angle += speed;
      x += xspeed;

      if(x >= width ) {
        x = 0.0;
      }
      console.log('x', x);

      context.save();
      context.translate(0, height/2);
      context.beginPath();
      context.arc(x, y, 20, 0, Math.PI * 2);
      context.stroke();


      requestAnimationFrame(render, 1000/60);
    }

    render();
};
