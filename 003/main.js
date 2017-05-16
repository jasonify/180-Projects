

$(document).ready(function(){
  $colorpicker = $("#colorpicker");
  $rslider = $("#rslider");
  $gslider = $("#gslider");
  $bslider = $("#bslider");

  // Our RGB values:
  var r = 200;
  var g = 216;
  var b = 247;


  var setRGBs = function(){
    $("body").css({
      "background": "rgb(" + r + "," + g + "," + b + ")"
    });
  };


  $rslider.on('input change', function(){
    r = $rslider.val();
    setRGBs();
  });

  $gslider.on('input change', function(){
    g = $gslider.val();
    setRGBs();
  });


  $bslider.on('input change', function(){
    b = $bslider.val();
    setRGBs();
  });


  setRGBs();

});
