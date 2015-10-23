/**
 *  call apply
 */
var person = {
    name:'zfpx',
    say:function(word1,word2){
        console.log(this.name+' say '+word1,word2);
    }
}
person.say('hello');

var p = {
    name:'node.js'
}

//person.say.call(p,'hello');
//person.say.apply(p,['hello']);
//bind
person.say.bind = function(){
    var _this = this;
    var self = arguments[0];
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
        _this.apply(self,args.concat(Array.prototype.slice.call(arguments,0)));
    }
}
var pSay = person.say.bind(p,'hello');
pSay('world');// node.js say hello world
var personSay = pSay.bind(person,'hello');
personSay('world');//

