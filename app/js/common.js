$('.actual-quote-slider').slick({
    slidesToShow: 1,
    fade: true,
    appendArrows: '.actual-quote-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    appendDots: '.home-slider__nav',
    appendArrows: '.home-slider__nav',
    prevArrow: '<button type="button" class="slick-prev slick-arrow-border"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-border"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeToggle();
});
$('.btn-close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

$('.btn-sidebar').on('click', function (e) {
    e.preventDefault();
    $('.sidebar').fadeToggle();
});

$('.btn-close-sidebar').on('click', function (e) {
    e.preventDefault();
    $('.sidebar').fadeOut();
});

new WOW().init();
