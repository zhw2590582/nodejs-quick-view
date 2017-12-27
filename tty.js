// 参考：http://nodejs.cn/api/tty.html
// 备注：tty 模块提供了 tty.ReadStream 类和 tty.WriteStream 类

// tty.ReadStream 类是 net.Socket 的一个子类，表示 TTY 的可读部分
// 正常情况下，process.stdin 是 Node.js 进程中唯一的 tty.ReadStream 实例，无需创建更多的实例。
tty.ReadStream 
readStream.isRaw // 返回 boolean 值。 如果 TTY 被配置成原始模式，则返回 true。 默认为 false。
readStream.isTTY // 一个总是为true的布尔值
readStream.setRawMode(mode) // 把 tty.ReadStream 配置成原始模式

// tty.WriteStream 类是 net.Socket 的一个子类，表示 TTY 的可写部分。
// 正常情况下，process.stdout 和 process.stderr 是 Node.js 进程中唯一的 tty.WriteStream 实例，无需创建更多的实例。
tty.WriteStream 
'resize' // 当 writeStream.columns 属性或 writeStream.rows 属性发生变化时触发 'resize' 事件
writeStream.columns // 返回 number 值，表示 TTY 当前具有的列数。 每当 'resize' 事件被触发时，该属性会被更新。
writeStream.isTTY // 一个总是为true的布尔值
writeStream.rows // 返回 number 值，表示 TTY 当前具有的行数。 每当 'resize' 事件被触发时，该属性会被更新。
tty.isatty(fd) // 如果给定的 fd 有关联 TTY，则返回 true，否则返回 false。
