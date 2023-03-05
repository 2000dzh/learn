// 声明字面量类型
const myname = 'dzh'
let myage: 18 = 18

// 将多个字面量类型联合起来
type Direction = 'left' | 'right' | 'top' | 'botoom'
const d1: Direction = 'botoom'

// 直接让info对象类型是一个字面量类型
const info2 = {
  url: "xxxx",
  method: "post"
} as const


export {}