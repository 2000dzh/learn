v-on
// 修饰符
// 1. .stop 调用event.stopPropagation() 阻止冒泡
// 2. .prevent 调用 event.preventDefault() 阻止默认行为
// 3. .capture - 在捕获模式添加事件监听器(默认是采用冒泡从内到外触发事件,此修饰符采用捕获从外到内触发事件)
// 4. .self 只有事件从元素本身发出才触发处理函数
// 5. .once 最多触发一次处理函数
// 6. .left 只在鼠标左键事件触发处理函数
// 7. .right 只在鼠标右键事件触发处理函数
// 8. .middle 只在鼠标中键事件触发处理函数
// 8. .passive 通过 { passive: true } 附加一个 DOM 事件