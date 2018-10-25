const Event = require("events");
class MyEmitter extends Event{};

const myEmitter = new MyEmitter();
myEmitter.on('event', (i) => {
  console.log(`enent:${i}`)
  setImmediate(() => {
    console.log(`i:${i}`);
  });
});
for(let i = 0;i<10;i++){ 
  myEmitter.emit('event', i);
}