$(document).ready(function(){
    let time = 5;
    $(".preloader-download").animate({
        width: "400px",
        transition: time +"s",
    });

    $(".point-one").addClass("delete");
    if ($(".point-one").hasClass("delete")){
        setTimeout ($(".point-one").addClass("show", 3000));
    } else {
        console.log('Error');
    }

});

