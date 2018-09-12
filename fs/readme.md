fs文件系统；

**引入说明**：通过 `require('fs')` 使用该模块。 

**所有的方法都有异步和同步的形式**；异步方法的最后一个参数都是一个回调函数。 传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。 

如果操作成功完成，则第一个参数会是 null 或 undefined。

首先查看下fs的属性和方法；

JS中的代码（1.fs.hello.js内）

```javascript
const fs = require ('fs');
for (const key in fs){
    if(key.indexOf('Sync')<0){
        console.log(key);
    }
}
```

node执行后,返回结果如下（为方便阅读，有部分修改）：

```
//类
Stats
ReadStream
WriteStream
FileReadStream
FileWriteStream

//方法 - 返回值继承类

//Stats 类
stat
fstat
lstat
watchFile

//ReadStream 类
createReadStream //方法只有同步的

//WriteStream 类
createWriteStream //方法只有同步的

//方法，有些是继承上面的类

constants
access
exists
readFile
close
open
read
write
rename
truncate
ftruncate
rmdir
fdatasync
fsync
mkdir
readdir


readlink
symlink
link
unlink
fchmod
chmod
fchown
chown
_toUnixTimestamp
utimes
futimes
writeFile
appendFile
watch

unwatchFile
realpath
mkdtemp
copyFile


```

# 类

很多方法的返回值都是属于该类型

## Stats

该实力返回的对象提供了一个文件的信息,以下的方法以及同步方法均返回该类型

### fs.stat(path[, options], callback) 统计

形参如下

- path <string> | <Buffer> | <URL>
- options <Object>
    - bigint <boolean> Whether the numeric values in the returned fs.Stats object should be bigint. Default: false.
- callback <Function>
    - err <Error>
    - stats <fs.Stats>

返回的`stats`有状态和方法

状态是 ` console.log(stats);//返回状态`

```
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
```

方法是 `console.log(stats.__proto__);//有的方法`

```
_checkModeProperty: [母鸡啊],
isDirectory: [是否文件系统目录],
isFile: [是否普通文件],
isBlockDevice: [是否块设备],
isCharacterDevice: [是否字符设备],
isSymbolicLink: [是否符号链接],
isFIFO: [是否先进先出的管道],
isSocket: [是否socket]
```

### fs.lstat()

形参和 `stat` 一样

网上有说 `lstat()` 与 `stat()` 基本相同, 区别在于，如果 path 是链接，读取的是链接本身，而不是它所链接到的文件；但是为测试好像并不是，可能是姿势不对；

### fs.fstat()

- fd <integer> 这个值不同
- options <Object>
    - bigint <boolean>
- callback <Function>
    - err <Error>
    - stats <fs.Stats>

和status一样的；只是用法不同，可以在`fs.open的回调函数中使用` ,参见 `fs/Stats_fs.fstat.js`文件

### fs.watchFile(filename[, options], listener)
- filename <string> | <Buffer> | <URL>
- options <Object>
    - persistent <boolean> Default: true
    - interval <integer> Default: 5007
- listener <Function>
    - current <fs.Stats>
    - previous <fs.Stats>


监视 filename 的变化。 回调 listener 会在每次访问文件时被调用。

options 参数可被省略。 如果提供的话，它应该是一个对象。 options 对象可能包含一个名为 persistent 的布尔值，表明当文件正在被监视时，进程是否应该继续运行。 options 对象可以指定一个 interval 属性，表示目标应该每隔多少毫秒被轮询。 默认值为 { persistent: true, interval: 5007 }。

listener 有两个参数，当前的状态对象和以前的状态对象：

```javascript
fs.watchFile('message.text', (curr, prev) => {
  console.log(`the current mtime is: ${curr.mtime}`);
  console.log(`the previous mtime was: ${prev.mtime}`);
});
```
如果你想在文件被修改而不只是访问时得到通知，则需要比较 curr.mtime 和 prev.mtime。 ,参见 `fs/Stats_fs.fstat.js`

注意：fs.watch() 比 fs.watchFile() 和 fs.unwatchFile() 更高效。 可能的话，应该使用 fs.watch() 而不是 fs.watchFile() 和 fs.unwatchFile()。

## ReadStream

成功调用 fs.createReadStream() 会返回一个新的 fs.ReadStream 对象,该对象都是可读流。


## WriteStream

## FileReadStream
## FileWriteStream

# 方法

#### 目录的操作

	//创建目录
    mkdir(path, [mode], callback),

	//删除空目录
    rmdir(path, callback),

	//读取目录
    readdir(path, callback(err, files)),				//err错误对象，
														  files数组，存放读取到的目录中的所有文件名

	//移动/重命名 文件或目录
    rename(oldPath, newPath, callback(err)),

	//判断文件或目录是否存在

    exists(),											//废弃的: 使用 fs.stat() 或 fs.access() 代替
    stat(path, callback),								//查看文件与目录的信息，文件大小，创建时间等信息
    fs.access(path[, mode], callback),					//如果要检查一个文件是否存在且不操作它使用本方法，
														 配合 F_OK / R_OK ...

