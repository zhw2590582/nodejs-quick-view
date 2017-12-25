// 参考：http://nodejs.cn/api/console.html
// 备注：无

new Console(stdout[, stderr]) // 通过传入一个或两个可写流实例，创建一个新的 Console 对象
console.assert(value[, message][, ...args]) // 一个简单的断言测试，验证 value 是否为真
console.clear() // 当 stdout 是一个 TTY 时，调用 console.clear() 将尝试清除 TTY
console.count([label]) // 维护一个指定 label 的内部计数器并且输出到 stdout 指定 label 调用 console.count() 的次数
console.countReset([label='default']) // 重置指定 label 的内部计数器
console.dir(obj[, options]) // 在 obj 上使用 util.inspect() 并打印结果字符串到 stdout
console.error([data][, ...args]) // 打印到 stderr，并带上换行符
console.group([...label]) // 将后续行的缩进增加两个空格
console.groupCollapsed() // console.group()的一个别名.
console.groupEnd() // 将后续行的缩进减少两个空格。
console.info([data][, ...args]) // console.info() 函数是 console.log() 的一个别名
console.log([data][, ...args]) // 打印到 stdout，并带上换行符
console.time(label) // 启动一个定时器，用以计算一个操作的持续时间
console.timeEnd(label) // 停止之前通过调用 console.time() 启动的定时器，并打印结果到 stdout
console.trace([message][, ...args]) // 打印字符串 'Trace :' 到 stderr ，并通过 util.format() 格式化消息与堆栈跟踪在代码中的当前位置
console.warn([data][, ...args]) // console.warn() 函数是 console.error() 的一个别名