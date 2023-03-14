function fn<TP>(name: TP): TP {
	return name
}

fn<string>('2121')
fn(21212)

// 元组: useState函数
function useState<TP>(initState: TP): [TP, (k: TP) => void] {
	let state = initState
	function setState(newValue: TP) {
		state = newValue
	}
	return [state, setState]
}

const [count, setCount] = useState(100)

// 平时开发常用的缩写
// T: Type的缩写,类型
// K,V: Key和Value的缩写,键值对 
// E: Element的缩写,元素
// O: Object的缩写,对象


export {}
