/**
 * 1.readfile writefile做文件做为一个整体
 * 2.read write
 * 3.有些时候我们只注意是否有数据，以及有数据的时候如何处理?流
 * 4.流是一级有序，而且有起点和终点的数据手段。
 * 网络中传输数据的时候，先将文件转成二进制的字节数据，
 * 再经过网络传输到达服务器端，服务器再转成对应的文件。
 */

/**
 * 流的分类
 * 可读流 可以从中流出字节内容
 * 可写流 可以把字节写入流中
 **/
/**
 * 继承 Readable
 * 继承 EventEmitter
 * @type {exports|module.exports}
 */
//Readable
var fs = require('fs');
var rs = fs.createReadStream('128k.txt');
rs.on('open',function(){
    console.log('文件打开了');
});

//只有当监听了data事件之后才开始真正读取
rs.on('data',function(data){
    //console.log('喂饭');
    rs.pause();//先另喂了            暂停流的发射事件 关掉开关
    setTimeout(function(){
        console.log('咽下去了');
        rs.resume();//要求再喂一口     重新开始恢复 读取 打开开关
    },1000);
});
rs.on('end',function(){
    console.log('文件内容读取完毕');
});
rs.on('close',function(){
    console.log('文件关闭');
});
rs.on('error',function(err){
    console.log(err);
});