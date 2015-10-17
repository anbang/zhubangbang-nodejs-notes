/**
 * id ID
 * exports 导出对象
 * parent 它依赖的模块
 * filename 模块的文件名
 * loaded 是否加载成功
 * children 被哪些模块所依赖
 * path
 */
var a = require('./a');
/*
var a = require('../8.module/a');
*/

//console.log(module);
//{key:value}
//{'模块的绝对路径':{module}}
//delete require.cache[require.resolve('./b')];
//console.log(require.cache[require.resolve('./b')].children[0]);
console.log('b',require.cache);
