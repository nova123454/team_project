$(document).ready(function () {
  console.log("a");
  $(".cover").animate({ width: 0 }, 1000);
});



$(function(){

  $('.xbox').css("transform","translateX(0px)").css("opacity","1");

  
  $(window).scroll(function(){

    var ws=$(this).scrollTop();


    var =$('.xbox').offset().top;

    if(ws>-700){

      $('.xbox').css("transform","translateX(0px)").css("opacity","1");

    }

    var =$('.ybox').offset().top;

    if(ws>-700){

      $('.ybox').css("transform","translateY(0px)").css("opacity","1");

    }

    var =$('.zbox').offset().top;

    if(ws>-700){

      $('.zbox').css("transform","translateY(0px)").css("opacity","1");

    }

    var s5=$('.tubesize').offset().top;

    if(ws>-700){

      $('.tubesize').css("transform","translate(0px,0px)").css("opacity","1");

    }

    var s6=$('.textsize').offset().top;

    if(ws>-700){

      $('.textsize').css("transform","translate(0px,0px)").css("opacity","1");

    }

  });

});
