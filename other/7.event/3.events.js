
function Event(name){
  this.name = name;
  this._events = {};
}
//注册事件
Event.prototype.on = function(eventName,listener){
    if(this._events[eventName]){
        this._events[eventName].push(listener);
    }else{
        this._events[eventName] = [listener];
    }
}

Event.prototype.once = function(eventName,listener){
    if(this._events[eventName]){
        this._events[eventName].push(listener);
    }else{
        this._events[eventName] = [listener];
    }
}
//发射事件
Event.prototype.trigger = function(eventName){
    var handlers = this._events[eventName];
    var args = Array.prototype.slice.call(arguments,1);
    for(var i=0;i<handlers.length;i++){
        handlers[i].apply(this,args);
    }
}
var button = new Event('confirmButton');
function show1(words){
    console.log(this.name,' show1',words);
}
function show2(words){
    console.log(this.name,'show2',words);
}
button.on('click',show1);
button.on('click',show2);
button.trigger('click','welcome');