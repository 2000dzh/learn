interface cc {
  name: string
  age: number
  move?: (...arg: any[]) => number
}

type MyReadonly<Type> = {
  readonly [key in keyof Type]: Type[key]
}

type ccc = MyReadonly<cc>

export {}
