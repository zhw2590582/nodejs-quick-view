// 参考：http://nodejs.cn/api/readline.html
// 备注：无

// 实例事件
'close' // 关闭事件
'line' // 每当 input 流接收到接收行结束符（\n、\r 或 \r\n）时触发 'line' 事件
'pause'  // 暂停事件
'resume' // 恢复事件
'SIGCONT' // 当一个 Node.js 进程使用 <ctrl>-Z（也就是 SIGTSTP）移入后台之后再使用 fg(1p) 移回前台时，触发 'SIGCONT' 事件
'SIGINT' // 每当 input 流接收到一个 <ctrl>-C 输入（通常被称为 SIGINT）时，触发 'SIGINT' 事件。
'SIGTSTP' // 每当 input 流接收到一个 <ctrl>-Z 输入（通常被称为 SIGTSTP）时，触发 'SIGTSTP' 事件。

// 实例方法
rl.close() // 方法会关闭 readline.Interface 实例，且撤回对 input 和 output 流的控制。 但被调用时，'close' 事件会被触发
rl.pause() // 方法会暂停 input 流，且稍后需要时可被恢复。
rl.prompt([preserveCursor]) // rl.prompt() 方法会在 output 流中新的一行写入 readline.Interface 实例配置后的 prompt，用于为用户提供一个可供输入的新的位置。
rl.question(query, callback) // rl.question() 方法通过写入到 output 来展示 query，并等待用户提供到 input 的输入，然后调用 callback 函数并传入提供的输入作为第一个参数。
rl.resume() // 如果 input 流已被暂停，则 rl.resume() 方法会恢复 input 流。
rl.setPrompt(prompt) // rl.setPrompt() 方法用于设置每当 rl.prompt() 被调用时要被写入到 output 的提示。
rl.write(data[, key]) // rl.write() 方法会把 data 或一个由 key 指定的按键序列写入到 output。 只有当 output 是一个 TTY 文本终端时，key 参数才被支持

readline.clearLine(stream, dir) // 方法会以 dir 指定的方向清除给定的 TTY 流的当前行
readline.clearScreenDown(stream) // 方法会从光标的当前位置向下清除给定的 TTY 流
readline.createInterface(options) // 方法会创建一个新的 readline.Interface 实例
readline.cursorTo(stream, x, y) // 会移动光标到给定的 TTY stream 中指定的位置
readline.emitKeypressEvents(stream[, interface]) // 使给定的可读流 stream 相应于接收到的输入触发 'keypress' 事件
readline.moveCursor(stream, dx, dy) // 方法会移动光标到给定的 TTY stream 中相对当前的位置