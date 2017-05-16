

$(document).ready(function(){
  $colorpicker = $("#colorpicker");
  $rslider = $("#rslider");


  $rslider.on('input change', function(){
    console.log($rslider.val());
  });

});
