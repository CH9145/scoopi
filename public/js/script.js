$('#btn-nav-switch').on('click', function () {
    $('nav').toggleClass('active')
})



// //最新消息頁 摺疊
$('.news-outer').on('click', function () {
    $(this).toggleClass('active')
    $(this).siblings().removeClass('active')
})
// }) //最新消息摺疊 end


// // 卷軸回到top
// let offsetTop
// let product1Top = $('.product-section-1').offset().top
//     $(window).scroll(function(){
//         offsetTop = $(window).scrollTop()
//         //- //卷軸高度>=900會出現按鈕
//         if( offsetTop >= 900){
//             $('.page-top').addClass('active')
//         }else{
//             $('.page-top').removeClass('active')
//         }
//     }) //scroll end
//
// //- //點page-top回到最上方
// $('.page-Top').on('click',function(){
//     $('html',body).animate({scrollTop:0})
// }) //.page-top end
//



$(window).scroll(function () {
    offsetTop = $(window).scrollTop()
    gsap.to(".deco-1", { y: offsetTop / 10, duration: 5 })
    gsap.to(".deco-2", { y: -offsetTop / 10, duration: 3 })
    gsap.to(".deco-3", { y: offsetTop / 10, duration: 2 })
    gsap.to(".deco-4", { y: -offsetTop / 10, duration: 5 })
    gsap.to(".deco-5", { y: offsetTop / 10, duration: 3 })
    gsap.to(".deco-6", { y: -offsetTop / 10, duration: 2 })
})


//
// 自適應的卷軸動畫 start
//
function gsapAnimate() {
    if ($(window).width() >= 768) {
        $(window).scroll(function () {
            offsetTop = $(window).scrollTop()
            gsap.to(".deco-1", { y: offsetTop / 10, duration: 5 })
            gsap.to(".deco-2", { y: -offsetTop / 10, duration: 3 })
            gsap.to(".deco-3", { y: offsetTop / 10, duration: 2 })
            gsap.to(".deco-4", { y: -offsetTop / 10, duration: 5 })
            gsap.to(".deco-5", { y: offsetTop / 10, duration: 3 })
            gsap.to(".deco-6", { y: -offsetTop / 10, duration: 2 })
        }) // scroll end
        } else {
        $(window).scroll(function () {
            offsetTop = $(window).scrollTop()
            gsap.to(".deco-1", { y: offsetTop / 1, duration: 1 })
        })
    }
}


    ///submenu
    //- $('nav>ul>li').on('click',function(){
    //-     $(this).find('.submenu').toggleClass('active')
    //- }) 


    new WOW().init()