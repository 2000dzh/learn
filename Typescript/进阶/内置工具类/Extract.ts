interface cc {
  name: string
  age: number
  move?: (...arg: any[]) => number
}

type MyExtract<T,K> =  T extends K ? T : never

type ccc = Extract<keyof cc , 'name' | 'age'>
type cccc = MyExtract<keyof cc , 'name' | 'age'>

export {}
