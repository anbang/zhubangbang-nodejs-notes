# NodeJs学习笔记

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

# 学习步骤

网上看很多NodeJs的教程和文档，发现都比较乱，不系统，整理了一份适合我的步骤，用于梳理知识点；

## 第一阶段 NodeJs机制

NodeJs是一个自带模块化系统，基于事件驱动和异步I/O的服务端JS环境,采用错误优先的回调函数,用于同时返回错误和数据；

- Module - 模块
    - NodeJs 自带模块化系统，每个文件都被视为独立的模块
- Error - 错误 
    - NodeJs采用错误优先的回调函数,用于同时返回错误和数据
- Event 
    - NodeJs是一个基于事件驱动和异步I/O的服务端JS环境
    
## 第二阶段 NodeJs全局变量

NodeJs中全局变量的特性是 : `不需要声明(或引入模块)就可以直接使用的变量`，

但是 `不需要声明(或引入模块)就可以直接使用的变量`不一定是全局变量;

原因是 `NodeJs中每个文件都被视为独立的模块`，这是NodeJs的运行机制，虽然模块相关的变量不需要引入就可以直接使用，但是它们不属于全局变量；

学习NodeJs的API和JS差不多,JS里先看window上的属性；在NodeJs中先从Global入手，全局变量由下面这些

- global    - 全局变量
- console   - 控制台
- timer     - 定时器
- process   - 进程
- Buffer    - 缓冲器
    
## 第三阶段 全局变量相关工具库

### Buffer 相关模块

- stream            - `stream`   模块是一种在 Node.js 中处理流式数据的抽象接口
- readline          - `readline` 模块提供了一个接口，用于从可读流（如 `process.stdin`）读取数据，每次读取一行
- string_decoder    - `string_decoder` 模块提供了一个 API，用于把 Buffer 对象解码成字符串，但会保留编码过的多字节 UTF-8 与 UTF-16 字符

### process 相关模块

- child_process - `child_process`模块提供了衍生子进程的功能
- cluster       - `cluster`模块允许简单容易的创建共享服务器端口的子进程

## 第四阶段 其它工具库

### A: 常用工具 的模块

- util  - `Util` 模块主要用于支持 Node.js 内部 API 的需求，大部分实用工具也可用于应用程序与模块开发者

### B: 格式化 操作的模块

这些工具主要是做一些格式化操作的，在做前端开发中，会经常用到类似功能,比如处理`url`；

- url               - `Url`  模块提供了一些实用函数，用于 URL 处理与解析
- querystring       - `querystring` 模块提供了一些实用函数，用于解析与格式化 URL 查询字符串
- path              - `Path` 模块提供了一些工具函数，用于处理文件与目录的路径

### C: 系统文件 操作的模块

- fs    - `fs`模块提供了一些 API，用于以一种类似标准 POSIX 函数的方式与文件系统进行交互
- zlib  - `Zlib`模块提供通过 Gzip 和 Deflate/Inflate 实现的压缩功能

### D: 网络数据传输 的模块

- dns   - `dns` 域名解析相关的API
- net   - `net` 模块提供了创建基于流的 TCP 或 IPC 服务器(`net.createServer()`)和客户端(`net.createConnection()`) 的异步网络 API
- http  - `http`模块提供HTTP协议相关的API
- tls   - `tls` 模块是对安全传输层（TLS）及安全套接层（SSL）协议的实现，建立在OpenSSL的基础上
- https - `https`模块是 HTTP 基于 TLS/SSL 的版本
- dgram - `dgram`模块提供了 UDP 数据包 socket 的实现

### AA: 测试模块

- assert - `assert`模块提供了断言测试的函数，用于测试不变式

### BB: 加密解密 模块

- crypto - `crypto`模块提供了加密功能，包含对 `OpenSSL` 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装

### CC: 终端相关 的模块

- repl  - `repl` 模块提供了一种“读取-求值-输出”循环（REPL）的实现，它可作为一个独立的程序或嵌入到其他应用中。
- tty   - `tty`  模块提供了 `tty.ReadStream` 类和 `tty.WriteStream` 类。

### DD：底层相关 的模块
- vm    - `vm`  模块提供了一系列 API 用于在 V8 虚拟机环境中编译和运行代码
- v8    - `v8`  模块暴露了特定于V8版本内置到 Node.js 二进制文件中的API
- os    - `os`  模块提供了一些操作系统相关的实用方法