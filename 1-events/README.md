**events - 事件触发器**

大多数 Node.js 核心 API 构建于惯用的`异步事件驱动架构`，其中某些类型的对象（又称触发器，Emitter）会触发命名事件来调用函数（又称监听器，Listener）。

例如，`net.Server` 会在每次有新连接时触发事件，`fs.ReadStream` 会在文件被打开时触发事件，`stream`会在数据可读时触发事件。 

`所有能触发事件的对象都是 EventEmitter 类的实例`。 这些对象有一个 `eventEmitter.on()` 函数，用于将一个或多个函数绑定到命名事件上。 事件的命名通常是驼峰式的字符串。

当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都会被同步地调用。

例子，一个简单的 EventEmitter 实例，绑定了一个监听器。 

`eventEmitter.on()` 方法用于注册监听器，

`eventEmitter.emit()` 方法用于触发事件。

```javascript
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('触发事件');
});
myEmitter.emit('event');
```
重点如下

- 传参数与 `this` 到监听器
- 异步 VS 同步
- 事件只处理一次
- `error` 事件
- EventEmitter 类

## 传参数与 `this` 到监听器
es5函数里谁执行`this`就是谁（`this 关键词会被指向监听器所绑定的 EventEmitter 实例`）

es6里`this`为空对象；

## 异步 VS 同步
`EventEmitter`会按照监听器注册的顺序同步地调用所有监听器。 

所以必须确保事件的排序正确，且避免竞态条件；

可以使用 `setImmediate()` 或 `process.nextTick()` 切换到异步模式

## 事件只处理一次

`myEmitter.once()`
```javascript
const Events=require("events");
class MyEmitter extends Events{};
myEmitter = new MyEmitter;
let m = 0;
myEmitter.once("event",()=>{
    console.log(++m);
});
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
```


## `error` 事件

如果没有为 'error' 事件注册监听器，则当 'error' 事件触发时，会抛出错误、打印堆栈跟踪、并退出 Node.js 进程。

```javascript
const events = require("events");
class Emitter extends events{};
const emitter = new Emitter();
emitter.on("error",(err)=>{
    console.error(err);
})
emitter.emit("error",new Error("错误消息"))
```

## EventEmitter 类

后续