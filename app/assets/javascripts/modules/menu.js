$(function(){
  $('.slick').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '300px',
    focusOnSelect: true,
  });

  $('.logo').hover(function(){
    $(this).children('.logo__text').stop().fadeIn();
  }, function(){
    $(this).children('.logo__text').stop().fadeOut();
  });

  $('.logo').click(function(){
    window.location.href = "/"
  })
});