// never
// 是其他任意类型的子类型被称为底部类型
// never类型表示的是那些永不存在的值的类型

// 在 ts 中never表示空类型和底部类型。 never类型的变量无法被赋值,于其他类型求交集为自身
// 求

interface SomeProps {
  a: string
  b: number
  c: (e: MouseEvent) => void
  d: (e: TouchEvent) => void
}
// 如何得到 'c' | 'd' ？

type GetKeyByValueType<T, Condition> = {
  [K in keyof T]: T[K] extends Condition ? K : never
}[keyof T]

type FunctionPropNames =  GetKeyByValueType<SomeProps, Function> // 'c' | 'd'


export {}
