// 类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内


// 1.in关键字
type Keys = "a" | "b" | "c"

interface kk {
  a: string
}

type Obj =  {
  [p in Keys]?: any
} // -> { a: any, b: any, c: any }

let obj: Obj = {
  a: '1221',
 
 
}