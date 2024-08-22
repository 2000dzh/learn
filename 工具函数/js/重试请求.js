function sleep () {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

function request (promiseTask, maxCount = 3) {
  return promiseTask().catch(() => maxCount <= 0 ? Promise.reject('超出最大请求次数') : request(promiseTask, maxCount - 1))
}


request(sleep, 6).then(console.log).catch(console.log)