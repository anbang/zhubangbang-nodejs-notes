/**
 * 原型
 * 1.构造函数里定义的属性与原型不一样，
 * 2. 构造函数内的属性会重复创建 原型是共享的
 * 3. 构造函数内的函数有闭包开销
 */
function Person(){

}

Person.prototype.name = 'zfpx';
Person.prototype.showName = function(){
    console.log(this.name);
}

var person = new Person();
person.showName();


function Animal(name,food){
    this.name = name;
    this.food = food;
    this.getName = function(){
        return this.name;
    }
}

function House(name,food){
    Animal.call(this,name,food);
}
House.prototype = Animal.prototype;

Animal.prototype.food = 'meat';
Animal.prototype.eat = function(){
    console.log('eat'+this.food);
}
/*var house = new House('horse','grass');
console.log(house.getName());
house.eat();*/
/*
var tiger = new Animal('tiger');
var mouse = new Animal('mouse','rice');
console.log(tiger.getName == mouse.getName);//不相等，因为构造 函数内的属性和方法不共享
console.log(tiger.eat === mouse.eat);//相等，因为实体共享 一个原型
console.log(tiger.getName());// 访问自己的属性 tiger
tiger.eat();//eat undefined
mouse.eat(); //eat rice
*/


function Dog(){

}
Object.prototype.name ='zfpx';
Dog.prototype.name = 'Dog2';


var d = new Object();
var dog = new Dog();
console.log(d.name);//zfpx
console.log(dog.name);//Dog
console.log(dog.__proto__.name);//Dog
console.log(dog.__proto__.__proto__.name);//zfpx
console.log(dog.__proto__.constructor.prototype.name);//Dog
console.log(dog.__proto__.constructor.name);


function Dogxx(){

}
console.log(Dogxx.name);