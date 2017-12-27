// 参考：http://nodejs.cn/api/stream.html
// 备注：未完成

// stream.Writable 类
// 事件
'close' // 事件将在流或其底层资源（比如一个文件）关闭后触发。'close' 事件触发后，该流将不会再触发任何事件。
'drain' // 如果调用 stream.write(chunk) 方法返回 false，流将在适当的时机触发 'drain' 事件，这时才可以继续向流中写入数据。
'error' // 事件在写入数据出错或者使用管道出错时触发。事件发生时，回调函数仅会接收到一个 Error 参数
'finish' // 在调用了 stream.end() 方法，且缓冲区数据都已经传给底层系统之后，'finish' 事件将被触发
'pipe' // 在可读流上调用 stream.pipe() 方法，并在目标流向中添加当前可写流时，将会在可写流上触发 'pipe' 事件
'unpipe' // 在 Readable 上调用 stream.unpipe() 方法，从目标流向中移除当前 Writable 时，将会触发 'unpipe' 事件

// 方法
writable.cork() // 强制所有写入数据都存放到内存中的缓冲区里。 直到调用 stream.uncork() 或 stream.end() 方法时，缓冲区里的数据才会被输出
writable.end([chunk][, encoding][, callback]) // 表明接下来没有数据要被写入 Writable
writable.setDefaultEncoding(encoding) // 用于为 Writable 设置 encoding
writable.uncork() // 将输出在 stream.cork() 方法被调用之后缓冲在内存中的所有数据
writable.write(chunk[, encoding][, callback]) // 向流中写入数据，并在数据处理完成后调用 callback
writable.destroy([error]) // 摧毁这个流，并发出传过来的错误

// stream.Readable 类
// 事件
'close' // 事件将在流或其底层资源（比如一个文件）关闭后触发。'close' 事件触发后，该流将不会再触发任何事件。
'data' // 事件会在流将数据传递给消费者时触发
'end' // 只有在数据被完全消费后才会触发
'error' // 可以在任何时候在可读流实现上触发
'readable' // 事件将在流中有数据可供读取时触发

// 方法
readable.isPaused() // 方法返回可读流的当前操作状态
readable.pause() // 方法将会使 flowing 模式的流停止触发 'data' 事件
readable.pipe(destination[, options]) // 绑定一个 Writable 到 readable 上， 将可写流自动切换到 flowing 模式并将所有数据传给绑定的 Writable
readable.read([size]) // 方法从内部缓冲区中抽出并返回一些数据
readable.resume() // 方法会重新触发 'data' 事件, 将暂停模式切换到流动模式
readable.setEncoding(encoding) // 方法会为从可读流读入的数据设置字符编码
readable.unpipe([destination]) // 方法将之前通过stream.pipe()方法绑定的流分离
readable.unshift(chunk) // 方法会提交一个数据块到Buffer内部
readable.wrap(stream) // ?
readable.destroy([error]) // 销毁流，并且触发error事件。然后，可读流将释放所有的内部资源。

// stream.Duplex 类

// stream.Transform 类