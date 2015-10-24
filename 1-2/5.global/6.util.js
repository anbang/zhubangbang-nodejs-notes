var util = require('util');

function Parent(){
    this.name = 'father';
    this.say = function(){
        console.log('hello '+this.name);
    }
}
Parent.prototype.showName = function(){
    console.log(this.name);
};

function Child(){
    this.name = 'child';
    Parent.call(this);//执行Parent，并把child的this覆盖parent的this;此时的this.name是father；
}
util.inherits(Child,Parent);
//inherits的原理
//ctor.prototype = Object.create(superCtor.prototype)


Child.prototype = new Parent();
var child = new Child();
child.say();
child.showName();


console.log(util.inspect(child));
console.log(util.inspect(child,true,1,true));
console.log(util.inspect(child,true,5,true));

/*
判断对象的类型
console.log(util.isArray());
utils.isRegExp()
utils.isDate()
utils.isError();*/
