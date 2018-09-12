const trueModule = require("./2.exports-true");
const falseModule = require("./2.exports-false");
console.log(trueModule);
console.log(trueModule.area(4, 3));

console.log(falseModule);
// console.log(falseModule.area(4,3));//falseModule.area is not a function