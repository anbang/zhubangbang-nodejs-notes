# Nodejs学习笔记

学习nodejs的api和js差不多；js里先看window上的属性；在nodejs中先从global入手；

** 什么是nodejs **

- Nodejs是js语言的服务器运行环境
- Node提供大量工具库，使用JS可以调用操作系统基本的API；
- Node内部采用Google公司的V8引擎，作为JS语言的解释器，速度非常快；
- Node是一个基于事件驱动和异步I/O的服务端JS环境（JS所用的环境不一样，决定权限不一样）；

** WEB开发 **

- 管理：npm、gulp、 
- 项目：express、ejs/jade、socket.io、nodeppt、restify 
- 数据：mysql、mongoose、redis 
- 工具：moment、connect、log4js 
- 异步：async、bluebird 
- 部署：forever、pm2、nodemon 
- 测试：jssmine、karma、protrector 
- 内核：cluster 
- 博客：hexo、ghost 

** 学习资源 **

- NODE文档：http://nodejs.cn/api/ 
- stackOverflow：https://stackoverflow.com/questions/tagged/node.js

### Api总结
- repl - 交互式解释器
- http - HTTP
- https - HTTPS
- global - 全局变量

- events - 事件
- module - 模块
- Buffer - 缓冲器
- fs - 文件系统
- stream - 流


- path - 路径
- process - 进程
- child_process - 子进程


- assert - 断言

- cluster - 集群
- console - 控制台
- crypto - 加密
- dgram - 数据报
- dns - 域名服务器
- Error - 异常

- net - 网络
- os - 操作系统

- querystring - 查询字符串
- readline - 逐行读取

- string_decoder - 字符串解码器
- timer - 定时器
- tls - 安全传输层
- tty - 终端
- url - 网址
- util - 实用工具
- v8 - V8引擎
- vm - 虚拟机
- zlib - 压缩