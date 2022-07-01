"use strict";

$('#btn-nav-switch').on('click', function () {
  $('nav').toggleClass('active');
}); ///submenu
//- $('nav>ul>li').on('click',function(){
//-     $(this).find('.submenu').toggleClass('active')
//- })