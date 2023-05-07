onmessage = e => {
	console.log('接收到了', e)
}

setInterval(() => {
	console.log('过了一秒了')
}, 1000)

postMessage('hello world by hello world')