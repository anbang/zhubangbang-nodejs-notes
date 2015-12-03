//var Readable = require('stream').Readable;
var util = require('util');
var EventEmitter = require('events');

util.inherits(Counter,EventEmitter);
/**
 * 无论实现何种流，模式一样
 * 从1递增到10发射数字，直到结束
 * @constructor
 */
function Counter(){
    EventEmitter.call(this);
    this._max = 10;//最大值
    this._pos = 1;//当前值
}
Counter.prototype._read = function(){
    var i = this._pos++;
    if(i>this._max)
        return null;
        //this.push(null);//push null的时候表示结束，会触发end事件
    else{
        return i+"";
        //this.push(new Buffer(i+""));// 会触发data事件
    }
}
// 先开始注册监听 -> 安排异步任务(当所有的监听 完成后执行)->再执行异步任务
var counter = new Counter();
//当添加任何的监听 的时候触发
counter.on('newListener',function(event){
    console.log(event == 'data');
    if(event == 'data'){
        var self = this;
        process.nextTick(function(){
            var result = null;
            do{
                result = self._read();
                if(result){
                    self.emit('data',result);
                }else{
                    self.emit('end');
                }
            }while(result != null);
        })
    }
});
//数据从哪来
counter.on('data',function(data){
    console.log(data.toString());
});
//何时结束
counter.on('end',function(){
    console.log('end');
});