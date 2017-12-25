// 参考：http://nodejs.cn/api/events.html
// 备注：无

'newListener' // EventEmitter 实例会在一个监听器被添加到其内部监听器数组之前触发自身的 'newListener' 事件
'removeListener' // 'removeListener' 事件在 listener 被移除后触发
EventEmitter.defaultMaxListeners // 每个事件默认可以注册最多 10 个监听器，所有 EventEmitter 实例的默认值可以使用 EventEmitter.defaultMaxListeners 属性改变
emitter.addListener(eventName, listener) // emitter.on(eventName, listener) 的别名
emitter.emit(eventName[, ...args]) // 按监听器的注册顺序，同步地调用每个注册到名为 eventName 事件的监听器，并传入提供的参数。如果事件有监听器，则返回 true ，否则返回 false。
emitter.eventNames() // 返回一个列出触发器已注册监听器的事件的数组。 数组中的值为字符串或符号。
emitter.getMaxListeners() // 返回 EventEmitter 当前的最大监听器限制值
emitter.listenerCount(eventName) // 返回正在监听名为 eventName 的事件的监听器的数量
emitter.listeners(eventName) // 返回名为 eventName 的事件的监听器数组的副本
emitter.on(eventName, listener) // 添加 listener 函数到名为 eventName 的事件的监听器数组的末尾
emitter.once(eventName, listener) // 添加一个单次 listener 函数到名为 eventName 的事件
emitter.prependListener(eventName, listener) // 添加 listener 函数到名为 eventName 的事件的监听器数组的开头
emitter.prependOnceListener(eventName, listener) // 添加一个单次 listener 函数到名为 eventName 的事件的监听器数组的开头
emitter.removeAllListeners([eventName]) // 移除全部或指定 eventName 的监听器
emitter.removeListener(eventName, listener) // 从名为 eventName 的事件的监听器数组中移除指定的 listener
emitter.setMaxListeners(n) // 允许修改指定的 EventEmitter 实例的限制