interface cc {
  name: string
  age: number
  move?: (...arg: any[]) => number
}

type Res = keyof any

type MyRecord<Keys extends Res, Type> = {
  [k in Keys]: Type
}

type ccc = MyRecord<keyof cc, cc>
type ccc1 = Record<keyof cc, cc>

export {}
