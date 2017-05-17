window.onload = function(){
  var canvas = document.getElementById("canvas");
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;

  var render = function(){
    requestAnimationFrame(render, 1000/60);
  }

  render();
};
