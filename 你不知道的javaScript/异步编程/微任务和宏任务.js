// event loop
// 同步任务放到执行栈(Call Stack)中一行一行执行
// 遇到异步任务,会先记录,等待时机触发
// 等待状态完成,就会移动到 Callback Queue
// 如果 Call Stack 为空(即同步代码执行完) Event Loop 开始工作
// 轮询查找 Callback Queue,如有则移动到 Call Stack 执行
// 然后继续轮询查找(上述过程反复执行)

const App = document.getElementById('app')
const a1 = document.createElement('div')
a1.innerHTML = '测试1'
const a2 = document.createElement('div')
a2.innerHTML = '测试2'
const a3 = document.createElement('div')
a3.innerHTML = '测试3'
App.appendChild(a1)
App.appendChild(a2)
App.appendChild(a3)
console.log(App)

// 微任务: Promise 的 then 方法,MutationObserver
// 微任务队列 micro task queue
// 微任务: DOM渲染前触发 微任务是ES6语法规定
// 微任务的执行优先级比宏任务高,先清空当前微任务队列后,再去执行下一个宏任务
Promise.resolve().then(() => {
  console.log('微任务', App.children.length)
  console.log(App)
  App.innerHTML = '123'
  alert('微任务,Promise then') // 此时 DOM没有渲染
})

// 常见宏任务: setTimeout,setInterval,网络请求,DOM事件(如 click、load、scroll 等)
// 宏任务队列 Callback Quque
// 宏任务: DOM渲染后触发 由浏览器规定（Web APIs）
setTimeout(() => {
  console.log('宏任务', App.children.length)
  alert('宏任务,setTimeout') // // 此时 DOM渲染了
})


// 微任务,宏任务和DOM渲染的关系
// 1.Call Stack清空(同步任务执行完毕)
// 2.执行当前的微任务
// 3.尝试DOM渲染
// 触发Event Loop

// 微任务,宏任务和DOM渲染,在 event loop 的过程