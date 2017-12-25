// 参考：http://nodejs.cn/api/string_decoder.html
// 备注：string_decoder 模块提供了一个 API，用于把 Buffer 对象解码成字符串，但会保留编码过的多字节 UTF-8 与 UTF-16 字符
// 当一个Buffer实例被写到StringDecoder实例的时候，一个内部的buffer将被用来确保待解码的字符串不会包含任何不完整的多字节字符

new StringDecoder([encoding]) // 创建一个新的 StringDecoder 实例
stringDecoder.end([buffer]) // 以字符串的形式返回内部 buffer 中剩余的字节
stringDecoder.write(buffer) // 返回一个解码后的字符串，并确保返回的字符串不包含 Buffer 末尾残缺的多字节字符