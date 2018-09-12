const fs = require("fs");
/*
    读取文件的状态；
    fs.stat(path[, options], callback)
        path  <string> | <Buffer> | <URL>
        options <Object>
            bigint
        callback <Function>
            err <Error>
            stats <fs.Stats>

        callback有两个参数；err，stats；stats是一个fs.Stats对象；
        如果发生错误err.code是常见错误之一；
    不建议在调用 fs.open() 、fs.readFile() 或 fs.writeFile() 之前使用 fs.stat() 检查一个文件是否存在。
    作为替代，用户代码应该直接打开/读取/写入文件，当文件无效时再处理错误。
    如果要检查一个文件是否存在且不操作它，推荐使用 fs.access()。
 */
fs.stat("./dir.js",function(err,stats){
    if(err){
        console.log(err);//如果存在null
        return
    }
    /*
    状态有
    {
      dev: 1918120247,              //包含文件的设备的数值型标识
      mode: 33206,                  //表示文件类型与模式的位域
      nlink: 1,                     //文件的硬链接数量
      uid: 0,                       //文件拥有者的数值型用户标识
      gid: 0,                       //拥有文件的群组的数值型群组标识
      rdev: 0,                      //如果文件是一个特殊文件，则返回数值型的设备标识
      blksize: undefined,           //文件系统用于 I/O 操作的块大小
      ino: 281474976741650,         //文件系统特定的文件索引节点数值
      size: 1529,                   //文件的字节大小
      blocks: undefined,            //分配给文件的块的数量
      atimeMs: 1536661189009.976,           //表示文件最后一次被访问的时间戳
      mtimeMs: 1536661189009.976,           //表示文件最后一次被修改的时间戳
      ctimeMs: 1536661189009.976,           //表示文件最后一次被改变的时间戳
      birthtimeMs: 1536661189009.976,       //表示文件的创建时间戳
      atime: 2018-09-11T10:19:49.010Z,      //表示文件最后一次被访问的时间
      mtime: 2018-09-11T10:19:49.010Z,      //表示文件最后一次被修改的时间
      ctime: 2018-09-11T10:19:49.010Z,      //表示文件最后一次被改变的时间
      birthtime: 2018-09-11T10:19:49.010Z   //表示文件的创建时间
    }
    * */
    console.log(stats);//返回状态
    console.log(stats.size);//获取文件的大小；
    console.log(stats.atime.toLocaleString());//获取文件最后一次访问的时间；
    console.log(stats.birthtime.toLocaleString());//文件创建的时间；

    /*
    方法有
      _checkModeProperty: [母鸡啊],
      isDirectory: [是否文件系统目录],
      isFile: [是否普通文件],
      isBlockDevice: [是否块设备],
      isCharacterDevice: [是否字符设备],
      isSymbolicLink: [是否符号链接],
      isFIFO: [是否先进先出的管道],
      isSocket: [是否socket]
    * */
    console.log(stats.__proto__);//有的方法
    console.log(stats.isFile());//判断是否是目录；是返回true；不是返回false；
    console.log(stats.isDirectory());//判断是否是文件；是返回true、不是返回false；
});