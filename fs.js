// 参考：http://nodejs.cn/api/fs.html
// 备注：无

fs.FSWatcher // 从 fs.watch() 返回的对象是该类型。提供给 fs.watch() 的 listener 回调会接收返回的 FSWatcher 的 change 事件
'change' // 当一个被监视的目录或文件有变化时触发
'error' // 当发生错误时触发
watcher.close() // 停止监听 fs.FSWatcher 的变化

fs.ReadStream // ReadStream 是一个可读流
'close' // 当 ReadStream 底层的文件描述符被关闭时触发
'open' // 当 ReadStream 的文件被打开时触发
readStream.bytesRead // 已读取的字节数
readStream.path // 流正在读取的文件的路径，指定在 fs.createReadStream() 的第一个参数

fs.Stats // 从 fs.stat()、fs.lstat() 和 fs.fstat() 及其同步版本返回的对象都是该类型

fs.WriteStream // WriteStream 一个可写流
'close' // 当 WriteStream 底层的文件描述符被关闭时触发
'open' // 当 WriteStream 的文件被打开时触发
writeStream.bytesWritten // 已写入的字节数。 不包括仍在排队等待写入的数据。
writeStream.path // 流正在写入的文件的路径，指定在 fs.createWriteStream() 的第一个参数

// 测试 path 指定的文件或目录的用户权限
// 通常，仅在文件不会被直接使用时才检查一个文件的可访问性，例如当它的可访问性是来自另一个进程的信号。
fs.access(path[, mode], callback)
fs.accessSync(path[, mode])

// 异步地追加数据到一个文件，如果文件不存在则创建文件。 data 可以是一个字符串或 buffer。
fs.appendFile(file, data[, options], callback)
fs.appendFileSync(file, data[, options])

// 改写文件的读写权限
fs.chmod(path, mode, callback)
fs.chmodSync(path, mode)

// 更改文件所有权
fs.chown(path, uid, gid, callback)
fs.chownSync(path, uid, gid)

// 关闭文件
// fd为文件open时传递的文件描述符。
fs.close(fd, callback)
fs.closeSync(fd)

// 返回一个包含常用文件系统操作的常量的对象
fs.constants

// 将 src 拷贝到 dest
fs.copyFile(src, dest[, flags], callback)
fs.copyFileSync(src, dest[, flags])

// 返回一个新建的 ReadStream 对象
fs.createReadStream(path[, options])
fs.createWriteStream(path[, options])


fs.existsSync(path)
fs.fchmod(fd, mode, callback)
fs.fchmodSync(fd, mode)
fs.fchown(fd, uid, gid, callback)
fs.fchownSync(fd, uid, gid)
fs.fdatasync(fd, callback)
fs.fdatasyncSync(fd)
fs.fstat(fd, callback)
fs.fstatSync(fd)
fs.fsync(fd, callback)
fs.fsyncSync(fd)
fs.ftruncate(fd[, len], callback)
fs.ftruncateSync(fd[, len])
fs.futimes(fd, atime, mtime, callback)
fs.futimesSync(fd, atime, mtime)
fs.lchmod(path, mode, callback)
fs.lchmodSync(path, mode)
fs.lchown(path, uid, gid, callback)
fs.lchownSync(path, uid, gid)
fs.link(existingPath, newPath, callback)
fs.linkSync(existingPath, newPath)
fs.lstat(path, callback)
fs.lstatSync(path)
fs.mkdir(path[, mode], callback)
fs.mkdirSync(path[, mode])
fs.mkdtemp(prefix[, options], callback)
fs.mkdtempSync(prefix[, options])
fs.open(path, flags[, mode], callback)
fs.openSync(path, flags[, mode])
fs.read(fd, buffer, offset, length, position, callback)
fs.readdir(path[, options], callback)
fs.readdirSync(path[, options])
fs.readFile(path[, options], callback)
fs.readFileSync(path[, options])
fs.readlink(path[, options], callback)
fs.readlinkSync(path[, options])
fs.readSync(fd, buffer, offset, length, position)
fs.realpath(path[, options], callback)
fs.realpathSync(path[, options])
fs.rename(oldPath, newPath, callback)
fs.renameSync(oldPath, newPath)
fs.rmdir(path, callback)
fs.rmdirSync(path)
fs.stat(path, callback)
fs.statSync(path)
fs.symlink(target, path[, type], callback)
fs.symlinkSync(target, path[, type])
fs.truncate(path[, len], callback)
fs.truncateSync(path[, len])
fs.unlink(path, callback)
fs.unlinkSync(path)
fs.unwatchFile(filename[, listener])
fs.utimes(path, atime, mtime, callback)
fs.utimesSync(path, atime, mtime)
fs.watch(filename[, options][, listener])
fs.watchFile(filename[, options], listener)
fs.write(fd, buffer[, offset[, length[, position]]], callback)
fs.write(fd, string[, position[, encoding]], callback)
fs.writeFile(file, data[, options], callback)
fs.writeFileSync(file, data[, options])
fs.writeSync(fd, buffer[, offset[, length[, position]]])
fs.writeSync(fd, string[, position[, encoding]])