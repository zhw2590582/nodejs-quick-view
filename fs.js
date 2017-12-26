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

// 返回一个新建的 WriteStream 对象
fs.createWriteStream(path[, options])

// 通过检查文件系统来测试给定的路径是否存在
fs.existsSync(path)

// 更改文件权限（文件描述符）
fs.fchmod(fd, mode, callback)
fs.fchmodSync(fd, mode)

// 更改文件所有权(文件描述符)
fs.fchown(fd, uid, gid, callback)
fs.fchownSync(fd, uid, gid)

// 刷新数据到磁盘
fs.fdatasync(fd, callback)
fs.fdatasyncSync(fd)

// 返回文件的详细信息
fs.fstat(fd, callback)
fs.fstatSync(fd)

// 同步缓存数据到磁盘
fs.fsync(fd, callback)
fs.fsyncSync(fd)

// 截取文件内容
fs.ftruncate(fd[, len], callback)
fs.ftruncateSync(fd[, len])

// 更改一个文件所提供的文件描述符引用的文件的时间戳
fs.futimes(fd, atime, mtime, callback)
fs.futimesSync(fd, atime, mtime)

// 更改文件权限(不解析符号链接)
fs.lchmod(path, mode, callback)
fs.lchmodSync(path, mode)

// 更改文件所有权（不解析符号链接）
fs.lchown(path, uid, gid, callback)
fs.lchownSync(path, uid, gid)

// 创建硬链接(只能在本券中)
fs.link(existingPath, newPath, callback)
fs.linkSync(existingPath, newPath)

// 获取文件信息(不解析符号链接)
fs.lstat(path, callback)
fs.lstatSync(path)

// 创建文件目录，如果目录已存在，将抛出异常
fs.mkdir(path[, mode], callback)
fs.mkdirSync(path[, mode])

// 创建一个唯一的临时目录
fs.mkdtemp(prefix[, options], callback)
fs.mkdtempSync(prefix[, options])

// 打开文件
fs.open(path, flags[, mode], callback)
fs.openSync(path, flags[, mode])

// 从 fd 指定的文件中读取数据
fs.read(fd, buffer, offset, length, position, callback)
fs.readSync(fd, buffer, offset, length, position)

// 读取一个目录的内容
fs.readdir(path[, options], callback)
fs.readdirSync(path[, options])

// 读取一个文件的全部内容
fs.readFile(path[, options], callback)
fs.readFileSync(path[, options])

// 读取软连接信息
fs.readlink(path[, options], callback)
fs.readlinkSync(path[, options])

// 获取真实路径
fs.realpath(path[, options], callback)
fs.realpathSync(path[, options])

// 重命名路径
fs.rename(oldPath, newPath, callback)
fs.renameSync(oldPath, newPath)

// 删除文件目录
fs.rmdir(path, callback)
fs.rmdirSync(path)

// 获取文件信息
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