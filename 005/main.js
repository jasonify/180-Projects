window.onload = function(){
  var canvas = document.getElementById("canvas");
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  var context = canvas.getContext('2d');


    var particlesVelocity = [];
    var particles = [];

  var restart = function(){
    particlesVelocity = [];
    particles = [];
    for(var ii = 0; ii < 20; ii++){
      particles.push( vector.create(0, 0));
      var v1 =  vector.create(Math.random() - 0.5, Math.random()  - 0.5);
      particlesVelocity.push(v1);
    }

      context.clearRect(0,0, width, height);

  }

  document.addEventListener('mousedown', function(){
    console.log('click');
    restart();
  });
  restart();
    var render = function(){
      context.save();
      context.translate(width/2, height/2);

      for(var ii = 0; ii < particles.length; ii++){
        var vel = particlesVelocity[ii];
        var particle = particles[ii];
        particle.addTo(vel);


        context.strokeStyle = "#fcec59";
        context.strokeStyle = "#faff1d";
        context.beginPath();
        context.arc(particle.getX(),particle.getY(),50,0,2*Math.PI);
        context.stroke();
        // Reseet
      }

      context.restore();

      requestAnimationFrame(render, 1000/60);
    }

    render();
};
