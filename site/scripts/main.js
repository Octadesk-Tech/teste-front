$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        arrows: false

        // prevArrow: '<i class="icon-arrow-left"></i>',
        // nextArrow: '<i class="icon-arrow-right"></i>'
    });

    $('li[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });
});