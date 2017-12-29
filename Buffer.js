// 参考：http://nodejs.cn/api/buffer.html
// 备注：无

// 类方法
Buffer.alloc(size[, fill[, encoding]]) // 分配一个大小为 size 字节的新建的 Buffer 。 如果 fill 为 undefined ，则该 Buffer 会用 0 填充
Buffer.allocUnsafe(size) // 分配一个大小为 size 字节的新建的 Buffer 。以这种方式创建的 Buffer 实例的底层内存是未初始化的
Buffer.allocUnsafeSlow(size) // 分配一个大小为 size 字节的新建的 Buffer 。以这种方式创建的 Buffer 实例的底层内存是未初始化的
Buffer.byteLength(string[, encoding]) // 返回一个字符串的实际字节长度
Buffer.compare(buf1, buf2) // 比较 buf1 和 buf2 ，通常用于 Buffer 实例数组的排序
Buffer.concat(list[, totalLength]) // 返回一个合并了 list 中所有 Buffer 实例的新建的 Buffer 
Buffer.from(array) // 通过一个八位字节的 array 创建一个新的 Buffer 。
Buffer.from(arrayBuffer[, byteOffset[, length]]) // 该方法将创建一个 ArrayBuffer 的视图，而不会复制底层内存。
Buffer.from(buffer) // 将传入的 buffer 数据拷贝到一个新建的 Buffer 实例
Buffer.from(string[, encoding]) // 新建一个包含所给的 JavaScript 字符串 string 的 Buffer 。 encoding 参数指定 string 的字符编码。
Buffer.from(object[, offsetOrEncoding[, length]]) // 那些其 valueOf() 方法返回值如果不严格等于 object 的对象，返回Buffer.from(object.valueOf(), offsetOrEncoding, length)。
Buffer.isBuffer(obj) // 如果 obj 是一个 Buffer 则返回 true ，否则返回 false 。
Buffer.isEncoding(encoding) // 如果 encoding 是一个支持的字符编码则返回 true，否则返回 false 。

// 类属性
Buffer.poolSize // 这是用于决定预分配的、内部 Buffer 实例池的大小的字节数。 这个值可以修改。

// 实例属性与方法
buf.buffer // 属性指向创建该 Buffer 的底层的 ArrayBuffer 对象
buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]]) // 比较 buf 与 target，返回表明 buf 在排序上是否排在 target 之前、或之后、或相同。 对比是基于各自 Buffer 实际的字节序列。
buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]]) // 拷贝 buf 的一个区域的数据到 target 的一个区域，即便 target 的内存区域与 buf 的重叠。
buf.entries() // 从 buf 的内容中，创建并返回一个 [index, byte] 形式的迭代器。
buf.equals(otherBuffer) // 如果 buf 与 otherBuffer 具有完全相同的字节，则返回 true，否则返回 false。
buf.fill(value[, offset[, end]][, encoding]) // 如果未指定 offset 和 end，则填充整个 buf。 这个简化使得一个 Buffer 的创建与填充可以在一行内完成。
buf.includes(value[, byteOffset][, encoding]) // 相当于 buf.indexOf() !== -1
buf.indexOf(value[, byteOffset][, encoding]) // buf 中 value 首次出现的索引，如果 buf 没包含 value 则返回 -1
buf.keys() // 创建并返回一个包含 buf 键名（索引）的迭代器。
buf.lastIndexOf(value[, byteOffset][, encoding]) // 与 buf.indexOf() 类似，除了 buf 是从后往前搜索而不是从前往后。
buf.length // 返回 buf 在字节数上分配的内存量。 注意，这并不一定反映 buf 内可用的数据量。
buf.readDoubleBE(offset[, noAssert]) // 
buf.readDoubleLE(offset[, noAssert]) // 
buf.readFloatBE(offset[, noAssert]) // 
buf.readFloatLE(offset[, noAssert]) // 
buf.readInt8(offset[, noAssert]) // 
buf.readInt16BE(offset[, noAssert]) // 
buf.readInt16LE(offset[, noAssert]) // 
buf.readInt32BE(offset[, noAssert]) // 
buf.readInt32LE(offset[, noAssert]) // 
buf.readIntBE(offset, byteLength[, noAssert]) // 
buf.readIntLE(offset, byteLength[, noAssert]) // 
buf.readUInt8(offset[, noAssert]) // 
buf.readUInt16BE(offset[, noAssert]) // 
buf.readUInt16LE(offset[, noAssert]) // 
buf.readUInt32BE(offset[, noAssert]) // 
buf.readUInt32LE(offset[, noAssert]) // 
buf.readUIntBE(offset, byteLength[, noAssert]) // 
buf.readUIntLE(offset, byteLength[, noAssert]) // 
buf.slice([start[, end]]) // 返回一个指向相同原始内存的新建的 Buffer，但做了偏移且通过 start 和 end 索引进行裁剪。
buf.swap16() // 
buf.swap32() // 
buf.swap64() // 
buf.toJSON() // 返回 buf 的 JSON 格式。 当字符串化一个 Buffer 实例时，JSON.stringify() 会隐式地调用该函数。
buf.toString([encoding[, start[, end]]]) // 根据 encoding 指定的字符编码解码 buf 成一个字符串。 start 和 end 可传入用于只解码 buf 的一部分。
buf.values() // 创建并返回一个包含 buf 的值（字节）的迭代器。 当 Buffer 使用 for..of 时会自动调用该函数。
buf.write(string[, offset[, length]][, encoding]) // 根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。 length 参数是写入的字节数。
buf.writeDoubleBE(value, offset[, noAssert]) // 
buf.writeDoubleLE(value, offset[, noAssert]) // 
buf.writeFloatBE(value, offset[, noAssert]) // 
buf.writeFloatLE(value, offset[, noAssert]) // 
buf.writeInt8(value, offset[, noAssert]) // 
buf.writeInt16BE(value, offset[, noAssert]) // 
buf.writeInt16LE(value, offset[, noAssert]) // 
buf.writeInt32BE(value, offset[, noAssert]) // 
buf.writeInt32LE(value, offset[, noAssert]) // 
buf.writeIntBE(value, offset, byteLength[, noAssert]) // 
buf.writeIntLE(value, offset, byteLength[, noAssert]) // 
buf.writeUInt8(value, offset[, noAssert]) // 
buf.writeUInt16BE(value, offset[, noAssert]) // 
buf.writeUInt16LE(value, offset[, noAssert]) // 
buf.writeUInt32BE(value, offset[, noAssert]) // 
buf.writeUInt32LE(value, offset[, noAssert]) // 
buf.writeUIntBE(value, offset, byteLength[, noAssert]) // 
buf.writeUIntLE(value, offset, byteLength[, noAssert]) // 

// 注意，这些属性是在通过 require('buffer') 返回的 buffer 模块上，而不是在 Buffer 的全局变量或 Buffer 实例上
buffer.INSPECT_MAX_BYTES // 当调用 buf.inspect() 时返回的最大字节数。 可以被用户模块重写。
buffer.kMaxLength // buffer.constants.MAX_LENGTH 的别名
buffer.transcode(source, fromEnc, toEnc) // 将给定的 Buffer 或 Uint8Array 实例从一个字符编码重新编码到另一个字符。 返回一个新的Buffer实例
buffer.constants.MAX_LENGTH // 在32位体系结构上，这个值是(2^30)-1 (~1GB)。 在64位体系结构上，这个值是(2^31)-1 (~2GB)。
buffer.constants.MAX_STRING_LENGTH // 代表string能有的原始最大长度，以UTF-16代码为单位。