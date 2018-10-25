const EventEmitter = require("events");
class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
    //es5函数谁调用，this就是谁
    console.log(a, b, this === myEmitter, this);
  // 打印:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});
myEmitter.on("event",(a,b)=>{
    console.log(a,b,this);//箭头函数this不会更改‘
})
myEmitter.emit('event', 'aaaa', 'bbbb');