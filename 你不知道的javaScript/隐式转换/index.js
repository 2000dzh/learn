// 对于基础类型之间比较
// 有两个特殊的 null 和 undefined
// null == undefined true(会触发隐式转换所以相等,除此之外 null 或 undefined于其他基础类型比较全都是不相等因为不会触发隐式转换)
// 其他情况 相同类型之间比较值,不同类型之间转换成数字进行比较
// NaN 谁也不等于

// 对于引用数据类型之间比较的是内存中的指针

// 对于引用类型和基础类型之间比较
// 引用类型会先尝试调用 valueOf() 方法转换成基础类型,不行的话会调用 toString() 方法 (调用 Array.prototype.toString 方法是使用 Array.prototype.join)
// 总之引用数据类型先转换为基础数据类型之后再比较
