function loaded(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d'); 
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;

  var render = function(){
    context.fillRect(20,20,100,100);
    setTimeout(function(){
      requestAnimationFrame(render);
    }, 1000/60);
  };
  render();
};

loaded();
