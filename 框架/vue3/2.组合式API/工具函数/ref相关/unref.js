unref()
// 如果参数是 ref,则返回内部值,否则返回参数本身。
// 这是 val = isRef(val) ? val.value : val 计算的一个语法糖。

// 示例
// function useFoo(x: number | Ref<number>) {
//   const unwrapped = unref(x)
//   // unwrapped 现在保证为 number 类型
// }
