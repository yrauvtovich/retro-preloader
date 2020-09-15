$(document).ready(function(){
    let time = 5;
    $(".preloader-download").animate({
        width: "400px",
        transition: time +"s",
    });
    setTimeout(function onePoint() {
        setInterval(function () {
            if ($(".point-one").hasClass("delete")){
                $(".point-one").removeClass("delete").addClass("show");
            } else {
                $(".point-one").addClass("delete");
                if ($(".point-one").hasClass("show")) {
                    $(".point-one").removeClass("show")
                }

            }
        }, time*100);
    }, (time-4)*80);
    setTimeout(function twoPoint(){
        setInterval(function () {
            if ($(".point-two").hasClass("delete")){
                $(".point-two").removeClass("delete").addClass("show");
            } else {
                $(".point-two").addClass("delete");
                if ($(".point-two").hasClass("show")) {
                    $(".point-two").removeClass("show")
                }

            }
        }, time*100);
    }, (time-3)*80);
    setTimeout(function threePoint() {
        setInterval(function () {
            if ($(".point-three").hasClass("delete")) {
                $(".point-three").removeClass("delete").addClass("show");
            } else {
                $(".point-three").addClass("delete");
                if ($(".point-three").hasClass("show")) {
                    $(".point-three").removeClass("show")
                }

            }
        }, time * 100);
    },
        (time-2)*80);

});

