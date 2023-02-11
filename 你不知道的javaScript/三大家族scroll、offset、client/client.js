clientHeight(只读属性)
// 元素的可见高度,包含元素的内容区和内边距,不包括边框、外边距和水平滚动条（如果存在）
// clientHeight属性返回一个整数值(会四舍五入)，表示元素节点的 CSS 高度（单位像素)
// 只对块级元素生效，对于行内元素返回0。如果块级元素没有设置 CSS 高度，则返回实际高度。
// clientHeight 可以通过 CSS height + CSS padding - 水平滚动条高度（如果存在）来计算

clientWidth(只读属性) // 和clientHeight基本相同

//document.documentElement的clientHeight属性，返回当前视口的高度（即浏览器窗口的高度），
//等同于window.innerHeight属性减去水平滚动条的高度（如果有的话）。document.body的高度则是网页的实际高度。
//一般来说，document.body.clientHeight大于document.documentElement.clientHeight。
// 视口高度
document.documentElement.clientHeight

// 网页总高度
document.body.clientHeight

// client家族
// clientHeight:   元素高，height+padding;
// window.innerHeight; document.body.clientHeight     可视区域的高
// clientWidth:    元素宽，width+padding;
// window.innerWidth;  document.documentElementWidth; 可视区域的宽
// clientTop:      元素的上border宽
// clientLeft:     元素的左border宽
// clientY     调用者：event.clientY(event)（重要）
// 作用：鼠标距离浏览器可视区域的距离，上
// clientX     调用者：event.clientX(event)（重要）
// 作用：鼠标距离浏览器可视区域的距离，左
