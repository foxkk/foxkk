/**
 * +----------------------------------------------------------------------
 * | @[author   ] : foxkk
 * +----------------------------------------------------------------------
 * | @[describe ] : 对象和类
 * +----------------------------------------------------------------------
 * | @[datatime ] : 2017/11/13 22:47
 * +----------------------------------------------------------------------
 * | @[contact  ] : QQ876809986
 * +----------------------------------------------------------------------
 * | @[copyright] : foxkk@copyright
 * +----------------------------------------------------------------------
 **/
function  Range(from,to){
    this.from = from;
    this.to = to;
    this.__proto__.count = this.__proto__.count+1;
    this.include = function(value){
        if(value >= this.from && value <= this.to){
            return 1;
        }else{
            return -1;
        }
    }
}
Range.prototype.count= 0;
Range.prototype.foreach= function(){
    for(var k = this.from ; k <= this.to;k++){
        console.log('k : ' +k);
    }
    return true;
}
var range01 = new Range(1,10);
console.log('range01 count : '+range01.count);
console.log(range01.include(2));
var range02 = new Range(1,5);
console.log(range02.include(9));
console.log('range01 count : '+range01.__proto__.count);
console.log('range02 count : '+range02.__proto__.count);
var range03 = new Range(1,5);
console.log('range03 count : '+range03.__proto__.count);
/*
*
* if(element.visible == 2 || row < 0 ||column  < 0 || column >=foxkk.mask.columns || row >=foxkk.mask.rows ) return ;
        element.item.animate({'opacity' : 0},(foxkk.duration+time)*1000);
        element.item.visible =2;

if(row-1 >=0 && column >=0){
    var temp = foxkk.elements[this.prefix+parent][row-1][column];
    //console.log('item_top : ' +temp.position.top + ' width : '+ foxkk.mask.item.width + ' sum : '+(temp.position.top+foxkk.mask.item.width)+' doc_top : '+foxkk.top);
    if(temp.visible == 1 && ))

}

if(row >=0 && column-1 >=0){
    var temp = foxkk.elements[this.prefix+parent][row][column-1];
    if(temp.visible == 1)

}

if(row >=0 && column+1 < foxkk.mask.columns){
    var temp = foxkk.elements[this.prefix+parent][row][column+1];
    if(temp.visible == 1)

}

if(row + 1 < foxkk.mask.rows && column >=0){
    var temp = foxkk.elements[this.prefix+parent][row+1][column];
    console.log('item_top : ' +temp.position.top + ' width : '+ foxkk.mask.item.width + ' sum : '+(temp.position.top+foxkk.mask.item.width)+' doc_top : '+foxkk.top);
    if(temp.visible == 1 && )

}
* */