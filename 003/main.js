

$(document).ready(function(){
  $colorpicker = $("#colorpicker");
  $rslider = $("#rslider");

  // Our RGB values:
  var r = 200;
  var g = 216;
  var b = 247;


  var setRGBs = function(){
    $("body").css({
      "background": "rgb(" + r + "," + g + "," + b + ")"
    });
  };


  setRGBs();
  $rslider.on('input change', function(){
    r = $rslider.val();
    setRGBs();
  });

});
