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
    foxkk.init().initResume().initRem(window,document).initContainer('.resume').initResize('.resume');
});
console.timeEnd('总运行时间:');