#### 修改 


	//复制
    copyFile(src, dest[, flags], callback),

	//修改文件访问和修改时间
    utimes(path, atime, mtime, callback),
    futimes(fd, atime, mtime, callback),

	//修改文件或目录的操作权限
    chmod(path, mode, callback),
    fchmod(fd, mode, callback),

	//写入文件
    write(fd, buffer, offset, length, position, callback),
    writeFile(filename,data,[options],callback),
    appendFile(filename,data,[options],callback),



#### 查找

	//查看文件与目录的是否存在

	//查看文件与目录的信息

    fstat(path, callback),
    lstat(path, callback),


	//读取文件
    read(fd, buffer, offset, length, position, callback),
    readFile(filename,[options],callback),




	//打开文件
    fs.open(filename, flags, [mode], callback)				//

	//关闭
    close(fd),
	






	//刷新缓存区
    fsync(fd, [callback]),





####  监视 
	//监视文件
    watchFile(filename[, options], listener),//无Sync

	//取消监视文件
    unwatchFile(filename[, listener]),//无Sync

	//监视文件或目录
    watch(filename[, options][, listener]),//无Sync

####  流操作

    ReadStream:         "",//流读取	无Sync
    createReadStream(path[, options]),//创建读取流	无Sync
    FileReadStream:     "",//无Sync

    WriteStream:        "",//流写入 无Sync
    createWriteStream(path[, options]),//创建写入流 无Sync
    FileWriteStream:    ""//无Sync

    truncate(path[, len], callback),
    ftruncate(fd[, len], callback),
    fdatasync(fd, callback),

    readlink(path[, options], callback),
    symlink(target, path[, type], callback),
    link(existingPath, newPath, callback),
    unlink(path, callback),

    chown(path, uid, gid, callback),
    fchown(fd, uid, gid, callback),
    _toUnixTimestamp: "[Function: toUnixTimestamp]",//无Sync

    realpath(path[, options], callback),
    mkdtemp(prefix[, options], callback),



# 

**  x **


# 方法部分******************************************** 


### 目录操作

** fs.mkdir 创建目录 ** 

参数如下

 * path, 被创建目录的完整路径及目录名；比如 ：__dirname + '/test'
 * [mode], 目录权限，默认0777
 * [callback(err)], 创建完目录回调函数,err错误对象


	fs.mkdir(__dirname + '/test', (err) => {
	    if (err) {
	        console.error(err);
	    }
	    console.log("dir is ok");
	});

如果文件存在返回结果,EEXIST是Error EXIST 的缩写,EXIST 是“存在”的意思

	{ 
		Error: EEXIST: file already exists, mkdir 'E:\github\zhubangbang-nodejs-notes\fs\test'
	 	errno: -4075,
	  	code: 'EEXIST',
	  	syscall: 'mkdir',
	  	path: 'E:\\github\\zhubangbang-nodejs-notes\\fs\\test' 
	}

** fs.rmdir 删除目录 ** 

	fs.rmdir(__dirname + '/test', (err) => {
	    if (err) {
	        console.error(err);
	    }
	    console.log("dir is rm");
	});

如果文件不存在，返回结果,ENOENT 表示资源没有找到；

	{ 
		Error: ENOENT: no such file or directory, rmdir 'E:\github\zhubangbang-nodejs-notes\fs\test'
		errno: -4058,
	  	code: 'ENOENT',
	  	syscall: 'rmdir',
	  	path: 'E:\\github\\zhubangbang-nodejs-notes\\fs\\test' 
	}

** fs.rmdir 读取目录内有哪些文件 ** 

如果文件夹内没有文件，返回空数组;

fs.readdir(__dirname + '/test', (err,info) => {
    if (err) {
        console.error(err);
    }
    console.log("info",info);//info [ 'demo.jpg', 'demo1.jpg', 'dir.js', 'fs.js' ]
});

** fs.rename 修改文件名字 ** 

完成回调只有一个可能的异常参数。

	fs.rename(parentDir+'/test1',parentDir+'/modi',function (err) {
	    if (err){
	        console.log(err)
	    }
	});

如果修改后的文件夹已经存在了，会报错 EPERM ，

	{ 
	  Error: EPERM: operation not permitted, rename 'E:\github\zhubangbang-nodejs-notes\fs\test' -> 'E:\github\zhubangbang-nodejs-notes\fs\modi'
	  errno: -4048,
	  code: 'EPERM',
	  syscall: 'rename',
	  path: 'E:\\github\\zhubangbang-nodejs-notes\\fs\\test',
	  dest: 'E:\\github\\zhubangbang-nodejs-notes\\fs\\modi' 
	}

** fs.access 查看文件/文件夹权限 **

不建议在调用 fs.open() 、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查一个文件的可访问性。 

