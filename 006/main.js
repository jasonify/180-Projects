window.onload = function(){
  var canvas = document.getElementById("canvas");
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  var context = canvas.getContext('2d');
  var angle = 0;
  var angley = 0;
  var speed = 0.1;
  var speedy = 0.01;
  var radius = 100;

  var restart = function(){
    console.log('mousedown');
    context.clearRect(0, 0, width, height);
  };
  document.addEventListener('mousedown', function(){
    restart();
  });

  var render = function(){
      context.restore();
      context.clearRect(0, 0, width, height);
      context.save();
      context.translate(width/2, height/2);
      var x = Math.cos(angle) * radius;
      var y = Math.sin(angley) * radius;
      angle += speed;
      angley += speedy;
      // console.log('x', x, 'y', y);

      context.beginPath();
      context.arc(x,y, 20, 0, Math.PI * 2);
      context.stroke();
      context.restore();
      requestAnimationFrame(render, 1000/60);
    }

    render();
};
