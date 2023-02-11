scrollHeight(只读属性)
// 1.在没有手动设置滚动条时
//   (1) 元素的内容没有溢出 scrollHeight(包含 padding-top,padding-bottom) === clientHeight
//   (2) 元素的内容溢出(即时设置了溢出隐藏!) scrollHeight(包含padding-top) === 适应视口中所用内容所需的最小高度
// 2.手动设置滚动条
//   (1) 元素的内容没有溢出 scrollHeight(包含 padding-top,padding-bottom) === clientHeight
//   (2) 元素的内容溢出 scrollHeight(包含 padding-top,padding-bottom) === 元素内容总高度

scrollWidth(只读属性)

scrollTop(读写属性)
// 1.有垂直方向滚动条时 scrollTop === 元素内容顶部(被卷去的长度)到视口可见内容的顶部的距离
// 2.没有垂直方向滚动条时 scrollTop === 0

scrollLeft(读写属性)
// 1.有水平方向滚动条时 scrollLeft === 元素内容顶部(被卷去的长度)到视口可见内容的顶部的距离
// 2.没有水平方向滚动条时 scrollLeft === 0

// 判断元素是否滚动到底
// 因为 scrollTop是一个非整数,而 scrollHeight和clientHeight是四舍五入的,因此确定滚动区域是否滚动到底的
// 唯一方法是查看滚动量是否足够接近某个阀值
Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1 (垂直方向)
Math.abs(element.scrollWidth - element.clienWidth - element.scrollLeft) < 1 (水平方向)

// 返回网页的总高度
document.documentElement.scrollHeight
document.body.scrollHeight

// 整张网页的水平的和垂直的滚动距离
document.documentElement.scrollLeft
document.documentElement.scrollTop


// scroll家族
// scrollHeight:   内容高，不含border
// scrollWidth:    内容宽，不含border
// scrollTop:      document.documentELement.scrollTop || document.body.scrollTop; （重要）window.pageXOffset;
// 浏览器页面被卷去的头部
// 元素调用.必须具有滚动条的盒子调用。盒子本身遮挡住的子盒子内容。
// 子盒子被遮挡住的头部
// scrollLeft:     document.documentELement.scrollLeft:  || document.body.scrollLeft: ; （重要）window.pageYOffset;
// 浏览器页面被卷去的左侧
// 元素调用.必须具有滚动条的盒子调用。盒子本身遮挡住的子盒子内容。
// 子盒子被遮挡住的左侧

