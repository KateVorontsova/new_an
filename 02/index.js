$("img.b-body__img").click(function isFace(e) {
    $('.b-face__img-1').attr("src", $(this).attr('alt') + "_1_big_face.png");
    $('.b-face__img-1').attr("alt", $(this).attr('alt') + "_1");
    $('.b-face__img-2').attr("src", $(this).attr('alt') + "_2_big_face.png");
    $('.b-face__img-2').attr("alt", $(this).attr('alt') + "_2");
    $('.b-face__img-3').attr("src", $(this).attr('alt') + "_3_big_face.png");
    $('.b-face__img-3').attr("alt", $(this).attr('alt') + "_3");
    $('.b-person_bodyimg').attr("src", $(this).attr('alt') + "_big.png");
    var elem = document.getElementsByClassName('b-face__img1');
    e.preventDefault();
    return false;
});
$("img.b-face__img").click(function isSmile(e) {
    $('.b-person_faceimg').attr("src", $(this).attr('alt') + "_big_face.png");
});
$("div.b-choose__range").click(function isYourType() {
    var rangeSlider = document.getElementsByClassName("b-choose__items");
    var c = rangeSlider[0].value;
    if (c == 1) {
        $("div.b-cloud__mid").removeClass("b-active");
        $("div.b-cloud__sen").removeClass("b-active");
    } else if (c == 2) {
        $("div.b-cloud__mid").addClass("b-active");
        $("div.b-cloud__sen").removeClass("b-active");
        $("p.b-cloud__item").css("font-size", "14px");
    } else if (c == 3) {
        $("div.b-cloud__mid").addClass("b-active");
        $("div.b-cloud__sen").addClass("b-active");
        $("p.b-cloud__item").css("font-size", "12px");
    }
});
