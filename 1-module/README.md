Module,NodeJs中把每个文件当做一个模块；

在执行模块代码之前，Node.js 会使用一个如下的函数包装器将其包装：

# 函数包装器

```javascript
(function(exports, require, module, __filename, __dirname) {
// 模块的代码实际上在这里
});
```
通过这样做，Node.js 实现了以下几点：

- 它保持了顶层的变量（用 var、const 或 let 定义）作用在模块范围内，而不是全局对象。
- 它有助于提供一些看似全局的但实际上是模块特定的变量;

例如：  
- 实现者可以用于从模块中导出值的 module 和 exports 对象。  
- 包含模块绝对文件名和目录路径的快捷变量 __filename 和 __dirname 。

# __filename

- __filename 当前模块的文件名称---解析后的绝对路径
    - 比如 `G:\Github\zhubangbang-nodejs-notes\1-module\1.dirname.js`

`__filename` 不会因为被别的模块引入，而改变值；永远代表所在的绝对物理路径； 

# __dirname

- __dirname  当前模块所在的文件夹名称(绝对路径)
    - 比如 `G:\Github\zhubangbang-nodejs-notes\1-module`
    
# module.exports 和 exports

- module 对当前模块的引用
    - module.exports 用于指定一个模块所导出的内容，即可以通过 require() 访问的内容。
- exports 是 `module.exports` 的更简短的引用形式

## 如何正确的使用exports

`exports`变量是在模块的文件级别作用域内有效的，它在模块被执行前被赋予 `module.exports` 的值。

`module.exports.xxx = {}` 可以简写为 `exports.xxx = {}`

可以理解为`exports`的默认内存地址等于 `module.exports`的内存地址;你可以修改它的属性，不能修改它的内存地址；

如果写为 `exports = {}` 这就不会导出想要的结果，只能在模块内做变量使用；

**如果修改`exports`的值**，因为内存地址被修改，就不等于`module.exports`了,不导出，仅作为内部的变量使用； 

```javascript
module.exports.hello = true; // 从对模块的引用中导出
exports = { hello: false };  // 不导出，只在模块内有效;因为它的内存已经被改变了
```

**如果不修改`exports`的值**，那么`exports`始终代表`module.exports`的当前值

```javascript
exports.ok = {ok:"OK啦"};
```

可以用下面的例子做理解；
```javascript
const module={exports:{}};
let exports = module.exports;
exports.ok = {ok:"OK啦"};//True 
exports = {ok:"OK啦"};//false
```

```javascript
function require(/* ... */) {
  const module = { 
      exports: {}//这个是模块暴露的内容
  };
  ((module, exports) => {
    // 模块代码在这。在这个例子中，定义了一个函数。
    function someFunc() {}
    exports = someFunc;
    // 此时，exports 不再是一个 module.exports 的快捷方式，且这个模块依然导出一个空的默认对象。
    module.exports = someFunc;
    // 此时，该模块导出 someFunc，而不是默认对象。
  })(module, module.exports);
  return module.exports;
}
```

相比`exports`，`module.exports`就比较任性了，因为操作的是 `module`所以下面这么写没问题；
```javascript
module.exports={
    ok:"OKla"
}
```

但是不能写,如果下面这么写也是要凉凉的； 
```javascript
module={
    exports:{
        area:area
    }
};
```

# module有哪些属性

代码参见 `1-module/4.module.keys.js` 文件

- module.exports    指定一个模块所导出的内容，即可以通过 require() 访问的内容
- module.require    提供了一种类似 require() 从原始模块被调用的加载模块的方式
- module.id         模块的标识符。 通常是完全解析后的文件名。
    - 比如 `G:\Github\zhubangbang-nodejs-notes\1-module\4.module.key.js`
- module.parent     最先引用该模块的模块
    - 返回值还是一个Module实例
- module.filename   模块的完全解析后的文件名,通常等同于 `__filename`
- module.loaded     模块是否已经加载完成，或正在加载中
- module.children   被该模块引用的模块对象
- module.paths      模块的搜索路径
- module.load
- module._compile

# require 有哪些属性

代码参见 `1-module/5.require.keys.js`  内容如下

- cache         被引入的模块将被缓存在这个对象中。从此对象中删除键值对将会导致下一次 require 重新加载被删除的模块
- resolve       只返回解析后的文件名，不会加载该模块
    - require.resolve.paths     返回一个数组，其中包含解析 `request` 过程中被查询的路径。 如果 `request` 字符串指向核心模块（例如 `http` 或 `fs`），则返回 `null`
- main          表示Node.js进程启动时加载的入口脚本的对象
- extensions    `【废弃的API】`指 require 怎样处理特定的文件扩展名,
    - 由于 `Module` 模块系统已锁定，这个特性可能永远不会消失，但是鉴于其复杂性和可能导致的小问题， 最好不要碰它
    

## require.resolve

想要获得调用 `require()` 时加载的确切的文件名，使用 `require.resolve()` 函数;  该方法`只返回解析后的文件名，不会加载该模块`;

## require.cache

模块在第一次加载后会被缓存。 这也意味着如果每次调用 `require('xxx')` 都解析到同一文件，则返回相同的对象。

多次调用 `require('xxx')` 不会导致模块的代码被执行多次。 这是一个重要的特性。 

借助它, 可以返回“部分完成”的对象，从而允许加载依赖的依赖, 即使它们会导致循环依赖。

如果想要多次执行一个模块，可以导出一个函数，然后调用该函数。

