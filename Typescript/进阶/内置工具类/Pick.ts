interface cc {
  name: string
  age: number
  move?: (...arg: any[]) => number
}

type MyPick<T, Keys extends keyof T> = {
  [k in Keys]: T[k]
}

type ccc = MyPick<cc, 'move' | 'age' >
type cccc = Pick<cc, 'move' | 'age' >

export {}
