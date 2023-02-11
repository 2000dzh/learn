// getBoundingClientRect方法返回的rect对象，具有以下属性（全部为只读）。

// x：元素左上角相对于视口的横坐标
// y：元素左上角相对于视口的纵坐标
// height：元素高度
// width：元素宽度
// left：元素左上角相对于视口的横坐标，与x属性相等
// right：元素右边界相对于左边视口的横坐标（等于x + width）
// top：元素顶部相对于视口的纵坐标，与y属性相等
// bottom：元素底部相对于上边视口的纵坐标（等于y + height）


// 由于元素相对于视口（viewport）的位置，会随着页面滚动变化，
// 因此表示位置的四个属性值，都不是固定不变的。如果想得到绝对位置，
// 可以将left属性加上window.scrollX，top属性加上window.scrollY。
// 注意，getBoundingClientRect方法的所有属性，都把边框（border属性）算作元素的一部分。
// 也就是说，都是从边框外缘的各个点来计算。因此，width和height包括了元素本身 + padding + border。
