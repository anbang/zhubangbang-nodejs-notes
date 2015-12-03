var fs = require('fs');
fs.writeFile('./128k.txt',new Buffer(129*1024));