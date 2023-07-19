;<KeepAlive></KeepAlive>
// 缓存包裹在其中的动态切换组件

// include 组件名称数组或逗号分隔的字符串或者正则,匹配的组件会被缓存
// exclude 组件名称数组或逗号分隔的字符串或者正则,匹配的组件不会被缓存
// max 最多可以缓存多少组件实例

// <script setup>
// import { onActivated, onDeactivated } from 'vue'
//
// onActivated(() => {
//   // 调用时机为首次挂载
//   // 以及每次从缓存中被重新插入时
// })
//
// onDeactivated(() => {
//   // 在从 DOM 上移除、进入缓存
//   // 以及组件卸载时调用
// })
// </script>

// onActivated 组件首次挂载也会执行,并且 onDeactivated 组件卸载时也会执行
// 这两个钩子不仅适用于 <KeepAlive> 缓存的根组件，也适用于缓存树中的后代组件。