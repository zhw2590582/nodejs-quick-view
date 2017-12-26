// 参考：http://nodejs.cn/api/errors.html
// 备注：省略大部分详情

new Error(message) // 新建一个 Error 实例，并设置 error.message 属性以提供文本信息
Error.captureStackTrace(targetObject[, constructorOpt]) // 在 targetObject 上创建一个 .stack 属性，当访问时返回一个表示代码中调用 Error.captureStackTrace() 的位置的字符串
Error.stackTraceLimit // 属性指定了堆栈跟踪收集的栈帧数量
error.code // 属性是标识错误类别的字符标签
error.message // 性是错误的字符串描述，通过调用 new Error(message) 设置
error.stack // 属性是一个字符串，描述代码中 Error 被实例化的位置

AssertionError // 表示断言失败。 这种错误通常表示实际值和预期值不相等。
RangeError // 表明一个函数的一个给定的参数的值不在可接受的集合或范围内
ReferenceError // 表明试图访问一个未定义的变量。 这些错误通常表明代码有拼写错误或程序已损坏。
SyntaxError // 表明程序不是有效的 JavaScript 代码
TypeError // 表明提供的参数不是一个被允许的类型
