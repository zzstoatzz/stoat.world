$(function() {
  $("#homelink").click(function () {
    $("#hiddenlink").toggle();
  });
  $('#poppintab').click(function() {
    $("#poppin").animate({left:"-10px"},400);
    $("#poppintab").animate({left:"270px"},400);
    $("a").hover(false);
  });
  $('#poppin, #wrapper').click(function() {
    $("#poppin").animate({left:"-300px"},200);
    $("#poppintab").animate({left:"-20px"},200);
    $("a").hover(true);
    
  });



  $("#writing").mouseover(function() {
    $("#wrapper").css("background-image","url(http://bestanimations.com/Books/writing/hand-writing-close-up-animated-gif.gif)");
  });
  $("#writing").mouseleave(function() {
    $("#wrapper").css("background-image","none");
  });


  $("#traveling").mouseover(function() {
    $("#wrapper").css("background-image","url(https://68.media.tumblr.com/9a96257b072eeacc73d81af3538d86ae/tumblr_nupglwxIkJ1rc860go1_r3_500.gif)");
  });
  $("#traveling").mouseleave(function() {
    $("#wrapper").css("background-image","none");
  });


  $("#endeavoring").mouseover(function() {
    $("#wrapper").css("background-image","url(https://68.media.tumblr.com/56798e303f23e871f1855b5be58429af/tumblr_omtfr7VelD1tkfof5o3_500.gif)");
  });
  $("#endeavoring").mouseleave(function() {
    $("#wrapper").css("background-image","none");
  });


  $("#coding").mouseover(function() {
    $("#wrapper").css("background-image","url(https://i.imgur.com/qAf0N.gif)");
  });
  $("#coding").mouseleave(function() {
    $("#wrapper").css("background-image","none");
  });
});
