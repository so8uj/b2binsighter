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


    $('.showmore-button').click(function(e) {
        e.preventDefault();
        let target_this = $(this);
        if (target_this.parent().find('.agency-box-hidden-part').hasClass('show')) {
            target_this.parent().find('.agency-box-hidden-part').removeClass('show');
            target_this.parent().find('.agency-box-hidden-part').slideUp(350);
            target_this.find('.fa').addClass('fa-angle-down');
            target_this.find('.fa').removeClass('fa-angle-up');
        } else {
            target_this.parent().find('.agency-box-hidden-part').addClass('show');
            target_this.find('.fa').removeClass('fa-angle-down');
            target_this.find('.fa').addClass('fa-angle-up');
            target_this.parent().find('.agency-box-hidden-part').slideToggle(350);
        }
     });


});