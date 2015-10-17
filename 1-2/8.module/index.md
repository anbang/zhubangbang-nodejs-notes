#模块
##JS不足
- js没有模块系统，不支持封闭的作用域和依赖管理
- 没有标准库，没有文件系统和IO流API
- 也没有包管理系统
##commjs规范
###优点
封装功能，封闭作用域，可能解决依赖问题
工作效率更高，重构方便
##commonjs in node
在node.js 里，模块划分所有的功能，每个JS都是一个模块
实现require方法 
npm 实现了模块的自动加载和安装依赖
#定义模块
```
(function(exports,require,module,__filename,__dirname){
//////////////////
exports = module.exports;{}
exports.name = 'zfpx';
exports = {name:'zfpx'};
return module.exports;
})
```
#模块的加载策略
##分类
- 原生模块 http path fs util events 编译成二进制 加载速度最快
- 文件模块 在硬盘的某个位置 非常慢 
##如何查找文件模块
###文件模块分类
- js 脚本文件 需要先读入内存再运行
- json 文件 fs 读入内存 转化成JSON对象
- node 二进制文件 可以直接使用
###查找的过程
- 如果参数是相对路径的话如何查找
- 如果不是路径的话
##从全局路径 进行加载
NODE_PATH 用;分隔的路径串
$HOME/.node_modules
