// className
// 是一个可读写属性 elem.className += 'content'

// classList
// 只读属性,返回由元素 class 组成的集合
// 示例
// 添加/移除类。
div.classList.add('anotherclass')
div.classList.remove('anotherclass')
// 如果 visible 类值已存在，则移除它，否则添加它
div.classList.toggle('visible')
// 检查给定类，返回 true/false
div.classList.contains('foo')
// 将类值 "foo" 替换成 "bar"
div.classList.replace('foo', 'bar')

// 重置样式属性
// 有时我们通过style修改元素属性,然后又想还原。
div.style.display = 'none'
// 我们可以将 style.display 设置为空字符串，那么浏览器通常会应用 CSS 类以及内建样式，就好像根本没有这样的 style.display 属性一样。
div.style.display = ''
// 还有一个特殊的方法 elem.style.removeProperty('style property')。所以，我们可以像这样删除一个属性：
document.body.style.background = 'red' //将 background 设置为红色
setTimeout(() => document.body.style.removeProperty('background'), 1000) // 1 秒后移除 background

//计算样式：getComputedStyle 只读
// 读取css样式
let computedStyle = getComputedStyle(document.body)
computedStyle.marginTop // 5px
// getComputedStyle 可以从伪元素拉取样式信息
let h3 = document.querySelector('h3')
getComputedStyle(h3, '::after').content
