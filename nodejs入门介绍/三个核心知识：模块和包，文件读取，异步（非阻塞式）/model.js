var sum=require('./sum');
//sum.js文件中已经把sum函数赋给了exports.sum；而此时require('./sum')赋给了sum这个变量；所以sum这个变量上面有sum这个方法；
console.log(sum.sum(1,2,23,3,4,5,6,3));//可以直接用过变量sum来调用sum.js文件中暴漏出来的sum方法；