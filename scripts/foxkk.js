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
    foxkk.init().initScroll().initResize().initResume().initMask('.mask',8).fullScreen('.cover').initCover('.cover');//
});
window.foxkk = {
    'top':0,
    'prefix':'items',
    'rem' : 0,
    'elements' : [],
    'duration' : 2,
    'base_width' : 320,
    'valid_width' : 0,
    'valid_height':0,
    'doc_height':0,
    'base_font_size' : 12,
    'max_width':960,
    'max_height' :1024,
    'min_width' : 320,
    'min_height' : 480,
    'device_width' : 0,
    'device_height': 0,
    'words':[
        '自信','乐观','细心','善良','诚信',
        '谈定','创新','责任','风度','帅气',
        '年轻','梦想','感恩','好学','理智',
        '豁达','执着','宽容','激情','热情',
        '爱心','直率','斗志','率真','倾听',
        '幽默','优雅','野心'
    ],
    'colors':[
        'rgb(27,3,3)','rgb(211,73,50)','rgb(240,135,29)',
        'rgb(72,192,234)','rgb(5,0,0)','rgb(40,6,12)',
        'rgb(94,49,143)','rgb(69,43,31)','rgb(52,6,8)',
        'rgb(57,39,38)','rgb(219,84,37)','rgb(205,39,206)',
        'rgb(203,75,108)','rgb(107,34,91)','rgb(230,111,27)',
        'rgb(3,50,60)','rgb(72,37,43)','rgb(189,214,57)',
        'rgb(9,74,110)'
    ],
    'items' : [],
    'init' : function(){
        var html = document.documentElement;
        this.device_height = k(window).innerHeight();
        this.device_width = k(window).innerWidth();
        this.doc_height = k(document).innerHeight();
        this.valid_width = this.device_width >= this.max_width ? this.max_width : this.device_width;
        this.valid_height = this.device_height >= this.min_height ? this.device_height : this.min_height;
        this.rem = Math.ceil( this.valid_width*this.base_font_size/this.base_width);
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
        k(window).resize(function(){
            foxkk.init().fullScreen('.cover').initCover('.cover');
        });
        return this;
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
    'initCover':function(element){

        /*valid row=9 column=4*/
        /*15 - 8*/
        var rows = 12;
        var columns = 6;
        var parent = k(element);
            parent.html('');
        var colors = ['rgb(35,33,29)','rgb(5,2,4)','rgb(205,184,206)','rgb(240,135,29)','rgb(72,192,234)','rgb(189,214,57)','rgb(255,255,255)'];
        var item_width = (this.valid_width/columns).toFixed(6);
        var item_height = (this.valid_height/rows).toFixed(6);
        var valid_width = parseFloat(item_width) > parseFloat(item_height) ? item_height : item_width;
        var offset = Math.ceil((rows - 8)/2);
        var offsetrow = Math.ceil((columns-4)/2);
        //console.log('item_width : '+item_width +' item_height: '+item_height+' valid_width : '+valid_width);
        var items = new Array();
            for(var i = 0;i<rows;i++){
                items[i] = new Array();
            }
            items[offset][offsetrow+3]   = {'text':'求','color':6,'bcolor':2,'anim':'jump_up resume'};
            items[offset+1][offsetrow+3] = {'text':'职','color':6,'bcolor':2,'anim':'resume jump_down'};
            items[offset+2][offsetrow+3] = {'text':'简','color':6,'bcolor':3,'anim':'resume jump_down'};
            items[offset+3][offsetrow+3] = {'text':'历','color':6,'bcolor':3,'anim':'jump_down resume'};

            items[offset+1][offsetrow+2] = {'text':'姓','color':4,'bcolor':2};
            items[offset+2][offsetrow+2] = {'text':'名','color':4,'bcolor':2};
            items[offset+3][offsetrow+2] = {'text':'胡','color':5,'bcolor':3};
            items[offset+4][offsetrow+2] = {'text':'呈','color':5,'bcolor':3};

            items[offset+2][offsetrow+1] = {'text':'职','color':4,'bcolor':2};
            items[offset+3][offsetrow+1] = {'text':'位','color':4,'bcolor':2};
            items[offset+4][offsetrow+1] = {'text':'PHP','color':5,'bcolor':3};
            items[offset+5][offsetrow+1] = {'text':'开','color':5,'bcolor':3};
            items[offset+6][offsetrow+1] = {'text':'发','color':5,'bcolor':3};

            items[offset+3][offsetrow] = {'text':'日','color':4,'bcolor':2};
            items[offset+4][offsetrow] = {'text':'期','color':4,'bcolor':2};
            items[offset+5][offsetrow] = {'text':'20','color':5,'bcolor':3};
            items[offset+6][offsetrow] = {'text':'17','color':5,'bcolor':3};
            items[offset+7][offsetrow] = {'text':'年','color':5,'bcolor':3};
            for(var i = 0; i < rows ; i++){
                for(var j = 0 ; j< columns; j++){
                    var temp = null;
                    var css= {
                        'width': item_width + 'px',
                        'height':item_height +'px',
                        'top':i*item_height+'px',
                        'left':j*item_width+'px',
                    };
                    if(!items[i][j]) {
                        temp = k("<div class='item'></div>");

                    }else{
                        if(!items[i][j].anim) items[i][j].anim ='';
                        temp = k("<div class='item "+items[i][j].anim+"'> <span style='color:"+colors[items[i][j].color]+";width: "+valid_width +"px; height: "
                            +valid_width+"px; line-height: "+valid_width+"px;'>"+items[i][j].text+"</span></div>");
                        css['border-right'] = '0.09rem solid '+colors[items[i][j].bcolor];
                        css['line-height'] =item_height +'px';
                    }
                    css['background'] =''+ colors[(i+j)%2];
                    temp.css(css);
                    parent.append(temp);
                }
            }
            return this;
    },
    'initMask' : function(parent,columns){
        foxkk.mask = {};
        foxkk.mask.item={};
        foxkk.mask.columns = columns || 8;
        foxkk.mask.item.width = foxkk.mask.item.height = (this.valid_width/columns).toFixed(6);
        foxkk.mask.rows = Math.ceil(this.doc_height/foxkk.mask.item.width);

        var p_item = k(parent);
        p_item.html('');
        var items = new Array();
        for(var i = 0;i<foxkk.mask.rows;i++){
            items[i] = new Array();
        }
        for(var r = 0; r < foxkk.mask.rows; r++){
            for(var c = 0; c < foxkk.mask.columns; c++){
                var word_index = 0;
                var color_index = 0;
                /*相邻颜色各不相同*/
                while(true){
                    color_index = Math.floor(Math.random()*this.colors.length);
                    if(r-1 >= 0 && c-1 >=0 ){
                       if(items[r-1][c-1].color == color_index) continue;
                    }
                    if(r-1 >= 0 && c >=0 ){
                        if(items[r-1][c].color == color_index) continue;
                    }
                    if(r >= 0 && c-1 >=0 ){
                        if(items[r][c-1].color == color_index) continue;
                    }
                    if(r-1 >= 0 && c+1 < columns ){
                        if(items[r-1][c+1].color == color_index)continue;
                    }
                    break;
                }
                /*相邻文字各不相同*/
                while(true){
                    word_index = Math.floor(Math.random()*this.words.length);
                    if(r-1 >= 0 && c-1 >=0 ){
                        if(items[r-1][c-1].word == word_index) continue;
                    }
                    if(r-1 >= 0 && c >=0 ){
                        if(items[r-1][c].word == word_index) continue;
                    }
                    if(r >= 0 && c-1 >=0 ){
                        if(items[r][c-1].word == word_index) continue;
                    }
                    if(r-1 >= 0 && c+1 < columns ){
                        if(items[r-1][c+1].word == word_index)continue;
                    }
                    break;
                }
                var item = "<span class='item' row='"+r+"' column='"+c+"'>"+this.words[word_index]+"</span>";
                var temp = k(item);
                var top = r*foxkk.mask.item.width;
                var left = c*foxkk.mask.item.width;
                temp.css({
                    'width':foxkk.mask.item.width+'px',
                    'height':foxkk.mask.item.width+'px',
                    'line-height':foxkk.mask.item.width+'px',
                    'left':left+'px',
                    'top':top+'px',
                    'background':this.colors[color_index]
                });
                p_item.append(temp);
                items[r][c] = {
                    'item':temp,
                    'color':color_index,
                    'word':word_index,
                    'visible':1, //1 :可见 2 : 隐藏
                    'position':{'top':top,'left':left}
                };
            }
        }
        this.elements[this.prefix+parent] = items;
        return this;
    },
    'fadeOut' : function(parent,row,column,top,time){
        //console.log('parent : ' + parent +' row : '+row + ' column : '+column);
        if(row < 0 || row >= foxkk.mask.rows || column <0 || column >= foxkk.mask.columns) {return this};
        var element = foxkk.elements[this.prefix+parent][row][column];
        if(
            element.visible == 2 ||
            ((parseFloat(element.position.top) + parseFloat(foxkk.mask.item.width)) <= parseFloat(top)) ||
            (parseFloat(element.position.top) > parseFloat(top) + parseFloat(foxkk.device_height))
        ){return this};
        element.visible = 2;
        element.item.animate({'opacity':0},(foxkk.duration+time)*300);
        time = time + 0.2;
        foxkk.fadeOut(parent,row,column-1,top,time);/*左*/
        foxkk.fadeOut(parent,row-1,column,top,time);/*上*/
        foxkk.fadeOut(parent,row,parseInt(column)+1,top,time);/*右*/
        foxkk.fadeOut(parent,parseInt(row)+1,column,top,time);/*下*/
        return this;
    },
    'fadeIn' : function(element,top){
        var  temp = null;
        for (var i = 0; i < foxkk.mask.rows;i++){
            for(var j = 0; j < foxkk.mask.columns; j++){
                temp = foxkk.elements[this.prefix+element][i][j];
                if(
                    temp.visible == 2 && (
                    ((parseFloat(temp.position.top) + parseFloat(foxkk.mask.item.width)) <= parseFloat(top)) ||
                    (parseFloat(temp.position.top) >= parseFloat(top) + parseFloat(foxkk.device_height)))
                ){
                    temp.visible =1;
                    temp.item.animate({'opacity':1},foxkk.duration*1000);
                }
            }
        }
    },
    'initScroll':function(){
        k(window).scroll(function(){
            var position = foxkk.getFirstValidItem('.mask');
            if(position.row != -1 ){
                var top = k(window).scrollTop();
                foxkk.fadeOut('.mask',position.row,position.column,top,0);
            }
            foxkk.fadeIn('.mask',top);
        });
        return this;
    },
    'getFirstValidItem':function(element){
        var top = k(document).scrollTop();
        var position ={'row' : -1,'column':-1};
        var rows = Math.floor(parseFloat(top)/parseFloat(foxkk.mask.item.height));
        var temp = null;
        var flag = false;
        for(var i = rows;i < foxkk.mask.rows;i++){
            for(var j = 0;j < foxkk.mask.columns; j++){
                temp = foxkk.elements[this.prefix+element][i][j];
                if(temp.visible == 1) {
                    flag =true;
                    position.row = k(temp.item).attr('row');
                    position.column = k(temp.item).attr('column');
                    break
                };
            }
            if(flag)break;
        }
        return position;
    },
    'initLoad' : function(container){

    },
    '' : function(){

    },
    'keys' : function(object){

    },
};
