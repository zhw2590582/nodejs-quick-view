// 参考：http://nodejs.cn/api/process.html
// 备注：无

// 进程事件
'beforeExit' // 当Node.js的事件循环数组已经为空，并且没有额外的工作被添加进来，事件'beforeExit'会被触发。
'disconnect' // 如果Node.js进程是由IPC channel的方式创建的，当IPC channel关闭时，会触发'disconnect'事件。
'exit' // 显式调用process.exit()方法，或Node.js事件循环数组中不再有额外的工作时触发
'message' // 如果Node.js进程是由IPC channel的方式创建的，当子进程收到父进程的的消息时(消息通过childprocess.send()发送）， 会触发'message'事件。
'rejectionHandled' // 如果有Promise被rejected，并且此Promise在Nodje.js事件循环的下次轮询及之后期间，被绑定了一个错误处理器[例如使用promise.catch()][])， 会触发'rejectionHandled'事件。
'uncaughtException' // 如果Javascript未捕获的异常，沿着代码调用路径反向传递回event loop，会触发'uncaughtException'事件。
'unhandledRejection' // 如果在事件循环的一次轮询中，一个Promise被rejected，并且此Promise没有绑定错误处理器，'unhandledRejection'事件会被触发。
'warning' // 任何时候Node.js发出进程告警，都会触发'warning'事件。
'SIGINT' // 当Node.js进程接收到一个信号时，会触发信号事件。

// 进程属性与方法
process.abort() // 方法会使Node.js进程立即结束，并生成一个core文件
process.arch // 属性返回一个标识Node.js在其上运行的处理器架构的字符串
process.argv // 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数
process.argv0 // 保存Node.js启动时传入的argv[0]参数值的一份只读副本
process.channel // 如果Node.js进程是由IPC channel方式创建的，process.channel属性保存IPC channel的引用
process.chdir(directory) // 方法变更Node.js进程的当前工作目录，如果变更目录失败会抛出异常(例如，如果指定的目录不存在)
process.config // 属性返回一个Javascript对象。此对象描述了用于编译当前Node.js执行程序时涉及的配置项信息
process.connected // 如果Node.js进程是由IPC channel方式创建的，只要IPC channel保持连接，process.connected属性就会返回true
process.cpuUsage([previousValue]) // 方法返回包含当前进程的用户CPU时间和系统CPU时间的对象。
process.cwd() //  方法返回 Node.js 进程当前工作的目录
process.disconnect() // 如果 Node.js 进程是从IPC频道派生出来的，函数会关闭到父进程的IPC频道，以允许子进程一旦没有其他链接来保持活跃就优雅地关闭。
process.emitWarning(warning[, options]) // 方法可用于发出定制的或应用特定的进程警告。 可以通过给process.on('warning')事件增加处理器，监听这些警告
process.emitWarning(warning[, type[, code]][, ctor]) // 方法可用于发出定制的或应用特定的进程警告。 可以通过给process.on('warning')事件增加处理器，监听这些警告
process.env // 属性返回一个包含用户环境信息的对象
process.execArgv // 属性返回当Node.js进程被启动时，Node.js特定的命令行选项
process.execPath // 返回启动Node.js进程的可执行文件所在的绝对路径
process.exit([code]) // 方法以结束状态码code指令Node.js同步终止进程
process.exitCode // 当进程正常结束，或通过process.exit()结束但未传递参数时，此数值标识进程结束的状态码。
process.getegid() // 方法返回Node.js进程的有效数字标记的组身份
process.geteuid() // 方法返回Node.js进程的有效数字标记的用户身份
process.getgid() // 方法返回Node.js进程的数字标记的组身份
process.getgroups() // 方法返回数组，其中包含了补充的组ID
process.getuid() // 方法返回Node.js进程的数字标记的用户身份
process.hrtime([time]) // 方法返回当前时间以[seconds, nanoseconds] tuple Array表示的高精度解析值， nanoseconds是当前时间无法使用秒的精度表示的剩余部分。
process.initgroups(user, extra_group) // 方法读取/etc/group文件，并且初始化组访问列表，该列表包括了用户所在的所有组。
process.kill(pid[, signal]) // 方法将signal发送给pid标识的进程
process.mainModule // 属性提供了一种获取require.main的替代方式
process.memoryUsage() // 方法返回Node.js进程的内存使用情况的对象，该对象每个属性值的单位为字节。
process.nextTick(callback[, ...args]) // 方法将 callback 添加到"next tick 队列"。
process.pid // 属性返回进程的PID
process.platform // 属性返回字符串，标识Node.js进程运行其上的操作系统平台
process.release // 属性返回与当前发布相关的元数据对象，包括源代码和源代码头文件 tarball的URLs。
process.send(message[, sendHandle[, options]][, callback]) // 如果Node.js进程是通过进程间通信产生的，那么，process.send()方法可以用来给父进程发送消息
process.setegid(id) // 方法为进程设置有效的用户组ID
process.seteuid(id) // 方法为进程设置有效的用户ID
process.setgid(id) // ?
process.setgroups(groups) // ?
process.setuid(id) // ?
process.stderr // 属性返回连接到stderr(fd 2)的流
process.stdin // 属性返回连接到stdin(fd 0)的流
process.stdout //  属性返回连接到 stdout (fd 1)的流
process.title // 属性用于获取或设置当前进程在 ps 命令中显示的进程名字
process.umask([mask]) // 方法用于返回或设置Node.js进程的默认创建文件的权限掩码
process.uptime() // 方法返回当前 Node.js 进程运行时间秒长
process.version // 属性返回Node.js的版本信息
process.versions // 属性返回一个对象，此对象列出了Node.js和其依赖的版本信息