> 注意：在不区分大小写的文件系统或操作系统中(windows就不区分)，被解析成不同的文件名可以指向同一文件，但缓存仍然会将它们视为不同的模块，并多次重新加载。 例如，require('./foo') 和 require('./FOO') 返回两个不同的对象，而不会管 ./foo 和 ./FOO 是否是相同的文件。

## require.main

当 Node.js 直接运行一个文件时，`require.main` 会被设为它的 `module`。 这意味着可以通过 `require.main === module` 来判断一个文件是否被直接运行：

# 包管理器的技巧
在某些情况下，依赖可能有冲突或形成循环;即便存在循环依赖或依赖冲突，每个模块还是可以获得它所依赖的包的一个可用版本

- `/usr/lib/node/foo/1.2.3/` - foo 包的内容，版本 1.2.3。
- `/usr/lib/node/bar/4.3.2/` - foo 依赖的 bar 包的内容。
- `/usr/lib/node/foo/1.2.3/node_modules/bar` - /usr/lib/node/bar/4.3.2/ 的符号链接。
- `/usr/lib/node/bar/4.3.2/node_modules/*` - bar 所依赖的包的符号链接

此外，为了进一步优化模块查找过程，不要将包直接放在 `/usr/lib/node` 目录中，而是将它们放在 `/usr/lib/node_modules/<name>/<version>` 目录中。 这样 Node.js 就不会在 `/usr/node_modules` 或 `/node_modules` 目录中查找缺失的依赖。

# require 优先加载核心模块
require() 总是会优先加载核心模块。 例如，`require('http')` 始终返回内置的 HTTP 模块，即使有同名文件。

# 文件作为模块

如果按确切的文件名没有找到模块，则 Node.js 会尝试带上 `.js`、`.json` 或 `.node` 拓展名再加载。

- `.js` 文件会被解析为 JavaScript 文本文件，
- `.json` 文件会被解析为 JSON 文本文件。 
- `.node` 文件会被解析为通过 dlopen 加载的编译后的插件模块。

## 以 '/' 为前缀的模块是文件的绝对路径

例如，`require('/home/marco/foo.js')` 会加载 `/home/marco/foo.js` 文件。

## 以 './' 为前缀的模块是相对于调用 require() 的文件的。 

也就是说，circle.js 必须和 foo.js 在同一目录下以便于 `require('./circle')` 找到它。

## 没有路径的require。

当没有以 '/'、'./' 或 '../' 开头来表示文件时,这个模块必须是一个核心模块或加载自 node_modules 目录

如果给定的路径不存在，则 require() 会抛出一个 code 属性为 'MODULE_NOT_FOUND' 的 Error。

# 目录作为模块

可以把程序和库放到一个单独的目录，然后提供一个单一的入口来指向它。 把目录递给 require() 作为一个参数，有三种方式。

## 一、指定目录的位置方式加载

### 在根目录下创建一个 package.json 文件，并指定一个 main 模块

main的值是这种方式的唯一入口

```json
{ 
  "name" : "some-library",
  "main" : "./lib/some-library.js" 
}
```

如果这是在 `./some-library` 目录中，则 `require('./some-library')` 会试图加载 `./some-library/lib/some-library.js`

这就是 Node.js 处理 package.json 文件的方式。

### 试图加载目录下 index.js 或 index.node 文件

如果目录里没有 `package.json` 文件，则 Node.js 就会试图加载目录下的 `index.js` 或 `index.node` 文件。 

例如，如果上面的例子中没有 `package.json` 文件，则 `require('./some-library')` 会试图加载：

```
./some-library/index.js
./some-library/index.node
```
## 二、从 node_modules 目录加载

如果传递给 require() 的模块标识符不是一个核心模块，也没有以 '/' 、 '../' 或 './' 开头，则 Node.js 会从当前模块的父目录开始，尝试从它的 `/node_modules` 目录里加载模块

例子，如果在 `'/home/ry/projects/foo.js'` 文件里调用了 require('bar.js')，则 Node.js 会按以下顺序查找：

- `/home/ry/projects/node_modules/bar.js`
- `/home/ry/node_modules/bar.js`
- `/home/node_modules/bar.js`
- `/node_modules/bar.js`

**通过在模块名后包含一个路径后缀，可以请求特定的文件或分布式的子模块**

例如 `require('example-module/path/to/file')` 会把 `path/to/file` 解析成相对于 包`example-module` 的位置。 后缀路径同样遵循模块的解析语法;

## 三、从全局目录加载

如果 `NODE_PATH` 环境变量被设为一个以冒号分割的绝对路径列表，则当在其他地方找不到模块时 Node.js 会搜索这些路径。

> 注意：在 Windows 系统中，NODE_PATH 是以分号间隔的。

在当前的模块解析算法运行之前，`NODE_PATH` 最初是创建来支持从不同路径加载模块的。

虽然 NODE_PATH 仍然被支持，但现在不太需要，因为 Node.js 生态系统已制定了一套存放依赖模块的约定。 有时当人们没意识到 NODE_PATH 必须被设置时，依赖 NODE_PATH 的部署会出现意料之外的行为。 有时一个模块的依赖会改变，导致在搜索 NODE_PATH 时加载了不同的版本（甚至不同的模块）。

此外，Node.js 还会搜索以下位置：

- 1: $HOME/.node_modules
- 2: $HOME/.node_libraries
- 3: $PREFIX/lib/node

其中 `$HOME` 是用户的主目录，`$PREFIX` 是 Node.js 里配置的 `node_prefix`。

这些主要是历史原因。

注意：强烈建议将所有的依赖放在本地的 node_modules 目录。 这样将会更快地加载，且更可靠。