isRef()
// 检查某个值是否为 ref
// 请注意，返回值是一个类型判定 (type predicate)，这意味着 isRef 可以被用作类型守卫：
// let foo: unknown
// if (isRef(foo)) {
// 	// foo 的类型被收窄为了 Ref<unknown>
// 	foo.value
// }
