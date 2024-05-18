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
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.agency-ranking-slider').slick({
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


    $('.custom-select-radio').click(function(){
       
        $('.custom-select-radio').removeClass('active-custom-radio-pricing');
        $(this).addClass('active-custom-radio-pricing');
    });


    $('.subemnu-left-menu-item').mouseover(function(){
        var target_nav_tab = $(this).data('submenu-target');
        var target_submenu_area = $(this).data('target-area');
        
        $(this).siblings().removeClass('active-sub');
        $(this).addClass('active-sub');

        $('#'+target_submenu_area+' .submenu-main-tab').removeClass('active-sub-inner');
        $('#'+target_nav_tab).addClass('active-sub-inner');


    });


});

// $(window).load(function(){
//     // Review Animation
    
// });