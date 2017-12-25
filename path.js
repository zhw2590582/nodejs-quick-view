// 参考：http://nodejs.cn/api/path.html
// 备注：无

path.basename(path[, ext]) // 方法返回一个 path 的最后一部分
path.delimiter // 提供平台特定的路径分隔符： Windows 上是 ; POSIX 上是 :
path.dirname(path) // 方法返回一个 path 的目录名
path.extname(path) // 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束
path.format(pathObject) // 方法会从一个对象返回一个路径字符串。 与 path.parse() 相反
path.isAbsolute(path) // 方法会判定 path 是否为一个绝对路径
path.join([...paths]) // 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径
path.normalize(path) // path.normalize() 方法会规范化给定的 path，并解析 '..' 和 '.' 片段
path.parse(path) // 方法返回一个对象，对象的属性表示 path 的元素
path.posix // 提供了 path 方法针对 POSIX 的实现
path.relative(from, to) // 方法返回从 from 到 to 的相对路径（基于当前工作目录）
path.resolve([...paths]) // 方法会把一个路径或路径片段的序列解析为一个绝对路径
path.sep // 提供了平台特定的路径片段分隔符：indows 上是 \ POSIX 上是 /
path.win32 // 提供了 path 方法针对 Windows 的实现。