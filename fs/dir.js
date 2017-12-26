let fs = require('fs');
let parentDir=__dirname;

// console.log(__dirname);  //文件的所在目录
// console.log(__filename); //文件的绝对路径

fs.mkdir(parentDir + '/test', (err) => {
    if (err) {
        console.error(err);
    }else {
        console.log("dir is ok");
    }
});

fs.readdir(parentDir + '/test', (err,info) => {
    if (err) {
        console.error(err);
    }else{
        console.log("info",info);
    }
});

/*fs.rmdir(parentDir + '/test', (err) => {
    if (err) {
        console.error(err);
    }
    console.log("dir is rm");
});*/

/*
fs.rename(parentDir+'/test',parentDir+'/modi1',function (err, info) {
    if (err){
        console.log(err)
    }else {
        console.log(info)
    }
});*/


/*
*

fs.constants.F_OK - path 文件对调用进程可见。 这在确定文件是否存在时很有用，但不涉及 rwx 权限。 如果没指定 mode，则默认为该值。
fs.constants.R_OK - path 文件可被调用进程读取。
fs.constants.W_OK - path 文件可被调用进程写入。
fs.constants.X_OK - path 文件可被调用进程执行。 对 Windows 系统没作用（相当于 fs.constants.F_OK）。
*
* */

fs.access(parentDir+'/test', fs.constants.F_OK | fs.constants.R_OK |fs.constants.W_OK | fs.constants.X_OK, (err) => {
    console.log(err ? 'no access!' : 'can find/read/write/x');
});


fs.stat(parentDir+'/dir.js', function (err,info) {
    if(err){
        console.log(err)
    }
    console.log(info)
})