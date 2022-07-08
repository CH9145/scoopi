"use strict";

$('#btn-nav-switch').on('click', function () {
  $('nav').toggleClass('active');
}); // //最新消息頁 摺疊

$('.news-outer').on('click', function () {
  $(this).toggleClass('active');
  $(this).siblings().removeClass('active');
}); // }) //最新消息摺疊 end
//註冊蓋板

function closeModal(e) {
  console.log(e.target); // console.log(this)

  if (e.target == this) {
    // console.log('符合事件的選取器')
    modalWrapper.classList.remove('active');
  } else {// console.log('不符合')
  }
} //註冊蓋板end
//loading start


$(window).on('load', function () {
  $('.loading-overlay').addClass('active');
}); //window load end
// //轉軸移動到最上面
// let offsetTop
// let scrollTop = $('main').offset().top
//     $(window).scroll(function(){
//         offsetTop = $(window).scrollTop()
//         //- //卷軸高度>=900會出現按鈕
//         if( offsetTop >= 900){
//             $('.page-top').addClass('active')
//         }else{
//             $('.page-top').removeClass('active')
//         }
//     })
// $('.page-top').on('click',function(){
//     $('html,body').animate({scrollTop:0})
//     // console.log('test')
// }) //page-top end
// 捲軸事件
// $(window).scroll(function () {
//     offsetTop = $(window).scrollTop()
//     gsap.to(".deco-1", { y: offsetTop / 10, duration: 5 })
//     gsap.to(".deco-2", { y: -offsetTop / 10, duration: 3 })
//     gsap.to(".deco-3", { y: offsetTop / 10, duration: 2 })
//     gsap.to(".deco-4", { y: -offsetTop / 10, duration: 5 })
//     gsap.to(".deco-5", { y: offsetTop / 10, duration: 3 })
//     gsap.to(".deco-6", { y: -offsetTop / 10, duration: 2 })
// })
//
// 自適應的卷軸動畫 start
//
// function gsapAnimate() {
//     if ($(window).width() >= 768) {
//         $(window).scroll(function () {
//             offsetTop = $(window).scrollTop()
//             gsap.to(".deco-1", { y: offsetTop / 10, duration: 5 })
//             gsap.to(".deco-2", { y: -offsetTop / 10, duration: 3 })
//             gsap.to(".deco-3", { y: offsetTop / 10, duration: 2 })
//             gsap.to(".deco-4", { y: -offsetTop / 10, duration: 5 })
//             gsap.to(".deco-5", { y: offsetTop / 10, duration: 3 })
//             gsap.to(".deco-6", { y: -offsetTop / 10, duration: 2 })
//         }) // scroll end
//         } else {
//         $(window).scroll(function () {
//             offsetTop = $(window).scrollTop()
//             gsap.to(".deco-1", { y: offsetTop / 1, duration: 1 })
//         })
//     }
// // }
///submenu
//- $('nav>ul>li').on('click',function(){
//-     $(this).find('.submenu').toggleClass('active')
//- }) 

new WOW().init();