// 参考：http://nodejs.cn/api/util.html
// 备注：还有一些未翻译的属性

util.callbackify(original) // 接受一个异步函数（或返回一个Promise的函数），并在Node.js错误的第一个回调风格之后返回一个函数
util.debuglog(section) // 用于创建一个函数，基于 NODE_DEBUG 环境变量的存在与否有条件地写入调试信息到 stderr
util.deprecate(function, string) // 方法会包装给定的 function 或类，并标记为废弃的
util.format(format[, ...args]) // 返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式
util.inherits(constructor, superConstructor) // 从一个构造函数中继承原型方法到另一个
util.inspect(object[, options]) // 返回 object 的字符串表示，主要用于调试。 附加的 options 可用于改变格式化字符串的某些方面
util.promisify(original) // 让一个遵循通常的 Node.js 回调风格的函数， 即 (err, value) => ... 回调函数是最后一个参数, 返回一个返回值是一个 promise 版本的函数
util.promisify.custom // 指定一个普通函数作为 Promise 化处理函数