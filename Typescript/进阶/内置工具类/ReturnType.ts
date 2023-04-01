function fn(...args: any[]): number {
  return 1
}

type MyReturnType<F extends (...args: any[]) => any> = F extends (...args: any[]) => infer R ? R : never

type cc = ReturnType<typeof fn>
type ccc = MyReturnType<typeof fn>

export {}
