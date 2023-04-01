interface cc {
  name: string
  age: number
  move?: (...arg: any[]) => number
}

type MyPartial<Type> = {
  [key in keyof Type]?: Type[key]
}

type ccc = MyPartial<cc>
type ccc1 = Partial<cc>

export {}
