

/*console.log('hello');//调用的就是process.stdout.write
process.stdout.write('hello');*/

console.log('log');
console.error('error');//出错的话error
console.info('info');//调试信息info
console.warn('warn');

//可以输对象
console.log({name:'zfpx'});//调用下面的方法
console.log(JSON.stringify({name:'zfpx'}));
console.log('%j',{name:'zfpx'});
//可以输入数学表达式
console.log(1+1);
//可以输入逻辑表达式
console.log(1==1);

//下面是统计时间的
console.time('while循环统计时间');
var i=0;
while(i++<50000000){
}
console.timeEnd('while循环统计时间');

//查看被哪些模块调用
console.trace('trace');

//测试,assert如果是正确什么都不做，如果是false则红色报错
console.assert(1==1);
console.assert(1==2);


