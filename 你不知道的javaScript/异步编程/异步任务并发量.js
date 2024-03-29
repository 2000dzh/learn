function sleep(time = 1000, name) {
  return new Promise((resolve) => {
    console.log(`${name}开始了`)
    setTimeout(() => {
      console.log(`${name}结束了`)
      resolve(name)
    }, time)
  })
}

const tasks = [() => sleep(0, '吃饭'), () => sleep(0, '打游戏'), () => sleep(1000, '写代码'), () => sleep(8000, '做运动')]


async function asyncPool1(tasks, items = 2) {
  const taskPool = new Set()
  const results = []
  for (const task of tasks) {
    // 等待任务池中有空闲任务槽
    while (taskPool.size >= items) {
      await Promise.race(taskPool)
    }

    // 将新任务添加到任务池
    const promise = task()
    // 如果 tasks 包含同步任务可以这么写
    // taskPool.add(Promise.resolve(promise));
    taskPool.add(promise)

    // 等待任务完成后，从任务池中移除
    promise
      .then((result) => {
        taskPool.delete(promise)
        results.push({ status: 'fulfilled', value: result })
      })
      .catch((error) => {
        taskPool.delete(promise)
        results.push({ status: 'rejected', reason: error })
      })
  }

  // 等待所有任务完成并返回结果
  await Promise.allSettled(taskPool)
  return results
}


async function asyncPool(tasks = [], items = 2) {
  const taskPool = new Set()
  for (const task of tasks) {
    const promise = task()
    taskPool.add(promise)
    promise.then(() => {
      taskPool.delete(promise)
    })
    if (taskPool.size >= items) {
      await Promise.race(taskPool)
    }
  }
  console.log(taskPool)
  return Promise.allSettled(taskPool)
}

// asyncPool1(tasks).then((res) => {
//   console.log(res)
//   console.log('任务全部执行完毕')
// })


// asyncPool1(tasks).then((res) => {
//   console.log(res)
//   console.log('任务全部执行完毕')
// })

// 循环发请求
async function fn(arr) {
  const res = await Promise.allSettled(
    arr.map(async (item) => {
      const data = await item()
      return data
    })
  )
  console.log(res)
}
// fn(tasks)

async function async1() {
  const res = await async2()
  console.log(res)
  console.log('成功3')
}

async function async2() {
  return new Promise((resolve) => {
    resolve('成功1')
  }).then((res) => {
    console.log(res)
    return '2112'
  })

  // console.log(res)
}

async1()

new Promise((resolve) => {
  resolve('成功2')
}).then((res) => {
  console.log(res)
})
