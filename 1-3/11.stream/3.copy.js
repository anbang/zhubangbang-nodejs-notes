var fs=require("fs");
copy("./a.text","./b.text")
//Stream.prototype.pipe
function copy(src,desc){
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(desc);
    rs.pipe(ws);
}
/**
 * 1. on('data');
 * 2. ws.write  flag true false pause
 * 3. ws.on('drain'); resume
 */
