"use strict";

$('#btn-nav-switch').on('click', function () {
  $('nav').toggleClass('active');
});
var offsetTop;
var product1Top = $('.product-section-1').offset().top;
$(window).scroll(function () {
  offsetTop = $(window).scrollTop(); //- //卷軸高度>=900會出現按鈕

  if (offsetTop >= 900) {
    $('.page-top').addClass('active');
  } else {
    $('.page-top').removeClass('active');
  }
}); //scroll end
//- //點page-top回到最上方

$('.page-Top').on('click', function () {
  $('html', body).animate({
    scrollTop: 0
  });
}); //.page-top end
///submenu
//- $('nav>ul>li').on('click',function(){
//-     $(this).find('.submenu').toggleClass('active')
//- })