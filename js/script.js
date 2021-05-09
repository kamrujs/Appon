// member slider
$('.comment').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.image-contain',
    autoplay: true,
});

$('.image-contain').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.comment',
  centerMode: true,
  centerPadding: '0',
    autoplay: true,
});
// member slider


// banner slider
$('.banner-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  autoplay: true,
});
// banner slider


// SS slider
$('.ss-slider').slick({
  centerMode: true,
  centerPadding: '35px',
  slidesToShow: 4,
  dots: true,
  arrows:false,
});
// SS slider


// Video Venobox
$(document).ready(function(){
  $('.venobox').venobox({
    spinner : 'wandering-cubes',
  }); 
});
// Video Venobox

