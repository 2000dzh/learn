type toArr<T> = T extends any ? T[] : never

type a1 = toArr<string>

// 此时的类型是 string[] | number[],而不是 (string | number)[]
// 因为在泛型中使用条件类型的时候,如果传入的是一个联合类型,就会变成分发执行。
type a2 = toArr<string | number>

export {}
