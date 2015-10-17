var util = require('util');
/**
 * 这是一个基于对象间原型继承的函数。
 *
 **/
console.log(util.inspect({name:'zfpx'}));

console.log(util.isArray([]));
console.log(util.isRegExp(/\d/));
console.log(util.isDate(new Date()));
console.log(util.isError(new Error));