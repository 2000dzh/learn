interface IKun {
	name: string
	age: number
	slogan: string

	playBasketball: () => void
}

interface IRun {
	running: () => void
}

// 作用: 接口被类实现
class Persion implements IKun, IRun {
	name: string
	age: number
	slogan: string

	playBasketball() {}

	running() {}
}

const ikun2 = new Persion()
const ikun3 = new Persion()

export {}
