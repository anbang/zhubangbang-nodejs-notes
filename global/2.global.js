var g = require('./1.global');// 类似于中文的script src=
console.log(a);
console.log(b);

/*
* __filename 当前文件的绝对路径,带文件名的
* __dirname 当前文件的相对路径
* 他们两个都是方法的参数，不是全局对象；
* */
console.log(__filename);
console.log(__dirname);
/**
 * exports 导出对象
 * require 函数
 * module 当前模块
 * __filename 当前文件的绝对路径
 * __dirname 当前文件的所在目录

 *//*

*/
/*(function (exports, require, module, __filename, __dirname) {
    console.log(a);
})*//*


process.kill(3564,"SIGTERM");*/
