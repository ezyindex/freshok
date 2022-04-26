$(function () {
  $('.slider-top__advertising').slick({
    prevArrow: '<button type = "button" class="slider-top__arrow slider-top__arrow--prev"><img src="images/slider/icon/arrow-left.svg" alt="предодущий слайд"></button>',
    nextArrow: '<button type="button" class="slider-top__arrow slider-top__arrow--next"><img src="images/slider/icon/arrow-right.svg" alt="следующий слайд"></button>'

  });

  $('.slider-bot__list').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

});

var mixer = mixitup('.top-product__list');
var mixer = mixitup('.sales__list');