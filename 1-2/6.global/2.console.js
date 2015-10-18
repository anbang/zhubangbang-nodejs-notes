/**
 * 控制台是一个界面
 *
 */
//log 标准输出
console.log('this is a log');
//重定向到文件里
console.log('%s',"broszhu");//string
console.log('%s',{name:'broszhu'});//string
console.log('%j',{name:'broszhu'});//json
console.log('%d',"broszhu");//把参数转化为数字

console.log(1+1);//四则运算
var a= 1,b=2;
console.log(a+b); //变量相加
console.log(5===3);//计算布尔值

console.info('info');
console.warn('warn');
console.error('error');

var person = {
    name:'broszhu',
    age:6
}
console.log(JSON.stringify(person));

console.dir(person);//查看对象内容并输出
console.trace('trace');


