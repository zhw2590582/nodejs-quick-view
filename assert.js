// 参考：http://nodejs.cn/api/assert.html
// 备注：无

// assert.ok() 的别名
assert(value[, message]) 

// 测试 actual 参数与 expected 参数是否深度相等。 原始值使用相等运算符（==）比较
// 只测试可枚举的自身属性，不测试对象的原型、连接符、或不可枚举的属性（这些情况使用 assert.deepStrictEqual()）
assert.deepEqual(actual, expected[, message]) 

// 原始值使用全等运算符（===）比较。Set 的值与 Map 的键使用 SameValueZero 比较
// 对象的原型也使用全等运算符比较
// 对象的类型标签要求相同
assert.deepStrictEqual(actual, expected[, message])

// 断言 block 函数不会抛出错误
// 当 assert.doesNotThrow() 被调用时，它会立即调用 block 函数
assert.doesNotThrow(block[, error][, message])

// 使用相等运算符（==）测试 actual 参数与 expected 参数是否相等。
assert.equal(actual, expected[, message])

// 抛出 AssertionError
assert.fail(message)
assert.fail(actual, expected[, message[, operator[, stackStartFunction]]])

// 如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数。
assert.ifError(value)

// 测试 actual 参数与 expected 参数是否不深度相等。 与 assert.deepEqual() 相反。
assert.notDeepEqual(actual, expected[, message])

// 测试 actual 参数与 expected 参数是否不深度全等。 与 assert.deepStrictEqual() 相反。
assert.notDeepStrictEqual(actual, expected[, message])

// 使用不等运算符（!=）测试 actual 参数与 expected 参数是否不相等
assert.notEqual(actual, expected[, message])

// 使用不全等运算符（!==）测试 actual 参数与 expected 参数是否不全等。
assert.notStrictEqual(actual, expected[, message])

// 测试 value 是否为真值。 相当于 assert.equal(!!value, true, message)。
assert.ok(value[, message])

// 使用全等运算符（===）测试 actual 参数与 expected 参数是否全等。
assert.strictEqual(actual, expected[, message])

// 断言 block 函数会抛出错误
assert.throws(block[, error][, message])