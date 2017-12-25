// 参考：http://nodejs.cn/api/querystring.html
// 备注：用于解析与格式化 URL 查询字符串

querystring.escape(str) // 对给定的 str 进行 URL 编码
querystring.parse(str[, sep[, eq[, options]]]) // 该方法会把一个 URL 查询字符串 str 解析成一个键值对的集合
querystring.stringify(obj[, sep[, eq[, options]]]) // 该方法通过遍历给定的 obj 对象的自身属性，生成 URL 查询字符串
querystring.unescape(str) // 对给定的 str 进行解码