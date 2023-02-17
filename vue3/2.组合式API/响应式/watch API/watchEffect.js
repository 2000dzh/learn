// watchEffect()
// 立即执行一个函数,同时响应式追踪其依赖,并在依赖更改时重新执行。

// watchEffect的响应式追踪其依赖
// watchEffect仅会在其同步执行期间,才追踪依赖。
// 案例
// 模拟异步
// const getList = (num: number) => {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve("成功");
// 		}, 2000);
// 	});
// };
// const count = ref(0)
//  watchEffect(async() => {
//   // 在使用异步回调时,只会追踪第一个 await 正常工作前访问到的响应式属性才会被追踪
//   const res = await getList(count)
//   // 后面代码的响应式属性都不被追踪
//  })
// 所有异步执行的代码其中的响应式属性都不会被追踪

// watch vs watchEffect
// wacth和watchEffect都能响应式地执行副作用的回调。它们之间的主要区别是追踪响应式依赖的方式
// watch: 只会追踪明确的数据源,所以 watch 会避免在发生副作用时追踪依赖,因此我们能更加准确控制回调函数的触发时机。
// watchEffect: 会在同步执行过程中,自动追踪所有能访问到的响应式属性,这样代码会更整洁,但有时其响应式依赖关系会不那么明确。


// watchEffect相对watch的优化(当需要追踪多个依赖时)
// 当你需要侦听一个嵌套数据结构中的几个属性,watchEffect()可能会比深度侦听器更有效,
// 因为它将只跟踪回调中使用到的属性,而不是递归地跟踪所有的属性。

// 回调的触发时机
// 当你更改了响应式状态,它可能会同时触发Vue组件更新和侦听器回调。
// 默认情况下侦听器回调,都会在vue组件更新前触发。这意味你侦听器中如果访问的dom是Vue更新之前的状态
// 如果你想侦听器回调中能访问Vue更新之后的dom,你需要指明 flush: 'post'
// watch(source, callback, {
//   flush: 'post'
// })

// watchEffect(callback, {
//   flush: 'post'
// })


// 停止侦听器
