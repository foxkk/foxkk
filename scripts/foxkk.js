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
    foxkk.init().initResume().fullScreen('.cover').initMask('.mask',8);
});
window.foxkk = {
    'prefix':'items',
    'top' : 0,
    'left': 0,
    'rem' : 0,
    'elements' : [],
    'duration' : 3,
    'base_width' : 320,
    'valid_width' : 0,
    'doc_height':0,
    'base_font_size' : 12,
    'max_width':960,
    'max_height' :1024,
    'min_width' : 320,
    'min_height' : 480,
    'device_width' : 0,
    'device_height' : 0,
    'words':[
        '自信','乐观','细心','善良','诚信',
        '谈定','创新','责任','风度','帅气',
        '年轻','梦想','感恩','好学','理智',
        '豁达','执着','宽容','激情','热情',
        '爱心','直率','斗志','率真','倾听'
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
        this.rem = Math.ceil( this.valid_width*this.base_font_size/this.base_width);
        this.rem = this.rem % 2 == 0 ? this.rem : this.rem + 1;
        html.style.fontSize = this.rem + 'px';
        this.top = k(document).scrollTop();

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
            foxkk.init();
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
    'initCover':function(element){
        /*15--8*/
        var columns = 8;
        var animations = ['animation01','animation02'];

        var datas = new Array();
            for(var i = 0;i<rows;i++){
                datas[i] = new Array();
            }
            datas[3][5] = {'text':'求'};
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
    'initMask' : function(parent,columns){
        foxkk.mask = {};
        foxkk.mask.item={};
        foxkk.mask.columns = columns || 8;
        foxkk.mask.item.width = foxkk.mask.item.height = (this.valid_width/columns).toFixed(6);
        foxkk.mask.rows = Math.ceil(this.doc_height/foxkk.mask.item.width);

        var p_item = k(parent);
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
                temp.click(function(){
                     console.log('row : '+k(this).attr('row')+'  column : '+k(this).attr('column'));
                     foxkk.fadeOut(parent,k(this).attr('row'),k(this).attr('column'),0);
                });
                items[r][c] = {
                    'item':temp,'color':color_index,
                    'word':word_index,'visible':1, //1 :可见 2 : 隐藏
                    'position':{'top':top,'left':left}
                };
            }
        }
        this.elements[this.prefix+parent] = items;
    },
    'fadeOut' : function(parent,row,column,time){
        if(row < 0 || row >= foxkk.mask.rows || column <0 || column >= foxkk.mask.columns) return this;
        var element = foxkk.elements[this.prefix+parent][row][column];
        if(
            element.item.visible == 2 ||
            ((parseFloat(element.position.top) + parseFloat(foxkk.mask.item.width)) <= parseFloat(foxkk.top)) ||
            (parseFloat(element.position.top) >= parseFloat(foxkk.top) + parseFloat(foxkk.device_height))
        )return this;
        element.item.animate({'opacity':0},(foxkk.duration+time)*1000);
        time = time + 0.5;
        element.item.visible =2;
        foxkk.fadeOut(parent,row-1,column,time);/*上*/
        foxkk.fadeOut(parent,row,column-1,time);/*左*/
        foxkk.fadeOut(parent,row,column+1,time);/*右*/
        foxkk.fadeOut(parent,row+1,column,time);/*下*/
        return this;
    },
    'fadeIn' : function(){

    },
    'initLoad' : function(container){

    },
    '' : function(){

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
