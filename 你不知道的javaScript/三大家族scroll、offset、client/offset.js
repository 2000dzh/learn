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