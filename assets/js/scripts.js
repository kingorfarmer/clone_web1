$('.menu__topbar').click(function(){
    $('.menu__overlay').toggle();
    $('.slide__menu').toggle();
  })

  $('.close__menu').click(function(){
    $('.menu__overlay').hide();
    $('.slide__menu').hide();
  })