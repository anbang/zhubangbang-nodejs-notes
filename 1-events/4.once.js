const Events=require("events");
class MyEmitter extends Events{};
myEmitter = new MyEmitter;
let m = 0;
myEmitter.once("event",()=>{
    console.log(++m);
})
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");