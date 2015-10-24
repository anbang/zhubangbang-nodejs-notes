/**
 * nexttick
 * 在事件循环的下一次调用
 *调整执行顺序
 **/

function say1(){console.log('hello1');}
function say2(){console.log('hello2');}

setTimeout(say1,0);//优先级低
process.nextTick(say2);//优先级别高,下一个使用周期
console.log('next');

var count = 1;
process.nextTick(function(){
    count ++;
});
console.log(count);
console.log(count);
console.log(count);
