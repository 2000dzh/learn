interface cc {
  name: string
  age: number
  move?: (...arg: any[]) => number
}

type MyOmit<T, Keys extends keyof T> = {
  [P in keyof T as P extends Keys ? never : P]: T[P]
}

type MyPick<T, Keys extends keyof T> = {
  [K in Keys]: T[K]
}

type MyExclude<T, K> = T extends K ? never : T

type MyOmit2<T, K> = MyPick<T, MyExclude<keyof T, K>>

type ccc = Omit<cc, 'move' | 'age'>
type cccc = MyOmit<cc, 'move' | 'age'>
type ccccc = MyOmit2<cc, 'move' | 'age'>


export {}
