offsetHeight(只读属性)
// offsetHeight === 元素本身的高度 + 上下padding + 上下border + 水平滚动条高度(存在滚动条)

offsetWidth(只读属性)
// offsetWidth === 元素本身的宽度 + 左右padding + 左右border + 垂直滚动条高度(存在滚动条)

// 注意
// 1.如果元素被隐藏（例如 元素或者元素的祖先之一的元素的 style.display 被设置为 none），则返回 0
// 2.会四舍五入为整数
// 3.只比Element.clientHeight和Element.clientWidth多了边框的高度或宽度

offsetParent(只读属性)
// 返回一个距离最近且有包含关系的祖先定位元素,或者是最近的 table td th body
// 1.如果当前元素有 fixed 定位 => dom.offsetParent 返回 null
// 2.如果当前元素有 绝对定位或相对定位  => dom.offsetParent 返回 body
// 3.body的 offsetParent 是null
// 当元素的 style.display 设置为 "none" 时，offsetParent 返回 null

offsetLeft和offsetTop(只读属性)
// offsetLeft返回当前元素左上角相对于最近的开启了定位的节点的水平位移
// offsetTop返回垂直位移，单位为像素。通常，这两个值是指相对于父节点的位移。
// (如果没有设置定位父元素，就是相对于页面左上角的位置(offsetParent === body),top是距离顶部的距离,left是最左边的距离)

// 元素左上角相对于整张网页的坐标
function getElementPosition(e) {
	let x = 0
	let y = 0
	while (e !== null) {
		x += e.offsetLeft
		y += e.offsetTop
		e = e.offsetParent
	}
	return { x: x, y: y }
}

// offset家族
// offsetHeight:   元素高，height+border+padding
// offsetWidth:    元素宽，width+border+padding
// offsetTop:      上边距离带有定位的父盒子的距离（重要）
// offsetLeft: 左边距离带有定位的父盒子的距离（重要）
// offsetParent:   最近的带有定位的父盒子
