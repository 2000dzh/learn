// 父类型更窄,更具体
// 子类型更宽泛
// 子类型可以赋值给父类型,而父类型不能赋值给子类型

type Father = 1 | '1' | '2' | 2
type Son = 1

let father: Father = 2
let son: Son = 1

// son = father   父类型不能赋值给子类型
father = son

// 联合类型中的部分是整体的子类型
// 1| 2 是 1 | 2 | 3 的子类型

// never 类型是所有类型的子类型
