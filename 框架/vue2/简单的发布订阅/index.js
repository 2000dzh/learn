import on from './utils/on'
import emit from './utils/emit.js'
import off from './utils/off.js'
import once from './utils/once.js'

function Vue () {
  this._events = Object.create(null)
}

Vue.prototype.$on = on
Vue.prototype.$emit = emit
Vue.prototype.$off = off
Vue.prototype.$once = once

const App = new Vue()

const fn = (...args) => console.log('event2', args)
const fn2 = (...args) => console.log('once event2', args)

App.$on('event1', () => console.log('event1'))
App.$on('event2', fn)
App.$on(['event3', 'event4'], () => console.log('event6'))

App.$emit('event2', 1, 2, 3)
App.$emit('event3', 3)

// 传递未监听的 event
console.log(App.$off('event999999')) // 不进行任何操作,返回当前实例

// 传递监听的 event,但没有传递 fn
console.log(App.$off('event3')) // 清空当前响应列表,返回当前实例

// 传递监听的 event,和对应的fn
App.$off('event2', fn) // 移除当前监听的事件的 fn

// 什么参数都不传递,移除全部事件监听
// App.$off()

console.log(App.$once('event2', fn2))
App.$emit('event2', 1, 2, 3)




console.log(App)