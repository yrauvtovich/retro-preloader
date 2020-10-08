$(document).ready(function(){

//Setting the download time in seconds
  let time = 5;

//Download options
  $(".preloader-download").animate({
    width: "400px",
    transition: time +"s",
  });

//Blinking points
  setTimeout(function onePoint() {
    setInterval(function () {
      if ($(".point-one").hasClass("point-hide")){
        $(".point-one").removeClass("point-hide").addClass("point-show");
      } else {
        $(".point-one").addClass("point-hide");
        if ($(".point-one").hasClass("point-show")) {
                    $(".point-one").removeClass("point-show");
        }
      }
    }, time*100);
  }, (time-4)*80);
  setTimeout(function twoPoint(){
    setInterval(function () {
      if ($(".point-two").hasClass("point-hide")){
        $(".point-two").removeClass("point-hide").addClass("point-show");
      } else {
        $(".point-two").addClass("point-hide");
        if ($(".point-two").hasClass("point-show")) {
          $(".point-two").removeClass("point-show")
        }
      }
    }, time*100);
  }, (time-3)*80);
  setTimeout(function threePoint() {
    setInterval(function () {
      if ($(".point-three").hasClass("point-hide")) {
        $(".point-three").removeClass("point-hide").addClass("point-show");
      } else {
        $(".point-three").addClass("point-hide");
        if ($(".point-three").hasClass("point-show")) {
          $(".point-three").removeClass("point-show")
        }
      }
    }, time * 100);
  }, (time-2)*80);
});

