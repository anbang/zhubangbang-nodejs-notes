### Global是node上不需要引用(require)，就能直接用的对象 ；

常用的api上下面的

- Buffer

- __dirname     ：文件所在目录
- __filename    ：访问该文件的绝对路径
- process

- console
- 定时器
    - setTimeout    / clearTimeout
    - setInterval   / clearIntervals
    
- require()
- module
- exports

### Buffer


### __dirname && __filename

- __dirname     ：文件所在绝对目录
- __filename    ：文件的绝对路径

console.log(__filename);

// /Users/broszhu/Documents/Github/zhubangbang-nodejs-notes/global/filename-dirname.js


console.log(__dirname);

///Users/broszhu/Documents/Github/zhubangbang-nodejs-notes/global


### console

- console.log()
- console.info()
- console.warn()
- console.error()
- console.time("str") && console.timeEnd("str")
- console.assert()  //打脸输出
- console.trace()   //堆栈跟踪；它会记录 被调用的跟踪位置

需求：把console的信息导出到txt文件中；

        node console.js 1>success.txt 2>error.txt
        
上面的代码上吧console.log的信息，正常的信息输出到success.txt文件中，而异常的错误则输出到error.txt
其中，1代表是正常的，而2代表则是异常的；如果你需要吧错误的和正常的信息全部输出到一个txt中；
需要下面这样；

        node console.js 1>all-log.txt 2>&1


console还有很多其它的api，可以输出了解下；

            Console {
              log: [Function: bound consoleCall],
              info: [Function: bound consoleCall],
              warn: [Function: bound consoleCall],
              error: [Function: bound consoleCall],
              dir: [Function: bound consoleCall],
              time: [Function: bound consoleCall],
              timeEnd: [Function: bound consoleCall],
              trace: [Function: bound consoleCall],
              assert: [Function: bound consoleCall],
              clear: [Function: bound consoleCall],
              count: [Function: bound consoleCall],
              countReset: [Function: bound countReset],
              Console: [Function: Console],
              debug: [Function: debug],
              dirxml: [Function: dirxml],
              table: [Function: table],
              group: [Function: group],
              groupCollapsed: [Function: groupCollapsed],
              groupEnd: [Function: groupEnd],
              markTimeline: [Function: markTimeline],
              profile: [Function: profile],
              profileEnd: [Function: profileEnd],
              timeline: [Function: timeline],
              timelineEnd: [Function: timelineEnd],
              timeStamp: [Function: timeStamp],
              [Symbol(counts)]: Map {} 
            }
