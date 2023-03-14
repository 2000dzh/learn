interface info {
	name: string
	age: number
}

type saddsa = {
	name: string
}

// 获取类型的所有key组成的联合类型
type assa = keyof saddsa

function getUserInfo<T extends { length: number }, k extends keyof T>(
	args: T,
	name?: k
) {
	return args
}

const a = getUserInfo(['12'], 'length')
const b = getUserInfo('1221')
getUserInfo(2121)
getUserInfo({})
getUserInfo(true)

type AP = keyof info

export {}
