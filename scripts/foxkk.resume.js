/**
 * +----------------------------------------------------------------------
 * | @[author   ] : foxkk
 * +----------------------------------------------------------------------
 * | @[describe ] : 求职简历js
 * +----------------------------------------------------------------------
 * | @[datatime ] : 2017/11/10 13:39
 * +----------------------------------------------------------------------
 * | @[contact  ] : QQ876809986
 * +----------------------------------------------------------------------
 * | @[copyright] : foxkk@copyright
 * +----------------------------------------------------------------------
 **/
console.time('总运行时间:');
k(document).ready(function(){
    foxkk.init().initResume().initRem().initContainer('.resume1').initResize('.resume1');
    var swiper = new Swiper('.swiper-container', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
});
console.timeEnd('总运行时间:');
