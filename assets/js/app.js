$(document).ready(function(){

    $('.banner-review-category-button').on('click', function(e) {
        $('.review-sliders').slick("refresh");
    });

    $('.review-sliders').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    });

});