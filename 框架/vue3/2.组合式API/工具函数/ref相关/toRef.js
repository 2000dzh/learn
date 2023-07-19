toRef()
// toRef 是基于响应式对象(reactive封装的)上的一个属性，创建一个对应的 ref 的方法。
// 这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然

// 即使源属性当前不存在，toRef() 也会返回一个可用的 ref。
// 这让它在处理可选 props 的时候格外实用，相比之下 toRefs 就不会为可选 props 创建对应的 refs
// <script setup>
// import { toRef } from 'vue'
//
// const props = defineProps(/* ... */)
//
// // 将 `props.foo` 转换为 ref，然后传入
// // 一个组合式函数
// useSomeFeature(toRef(props, 'foo'))
// </script>
