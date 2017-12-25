// 参考：http://nodejs.cn/api/timers.html
// 备注：无

Immediate // 内部创建的，并从 setImmediate() 返回。 它可以传给 clearImmediate() 以便取消预定的动作
Timeout // 内部创建的，并从 setTimeout() 和 setInterval() 返回
timeout.ref() // 调用时，只要 Timeout 处于活动状态就要求 Node.js 事件循环不要退出
timeout.unref() // 当调用时，活动的 Timeout 对象不要求 Node.js 事件循环保持活动
setImmediate(callback[, ...args]) // 预定立即执行的 callback，它是在 I/O 事件的回调之后被触发
setInterval(callback, delay[, ...args]) // 预定每隔 delay 毫秒重复执行的 callback
setTimeout(callback, delay[, ...args]) // 预定在 delay 毫秒之后执行的单次 callback
clearImmediate(immediate) // 取消一个由 setImmediate() 创建的 Immediate 对象
clearInterval(timeout) // 取消一个由 setInterval() 创建的 Timeout 对象
clearTimeout(timeout) // 取消一个由 setTimeout() 创建的 Timeout 对象