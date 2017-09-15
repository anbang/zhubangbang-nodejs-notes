/**
 * 同步代码>nextTick>setImmediate>定时器之类的异步代码
 **/

var count = 0;
//后执行，比nexttick级别低
setImmediate(function(){
    console.log(count);
});
//先执行
process.nextTick(function(){
    count ++;
});


