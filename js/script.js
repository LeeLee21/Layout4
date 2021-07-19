$(document).ready(function (){
    $('.burger').click(function (event){
        $('.burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint:850,
                settings: {
                    slidesToShow: 2,
                    dots:true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }

        ]
    });
})
$(document).ready(function(){
    $('.sliderstud').slick({
        arrows:false,
        dots:true,
        Infinity:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:10000,
        fade:true,
    });
})
$(document).ready(function(){
    $('.mentorslider').slick({
        dots:true,
        arrows:false,
        Infinity:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:10000,
    });
})