// 参考：http://nodejs.cn/api/globals.html
// 备注：无

Buffer // 用于处理二进制数据
__dirname // 当前模块的文件夹名称，等同于path.dirname()的值
__filename // 当前模块的文件名称---解析后的绝对路径
clearImmediate(immediateObject) // 详见 timer 文档
clearInterval(intervalObject) // 详见 timer 文档
clearTimeout(timeoutObject) // 详见 timer 文档
console // 用于打印 stdout 和 stderr
exports // 这是一个对于 module.exports 的更简短的引用形式
global // 全局的命名空间对象
module // 对当前模块的引用
process // 进程对象
require() // 引入模块
setImmediate(callback[, ...args]) // 详见 timer 文档
setInterval(callback, delay[, ...args]) // 详见 timer 文档
setTimeout(callback, delay[, ...args]) // 详见 timer 文档