/**
 * +----------------------------------------------------------------------
 * | @[author   ] : foxkk
 * +----------------------------------------------------------------------
 * | @[describe ] : foxkk framework base on jquery
 * +----------------------------------------------------------------------
 * | @[datatime ] : 2017/11/28 14:41
 * +----------------------------------------------------------------------
 * | @[contact  ] : QQ876809986
 * +----------------------------------------------------------------------
 * | @[copyright] : foxkk@copyright
 * +----------------------------------------------------------------------
 **/
k = jQuery.noConflict();
k(document).ready(function(){
    foxkk.init().initResume().initRem().fullScreen('.cover').initCover('.cover');
});
window.foxkk = {
    'top' : 0,
    'left': 0,
    'rem' : 0,
    'elements' : [],
    'base_width' : 320,
    'base_font_size' : 12,
    'max_width':960,
    'max_height' :1024,
    'min_width' : 320,
    'min_height' : 480,
    'device_width' : 0,
    'device_height' : 0,
    'position':null,
    'init' : function(){
        this.device_height = k(window).innerHeight();
        this.device_width = k(window).innerWidth();
        return this;
    },
    'initRem' : function(){
        var html = document.documentElement;
        var width = this.device_width >= this.max_width ? this.max_width : this.device_width;
        this.rem = Math.ceil(width*this.base_font_size/this.base_width);
        this.rem = this.rem % 2 == 0 ? this.rem : this.rem + 1;
        html.style.fontSize = this.rem + 'px';
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
    'initResize' : function(element){
        if(!foxkk.elements[element]){
            window.foxkk.elements[element] = k(element);
        }
        k(window).resize(function(){
            foxkk.initRem();
        });
    },
    'fullScreen' : function(element) {
        var width = this.device_width >= this.max_width ? this.max_width : this.device_width;
        k(element).css({
            'width' : width+'px',
            'height' : this.device_height + 'px',
        });
        this.position = k(element).position();
        return this;
    },
    'citem':null,
    'initCover':function(element){
        /*15--8*/
        var rows = 15;
        var columns = 8;
        var colors = [];
            colors[5] = 'rgb(27,3,3)';
            colors[4] = 'rgb(211,73,50)';
            colors[3] = 'rgb(240,135,29)';
            colors[2] = 'rgb(72,192,234)';
            colors[1] = 'rgb(189,214,57)';
            colors[0] = 'rgb(5,0,0)';

        var animations = ['animation01','animation02'];
        var datas = new Array();
            for(var i = 0;i<rows;i++){
                datas[i] = new Array();
            }
            datas[3][5] = {'text':'求','class':'animation opciment'};
            datas[4][5] = {'text':'职'};
            datas[5][5] = {'text':'简'};
            datas[6][5] = {'text':'历'};

            datas[4][4] = {'text':'姓'};
            datas[5][4] = {'text':'名','bottom':1};
            datas[6][4] = {'text':'胡'};
            datas[7][4] = {'text':'呈'};

            datas[5][3] = {'text':'职'};
            datas[6][3] = {'text':'位','bottom':1};
            datas[7][3] = {'text':'PHP'};
            datas[8][3] = {'text':'开'};
            datas[9][3] = {'text':'发'};

            datas[6][2] = {'text':'2'};
            datas[7][2] = {'text':'0'};
            datas[8][2] = {'text':'1'};
            datas[9][2] = {'text':'7','bottom':1};
            datas[10][2] = {'text':'1'};
            datas[11][2] = {'text':'2'};

            var content = '';
            var css = 'item';
            var width = this.device_width >= this.max_width ? this.max_width : this.device_width;
            var item_width = (width/columns).toFixed(6);
            var item_height =  (this.device_height/rows).toFixed(6);
            var container = k(element);
            for(var r=0; r<15; r++){
                for (var kk=0;kk < columns; kk++){
                    console.log('row : '+i +" column : "+ kk);
                    var indexcolor = Math.floor(Math.random()*6);
                    if(!datas[r][kk]){
                        content = '&nbsp;';
                        css = 'item blank';
                        var tempitem = foxkk.citem =k("<span class='"+css+"'></span>");
                        window.setTimeout(function(){
                            tempitem.addClass('anim_fade_out');
                        },indexcolor*1000);
                        tempitem.css({
                            'width':item_width+'px',
                            'height':item_height+'px',
                            'line-height':item_height+'px',
                            'left':(kk*item_width)+'px',
                            'top':(r*item_height)+'px',
                            'opacity':'0.2',
                            'background':colors[indexcolor]
                        });
                        container.append(tempitem);
                    }else{
                        content = datas[r][kk].text;
                        css = 'item text';
                        var tempitem =k("<span class='"+css+"'>"+content+"</span>");
                        var border =  content = datas[r][kk].bottom ==1 ? '' :'';
                        tempitem.css({
                            'width':item_width+'px',
                            'height':item_height+'px',
                            'line-height':item_height+'px',
                            'left':(kk*item_width)+'px',
                            'top':(r*item_height)+'px',
                            'border-right':'1px solid white',
                            'color':'white',
                            'background':colors[indexcolor]
                        });
                        container.append(tempitem);
                    }
                }
            }
    },
    'keys' : function(object){

    },
    'initScroll' : function(){
       k(document).scroll(function(){
           this.top = k(document).scrollTop();
           this.left =  k(document).scrollLeft();
       });
    }

};
function setItemClass(item){
    item.addClass('anim_fade_out');
}