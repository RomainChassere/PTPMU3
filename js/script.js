$(document).ready(function(){
  console.log("jQuery in the place");

  $('.burger_deluxe').on('click',function() {
  $(this).toggleClass('open');
  $('.overlay').toggleClass('open');
  });

  $('.slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  /*autoplay: true,*/
  autoplaySpeed: 1500,
  prevArrow: $('.slick-prev'),
  nextArrow: $('.slick-next'),
  });
});
