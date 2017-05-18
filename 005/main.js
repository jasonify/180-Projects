window.onload = function(){
  var canvas = document.getElementById("canvas");
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  var context = canvas.getContext('2d');


  var angle = 0;
  var speed = 0.1;
  var radius = 100;




  var render = function(){
      context.save();
      context.translate(width/2, height/2);


      var x = Math.cos(angle) * radius;
      var y = Math.sin(angle) * radius;

      angle += speed;
      console.log('x', x, 'y', y);

      context.arc(x,y, 20, 0, Math.PI * 2);
      context.stroke();




      context.restore();

      requestAnimationFrame(render, 1000/60);
    }

    render();
};
