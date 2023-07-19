shallowRef()
// ref的浅层作用形式
// 与 ref 不同的是不会深层递归转换为响应式。只有对 .value的访问是响应式的。

triggerRef()
// 强制触发一个浅层ref的副作用
// 常用于对浅应用 shallowRef的内部值进行深度变更时

customRef()
// 创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。