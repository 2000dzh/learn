// Partial
// Partial<T> 将 T 中所有的属性转化为可选属性。
type PARTIAL<T> = {
	[K in keyof T]?: T[K]
}
