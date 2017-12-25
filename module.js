// 参考：http://nodejs.cn/api/modules.html
// 备注：无

__dirname // 当前模块的文件夹名称。等同于 __filename 的 path.dirname() 的值
__filename // 当前模块的文件名称---解析后的绝对路径
exports // 这是一个对于 module.exports 的更简短的引用形式
module //  用于指定一个模块所导出的内容
require() // 引入模块
require.cache // 被引入的模块将被缓存在这个对象中
require.resolve(request[, options]) // 使用内部的 require() 机制查询模块的位置, 此操作只返回解析后的文件名，不会加载该模块。
module.children // 被该模块引用的模块对象
module.exports // 由模块系统创建的
module.filename // 模块的完全解析后的文件名
module.id // 模块的标识符。 通常是完全解析后的文件名。
module.loaded // 模块是否已经加载完成，或正在加载中。
module.parent // 最先引用该模块的模块。
module.paths // 模块的搜索路径。
module.require(id) // 方法提供了一种类似 require() 从原始模块被调用的加载模块的方式