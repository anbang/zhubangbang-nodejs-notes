const events = require("events");
class Emitter extends events{};
const emitter = new Emitter();
emitter.on("error",(err)=>{
    console.error(err);
})
emitter.emit("error",new Error("错误消息"))
