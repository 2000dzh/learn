interface cc {
  name?: string
  age: number
  move?: (...arg: any[]) => number
}

type MyRequired<T> = {
  [key in keyof T]-?: T[key]
}

type ccc = MyRequired<cc> 
type ccc1 = Required<cc> 

export {}