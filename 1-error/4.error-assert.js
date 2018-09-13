const assert= require("assert");
// assert.equal(1, 1);
// assert.equal(1, 2);
//assert.ok(false, `${false}不是真值`);
const num = 13;
assert.ok(typeof num === 'string' ,`${num} 不是 string 类型`);

