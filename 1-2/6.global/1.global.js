//console.log(global);
//console.log(process == global.process);
//当前的脚本
console.log(__filename);
//当前脚本所有的目录
console.log(__dirname);

global.name = 'broszhu';
var age = 6;
console.log(name,age);

/*
(function(__dirname,__filename){
    //xxxxxxx
})*/
