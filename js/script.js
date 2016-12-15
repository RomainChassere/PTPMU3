$(document).ready(function(){
  console.log("jQuery in the place");
  $('.burger_deluxe').on('click',function() {
  $(this).toggleClass('open');
  $('.overlay').toggleClass('open');
  });

  var width = $(window).width();

  if (width >= 450 && width <= 800) {
    console.log("tablette slick");
    $('.slick').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    /*autoplay: true,*/
    autoplaySpeed: 1500,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
  });
  $('#responsive').addClass('border_bot');
}
  else if (width <= 449) {
    console.log("mobile slick");
    $('.slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    /*autoplay: true,*/
    autoplaySpeed: 1500,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
  });
  $('#responsive').addClass('border_bot');
  }
  else if (width >= 801) {
    console.log("desktop slick");
    $('.slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    /*autoplay: true,*/
    autoplaySpeed: 1500,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    });
  }


  function parallaxIt() {

  // create variables
  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // on window scroll event
  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  });

  // for each of content parallax element
  $('[data-type="content"]').each(function (index, e) {
    var $contentObj = $(this);
    var fgOffset = parseInt($contentObj.offset().top);
    var yPos;
    var speed = ($contentObj.data('speed') || 1 );

    $fwindow.on('scroll resize', function (){
      yPos = fgOffset - scrollTop / speed;

      $contentObj.css('top', yPos);
    });
  });

  // for each of background parallax element
  $('[data-type="background"]').each(function(){
    var $backgroundObj = $(this);
    var bgOffset = parseInt($backgroundObj.offset().top);
    var yPos;
    var coords;
    var speed = ($backgroundObj.data('speed') || 0 );

    $fwindow.on('scroll resize', function() {
      yPos = - ((scrollTop - bgOffset) / speed);
      coords = '50% '+ yPos + 'px';

      $backgroundObj.css({ backgroundPosition: coords });
    });
  });

  // triggers winodw scroll for refresh
  $fwindow.trigger('scroll');
};

parallaxIt();

$('.accordion-header').on("click", function(){
    var accordion = $(this).parent();
    var accordionBody = $(this).next();

   if (accordion.hasClass("active")){
      accordion.removeClass("active");
      accordionBody.slideUp(500);
      $(this).removeClass('changed');
      $(this).addClass('rota');
     } else {
      accordion.addClass("active");
      accordionBody.slideDown(500);
      $(this).removeClass('rota');
      $(this).addClass('changed')
     }
  });

  $("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top-80
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});
});
