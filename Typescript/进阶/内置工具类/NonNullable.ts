type cc = 'name' | 'age' | null | undefined

type MyNonNullable<Type> = Type extends null | undefined ? never : Type

type ccc = NonNullable<cc>
type cccc = MyNonNullable<cc>

export {}
