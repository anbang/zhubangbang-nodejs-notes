**NodeJs采用错误优先的回调函数,用于同时返回错误和数据**

# Node.js中常见的四类Error

## 标准的 JavaScript 错误

- `<SyntaxError>` : 当 JavaScript 语法错误时抛出。

    比如 `console.log(+);` 这种错误抛出，在NodeJs中还可以看到Module包装函数，参考`1-module/0.module.js` 报错 `SyntaxError: Unexpected token`
    
- `<ReferenceError>` : 当使用未定义的变量时抛出。

    ```javascript
    console.log(a);//ReferenceError: a is not defined
    ```

- `<TypeError>` : 当传入错误类型的参数时抛出。

    ```javascript
    const Hello={};
    Hello.f();//TypeError: Hello.f is not a function
    ```

- `<URIError>` : 当全局的 URI 处理函数被误用时抛出。
 
    ```javascript
    decodeURIComponent('%');//URIError: URI malformed
    ```
- `<EvalError>` : 当调用 eval() 失败时抛出
    
    EvalError 不在当前`ECMAScript`规范中使用，因此不会被运行时抛出. 但是对象本身仍然与规范的早期版本向后兼容,在node中测试的时候也不会抛出错误了
    
- `<RangeError>` : 当值不在预期范围内时抛出。



## 由底层操作系触发的系统错误

例如试图打开一个不存在的文件、试图通过一个已关闭的 socket 发送数据等。参见代码 `1-error/2.error-open.js`

## 由应用程序代码触发的用户自定义的错误

参见代码`1-error/3.error.diy.js`，用户主动抛出的Error；

## 断言错误是错误的一个特殊类别

每当 Node.js 检测到一个不应该发生的异常逻辑时触发。 这类错误通常由 assert 模块引起。

比如下面代码,代码详见`1-error/4.error-assert.js`

```javascript
const num = 123;
assert.ok(typeof num === 'string' ,`${num} 不是 string 类型`);
```

所有由 NodeJs 引起的 JavaScript 错误与系统错误都继承自或实例化自标准的 JavaScript <Error> 类，且保证至少提供类中的属性。

# NodeJs中的Error处理

当Error出现的时候，如何报告和处理这些Error信息完全取决于错误的类型和被调用的 API 的风格；

所有Error都会被作为异常处理，异常会立即产生并使用标准的 JavaScript throw 机制抛出一个错误。

异常必须使用 `try / catch` 处理，否则 NodeJs 进程会立即退出


