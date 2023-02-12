// 1.访问props,
// 如果要解构props对象,需要使用 toRefs和toRef来处理否则会失去响应式
// (1)
// export default {
// 	props: {
// 		name: String,
// 	},
// 	setup(props) {
// 		console.log(props.name)
// 	},
// }
// (2)
// <script lang="ts" setup>
// const props = defineProps({
//   name: String,
// });
// console.log(props.name)
// const emit = defineEmits(['change', 'delete'])
// </script>

// 2.setup上下文
// (1)
// 该上下文对象是非响应式的，可以安全地解构
// export default {
//   setup(props, context) {
//     // 透传 Attributes（非响应式的对象，等价于 vue2的$attrs）
//     console.log(context.attrs)

//     // 插槽（非响应式的对象，等价于 $slots）
//     console.log(context.slots)

//     // 触发事件（函数，等价于 $emit）
//     console.log(context.emit)

//     // 暴露公共属性（函数）
//     console.log(context.expose)
//   }
// }
// (2)
// 在 <script setup> 使用 slots 和 attrs 的情况应该是相对来说较为罕见的，
// 因为可以在模板中直接通过 $slots 和 $attrs 来访问它们
// <script setup>
// import { useSlots, useAttrs,ref } from 'vue'
// 
// const slots = useSlots()
// const attrs = useAttrs()
// const a = ref(2)
// defineExpose() 显示暴露出组件内部属性(默认关闭)// 自动引入
// defineExpose({ 
//   a,
// })
// </script>

// 搭配渲染函数使用
// 待补充

