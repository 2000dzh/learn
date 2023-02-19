toRefs()
// 将一个响应式对象(reactive封装的)转换为一个普通对象,这个普通对象的每个属性都指向源对象相应属性的ref。每一个ref都是使用 toRef() 创建的。

// 当从组合式函数中返回响应式对象时，toRefs 相当有用。使用它，消费者组件可以解构/展开返回的对象而不会失去响应性：
// function useFeatureX() {
//   const state = reactive({
//     foo: 1,
//     bar: 2
//   })

//   // ...基于状态的操作逻辑

//   // 在返回时都转为 ref
//   return toRefs(state)
// }

// // 可以解构而不会失去响应性
// const { foo, bar } = useFeatureX()
// toRefs 在调用时只会为源对象上可以枚举的属性创建 ref。如果要为可能还不存在的属性创建 ref，请改用 toRef。
