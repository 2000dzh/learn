function foo(this: { name: string }, info: { name: string }) {
	console.log(this, info)
}
// 获取函数类型
type FooType = typeof foo

// 内置工具类, ThisParameterType 获取函数的 this 类型
type FooThisType = ThisParameterType<FooType>

// 内置工具类, OmitThisParameter 删除 this 参数类型,剩余的函数类型
type PureFooType = OmitThisParameter<FooType>

// 内置工具类, ThisType  用于绑定一个上下文的this
interface IState {
	name: string
	age: number
}

interface IStore {
	state: IState
	eating: () => void
	running: () => void
}

const store: IStore & ThisType<IState> = {
	state: {
		name: 'why',
		age: 18,
	},
	eating: function () {
		console.log(this.name)
	},
	running: function () {
		console.log(this.name)
	},
}

store.eating.call(store.state)

export {}