如此处理会造成紊乱情况，因为其他进程可能在两个调用之间改变该文件的状态。 

作为替代，用户直接使用fs.open() 、 fs.readFile() 或 fs.writeFile() ，当处理出错了，再根据 err.code 来对应处理，错误码可能有 'EEXIST' 'ENOENT'。

fs.access(path[, mode], callback),其中 mode 可选下面

fs.constants.F_OK - path 文件对调用进程可见。 
					这在确定文件是否存在时很有用，但不涉及 rwx 权限。 如果没指定 mode，则默认为该值。
fs.constants.R_OK - path 文件可被调用进程读取。
fs.constants.W_OK - path 文件可被调用进程写入。
fs.constants.X_OK - path 文件可被调用进程执行。 对 Windows 系统没作用（相当于 fs.constants.F_OK）。


	fs.access(parentDir+'/test', fs.constants.F_OK | fs.constants.R_OK |fs.constants.W_OK | fs.constants.X_OK, (err) => {
	    console.log(err ? 'no access!' : 'can find/read/write/x');
	});

** fs.stat 查看文件/文件夹信息 **

	fs.stat(parentDir+'/mod2i', function (err,info) {
	    if(err){
	        console.log(err)
	    }
	    console.log(info)
	})

信息如下

	Stats {
	  dev: 633774,
	  mode: 16822,
	  nlink: 1,
	  uid: 0,
	  gid: 0,
	  rdev: 0,
	  blksize: undefined,
	  ino: 6192449488036543,
	  size: 0,
	  blocks: undefined,
	  atime: 2017-11-15T03:26:10.645Z,
	  mtime: 2017-11-15T03:26:10.645Z,
	  ctime: 2017-11-15T03:31:23.689Z,
	  birthtime: 2017-11-15T03:22:44.684Z }



### 文件操作 **********************************************

** fs.access 查看文件与目录的是否存在 **

如果要检查一个文件是否存在且不操作它使用本方法

	fs.access('demo.jpg',fs.constants.R_OK | fs.constants.W_OK| fs.constants.F_OK| fs.constants.X_OK,(err,result)=>{
	    console.log(err ? 'no access!' : 'can read/write');
	    console.log(fs.constants.R_OK | fs.constants.W_OK| fs.constants.F_OK| fs.constants.X_OK);
	});

不建议在调用 fs.open() 、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查一个文件的可访问性。 如此处理会造成紊乱情况，因为其他进程可能在两个调用之间改变该文件的状态。 

作为替代，用户代码应该直接打开/读取/写入文件，当文件无法访问时再处理错误。


不推荐的写法

	fs.access(__dirname + '/json.js', (err) => {
	    if (!err) {
	        console.error(__dirname + '/json.js'+'存在');
	    }
	
	    fs.open(__dirname + '/json1.js', 'wx', (err, fd) => {//'wx' - 类似 'w'，但如果 path 存在，则失败。
	        if (err){
	            console.log(err);
	        }
	        console.log(fd+"sssss");
	    });
	});


推荐的写法


	fs.open(__dirname + '/json1.js', 'wx', (err, fd) => {
	    if (err) {
	        //如果存在
	        if (err.code === 'EEXIST') {
	            console.error('json.js already exists');
	            return;
	        }
	
	        throw err;
	    }
	    console.log(fd+"文件不存在，所以新建了一个");
	});

推荐的例子更好，因为它们直接使用文件并处理任何错误，通常，仅在文件不会被直接使用时才检查一个文件的可访问性，例如当它的可访问性是来自另一个进程的信号

 ** fs.stat 查看文件与目录的信息 **

返回是一个描述文件信息的对象


	fs.stat(__dirname + '/json.js', (err, result) => {
	    if (err) {
	        console.error(err);
	    }
	    console.log(result);
	});

返回格式如下

	{
	  dev: 633774,
	  mode: 33206,
	  nlink: 1,
	  uid: 0,
	  gid: 0,
	  rdev: 0,
	  blksize: undefined,
	  ino: 12666373952308664,
	  size: 72,
	  blocks: undefined,
	  atimeMs: 1508896601962.9077,
	  mtimeMs: 1508896601965.908,
	  ctimeMs: 1508896620292.9563,
	  birthtimeMs: 1508896559923.5034,
	  atime: 2017-10-25T01:56:41.963Z,
	  mtime: 2017-10-25T01:56:41.966Z,
	  ctime: 2017-10-25T01:57:00.293Z,
	  birthtime: 2017-10-25T01:55:59.924Z 
	}

 ** fs.open 打开文件 **

 fs.open(filename, flags, [mode], callback);

- filename, 必选参数，文件名
- flags, 操作标识，如"r",读方式打开
- [mode],权限，如777，表示任何用户读写可执行
- callback 打开文件后回调函数，参数默认第一个err,第二个fd为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄


	fs.open(__dirname + '/json.js', 'r' , "0666", (err, fd) => {
	    console.log(err,fd)
	});