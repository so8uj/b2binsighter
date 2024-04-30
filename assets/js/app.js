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
        responsive:[
            {
                breakpoint: 1381,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
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

    $('.accordion-item').click(function(e){
        e.preventDefault();
        $('.accordion-item').removeClass('shadow-main');
        $(this).addClass('shadow-main');;
    });


    const copy_review_html = $(".review-animation-wrapper").clone();
    const copy_review_html_width = $(".review-animation-wrapper").width();
    const add_html_container = $(".main-review-animation-container");
    add_html_container.append(copy_review_html);

    // copy_review_html.animate({ttransform:'rotate(240deg)'},5000);
 

});

// $(window).load(function(){
//     // Review Animation
    
// });