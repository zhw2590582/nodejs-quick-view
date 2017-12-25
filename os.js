// 参考：http://nodejs.cn/api/os.html
// 备注：无

os.EOL // 一个字符串常量,定义操作系统相关的行末标志
os.arch() // 返回一个字符串, 表明Node.js 二进制编译 所用的 操作系统CPU架构.
os.constants // 返回一个包含错误码,处理信号等通用的操作系统特定常量的对象. 现在, 这些特定的常量的定义被描述在OS Constants
os.cpus() // 返回一个对象数组, 包含每个逻辑 CPU 内核的信息
os.endianness() // 返回一个字符串,表明Node.js二进制编译环境的字节顺序
os.freemem() // 以整数的形式回空闲系统内存的字节数
os.homedir() // 以字符串的形式返回当前用户的home目录
os.hostname() // 以字符串的形式返回操作系统的主机名
os.loadavg() // 返回一个数组,包含1, 5, 15分钟平均负载
os.networkInterfaces() // 方法返回一个对象,包含只有被赋予网络地址的网络接口.
os.platform() // 返回一个字符串, 指定Node.js编译时的操作系统平台
os.release() // 返回一个字符串, 指定操作系统的发行版
os.tmpdir() // 返回一个字符串, 表明操作系统的默认临时文件目录
os.totalmem() // 以整数的形式返回所有系统内存的字节数
os.type() // 返回一个字符串,表明操作系统的名字
os.uptime() // 在几秒内返回操作系统的上线时间
os.userInfo([options]) // 当前有效用户的信息

