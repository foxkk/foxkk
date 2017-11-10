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
$(document).ready(function(){
   console.log($('.resume').height());
});
window.foxkk = {
    'device_width' : 0,
    'device_height' : 0,
    'init' : function(){
        this.device_height = $(window).innerHeight();
        this.device_width = $(window).innerWidth();
        alert('height : '+ this.device_height + '  -- width : ' +this.device_width);
        return this;
    },
    'initResume' : function(){
        console.log('-------------------- 求职简历 ----------------------------------');
        console.log('------------------ 姓名 : 胡呈 ---------------------------------');
        console.log('------------------ 职位 : PHP高级工程师 -------------------------');
        console.log('------------------ 电话 : 186 8020 9067 ------------------------');
        console.log('------------------ 邮箱 : hucheng95@126.com --------------------');
        return this;
    }
}.initResume().init();
console.timeEnd('总运行时间:');
