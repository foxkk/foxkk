/**
 * +----------------------------------------------------------------------
 * | @[author   ] : foxkk
 * +----------------------------------------------------------------------
 * | @[describe ] : base jquery foxkk javascript framework
 * +----------------------------------------------------------------------
 * | @[datatime ] : 2017/11/15 11:50
 * +----------------------------------------------------------------------
 * | @[contact  ] : QQ876809986
 * +----------------------------------------------------------------------
 * | @[copyright] : foxkk@copyright
 * +----------------------------------------------------------------------
 **/
k = jQuery.noConflict();
window.foxkk = {
    'elements' : [],
    'base_width' : 320,
    'base_font_size' : 12,
    'max_width':960,
    'max_height' :1024,
    'min_width' : 320,
    'min_height' : 480,
    'device_width' : 0,
    'device_height' : 0,
    'init' : function(){
        this.device_height = k(window).innerHeight();
        this.device_width = k(window).innerWidth();
        return this;
    },
    'initRem' : function(){
        var html = document.documentElement;
        var width = this.device_width >= this.max_width ? this.max_width : this.device_width;
        var rem = Math.ceil(width*this.base_font_size/this.base_width);
            rem = rem % 2 == 0 ? rem : rem + 1;
        html.style.fontSize = rem + 'px';
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
        this.init();
        var height = this.device_height <= this.min_height ? this.min_height: this.device_height;
        k(element).css({
            'height' : height+'px',
            'line-height':'100%',
            'font-size' : '1.5rem'
        });
        return this;
    },
    'initResize' : function(element){
        if(!foxkk.elements[element]){
            window.foxkk.elements[element] = k(element);
        }
        k(window).resize(function(){
            foxkk.initContainer(element);
            foxkk.initRem();
        });
    }
};