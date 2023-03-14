import hyRequset from '..'

hyRequset
	.request({
		url: '/home/multidata',
	})
	.then((res) => {
		console.log(res.data)
	})
