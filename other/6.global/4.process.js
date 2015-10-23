/**
 *{rss: 16121856, heapTotal: 9751808, heapUsed: 3934136 }
 * rss 进程常驻内存 resident set size
 * heapTotal 申请到的堆内存
 * heapUsed 使用的堆内存
 **/
console.log(process.memoryUsage());
//current workding direcoty 当前工作目录
console.log(process.cwd());
console.log(__dirname);
process.chdir('..');
console.log(process.cwd());
console.log(__dirname);







