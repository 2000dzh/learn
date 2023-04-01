type CalcType = (num1: number, num2: number) => number

function foo() {
  return 'foo'
}

// infer一定用在 extends 语句后表示待推断的类型
// 获取一个函数的返回值类型
type CalcReturnType = ReturnType<CalcType>
type FooReturnType = ReturnType<typeof foo>

type MyReturn<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never
type MyParameterType<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? A : never

type CalcReturnType1 = MyReturn<CalcType>
type FooReturnType1 = MyReturn<typeof foo>

type GetReturnType<Type> = Type extends (...args: never[]) => infer Retunr ? Retunr : never

export {}
