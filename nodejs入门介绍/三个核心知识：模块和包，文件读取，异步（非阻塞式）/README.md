三个核心知识：模块和包，文件读取，异步（非阻塞式）

#模块

模块；一个实现某些特定功能的文件，以实现模块化编程(类似jquery引用的)；

- 通过require(模块名)来引用模块；
 `require('./sum.js');//其中./是表示同级的；结果输出263;其中sum不写后缀.js也可以的`
- 模块中的功能（如：变量、函数）通过赋给exports对象的某个属性提供给调用者使用；
    `var sum=require('./sum');`
    `//sum.js文件中已经把sum函数赋给了exports.sum；而此时require('./sum')赋给了sum这个变量；所以sum这个变量上面有sum这个方法；`
    `console.log(sum.sum(1,2,23,3,4,5,6,3));//可以直接用过变量sum来调用sum.js文件中暴漏出来的sum方法；`

#包

#文件的操作

#Node.js 特性