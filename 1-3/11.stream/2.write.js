/**
 * 写入流 把数据写到文件里面去
 *
 */
var fs = require('fs');
var ws = fs.createWriteStream('./write.txt');
for(var i=0;i<1000000;i++){
    var flag = ws.write(i+"");
    //console.log(flag);
}
ws.on('drain',function(){
    console.log('消化完了');
});


function copy(src,desc){

}