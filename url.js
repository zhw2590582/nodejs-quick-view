// 参考：http://nodejs.cn/api/url.html
// 备注：省略遗留的urlObject

new URL(input[, base]) // 通过将input解析到base上创建一个新的URL对象
url.hash // 获取及设置URL的分段(hash)部分
url.host // 获取及设置URL的主机(host)部分，不包含端口
url.hostname // 获取及设置URL的主机名(hostname)部分，包含端口
url.href // 获取及设置序列化的URL
url.origin // 获取只读序列化的URL origin部分
url.password // 获取及设置URL的密码(password)部分
url.pathname // 获取及设置URL的路径(path)部分
url.port // 获取及设置URL的端口(port)部分
url.protocol // 获取及设置URL的协议(protocol)部分
url.search // 获取及设置URL的序列化查询(query)部分部分
url.searchParams // 获取表示URL查询参数的URLSearchParams对象
url.username // 获取及设置URL的用户名(username)部分
url.toString() // 在URL对象上调用toString()方法将返回序列化的URL。返回值与url.href和url.toJSON()的相同
url.toJSON() // 在URL对象上调用toJSON()方法将返回序列化的URL。返回值与url.href和url.toString()的相同

// URLSearchParamsAPI接口提供对URLquery部分的读写权限
new URLSearchParams() // 实例化一个新的空的URLSearchParams对象
new URLSearchParams(string) // 将string解析成一个查询字符串, 并且使用它来实例化一个新的URLSearchParams对象. 如果string以'?'打头,则'?'将会被忽略.
new URLSearchParams(obj) // 通过使用查询哈希映射实例化一个新的URLSearchParams对象
new URLSearchParams(iterable) // 以一种类似于Map的构造函数的迭代映射方式实例化一个新的URLSearchParams对象
urlSearchParams.append(name, value) // 在查询字符串中附加一个新的键值对
urlSearchParams.delete(name) // 删除所有键为name的键值对。
urlSearchParams.entries() // 在查询中的每个键值对上返回一个ES6迭代器
urlSearchParams.forEach(fn[, thisArg]) // 在查询字符串中迭代每个键值对，并调用给定的函数。
urlSearchParams.get(name) // 返回键是name的第一个键值对的值。如果没有对应的键值对，则返回null。
urlSearchParams.getAll(name) // 返回键是name的所有键值对的值，如果没有满足条件的键值对，则返回一个空的数组。
urlSearchParams.has(name) // 如果存在至少一对键是name的键值对则返回 true。
urlSearchParams.keys() // 在每一个键值对上返回一个键的ES6迭代器。
urlSearchParams.set(name, value) // 将URLSearchParams对象中与name相对应的值设置为value
urlSearchParams.sort() // 按现有名称就地排列所有的名称-值对
urlSearchParams.toString() // 返回查询参数序列化后的字符串，必要时存在百分号编码字符。
urlSearchParams.values() // 在每一个键值对上返回一个值的ES6迭代器。
urlSearchParams[@@iterator]() // 返回在查询字符串中每一个键值对的ES6迭代器
url.domainToASCII(domain) // 返回Punycode ASCII序列化的domain. 如果domain是无效域名，将返回空字符串
url.domainToUnicode(domain) // 返回Unicode序列化的domain. 如果domain是无效域名，将返回空字符串。
url.format(URL[, options]) //返回一个WHATWG URL对象的可自定义序列化的URL字符串表达