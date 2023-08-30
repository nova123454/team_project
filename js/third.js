$(document).ready(function () {
  console.log("a");
  $(".cover").animate({ width: 0 }, 1000);
});

$(function () {
  // $('.xbox').css("transform","translateX(0px)").css("opacity","1");

  $(window).scroll(function () {
    var ws = $(this).scrollTop();
    console.log(ws);

    var xb = $(".xbox").offset().top;

    if (ws > xb - 700) {
      console.log(xb);
      $(".xbox").css("transform", "translateX(0px)").css("opacity", "1");
    }

    var yb = $(".ybox").offset().top;

    if (ws > yb - 700) {
      console.log(yb);
      $(".ybox").css("transform", "translateY(0px)").css("opacity", "1");
    }

    var zb = $(".zbox").offset().top;

    if (ws > zb - 700) {
      $(".zbox").css("transform", "translateY(0px)").css("opacity", "1");
    }

    var s5 = $(".tubesize").offset().top;

    if (ws > s5 - 700) {
      $(".tubesize").css("transform", "translate(0px,0px)").css("opacity", "1");
    }

    var s6 = $(".textsize").offset().top;

    if (ws > s6 - 700) {
      $(".textsize").css("transform", "translate(0px,0px)").css("opacity", "1");
    }

    var s7 = $(".textsize2").offset().top;

    if (ws > s7 - 700) {
      $(".textsize2")
        .css("transform", "translate(0px,0px)")
        .css("opacity", "1");
    }
  });
});
