interface cc {
  name: string
  age: number
  move?: (...arg: any[]) => number
}

type MyExcude<T, U> = T extends U ? never : T

type ccc = MyExcude<keyof cc, 'move' | 'age' >
type ccc1 = Exclude<keyof cc, 'move' | 'age'>

export {}
