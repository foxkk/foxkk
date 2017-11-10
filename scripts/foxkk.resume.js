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
kk = jQuery.noConflict();
console.time('总运行时间:');
kk(document).ready(function(){
    foxkk.init().initResume().initRem(window,document).initContainer('.resume');
});
window.foxkk = {
    'max_width':960,
    'max_height' : 0,
    'device_width' : 0,
    'device_height' : 0,
    'init' : function(){
        this.device_height = kk(window).innerHeight();
        this.device_width = kk(window).innerWidth();
        return this;
    },
    'initRem' : function(window,document){
        var docEl = document.documentElement
        var dpr = window.devicePixelRatio || 1
        setBodyFontSize();
        setRemUnit();
        // reset rem unit on page resize
        window.addEventListener('resize', setRemUnit);
        window.addEventListener('pageshow', function (e) {
            if (e.persisted) {
                setRemUnit()
            }
        });
        // detect 0.5px supports
        if (dpr >= 2) {
            var fakeBody = document.createElement('body');
            var testElement = document.createElement('div');
            testElement.style.border = '.5px solid transparent';
            fakeBody.appendChild(testElement);
            docEl.appendChild(fakeBody);
            if (testElement.offsetHeight === 1) {
                docEl.classList.add('hairlines');
            }
            docEl.removeChild(fakeBody);
        }
        // adjust body font size
        function setBodyFontSize () {
            if (document.body) {
                document.body.style.fontSize = (12 * dpr) + 'px'
            } else {
                document.addEventListener('DOMContentLoaded', setBodyFontSize)
            }
        }
        // set 1rem = viewWidth / 10
        function setRemUnit () {
            var rem = docEl.clientWidth / 10
            docEl.style.fontSize = rem + 'px'
        }
        return this;
    },
    'initResume' : function(){
        console.log('-------------------- 求职简历 ----------------------------------');
        console.log('------------------ 姓名 : 胡呈 ---------------------------------');
        console.log('------------------ 职位 : PHP高级工程师 -------------------------');
        console.log('------------------ 电话 : 186 8020 9067 ------------------------');
        console.log('------------------ 邮箱 : hucheng95@126.com --------------------');
        return this;
    },
    'initContainer' : function(element){
        var height = this.device_height;
        kk(element).css({
            'height' : height+'px',
        });
        return this;
    }
};
console.timeEnd('总运行时间:');
