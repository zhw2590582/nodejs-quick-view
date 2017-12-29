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
buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]]) // 
buf.entries() // 
buf.equals(otherBuffer) // 
buf.fill(value[, offset[, end]][, encoding]) // 
buf.includes(value[, byteOffset][, encoding]) // 
buf.indexOf(value[, byteOffset][, encoding]) // 
buf.keys() // 
buf.lastIndexOf(value[, byteOffset][, encoding]) // 
buf.length // 
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
buf.slice([start[, end]]) // 
buf.swap16() // 
buf.swap32() // 
buf.swap64() // 
buf.toJSON() // 
buf.toString([encoding[, start[, end]]]) // 
buf.values() // 
buf.write(string[, offset[, length]][, encoding]) // 
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
