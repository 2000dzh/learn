// 假设它是我们需要进行的请求
let successCb = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功！')
  }, 2000)
})
// 这是我们需要进行判断的时长的错误请求
let failedCb = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('失败！')
  }, 3000)
})
// 我们可以判断，如果当前返回的是错误的请求，代表另外的请求已经超时
Promise.race([failedCb, successCb])
  .then((res) => {
    console.log(res)
  })
  .catch((e) => {
    console.log(e)
  })

const arr = [1, [2, 3]]

//  JS 中用递归思想解决数组拍平问题
function flatten(arr: any[]): any {
  if (arr.length === 0) {
    return
  }
  const [first, ...rest] = arr
  if (Array.isArray(first)) {
    return [...flatten(first), ...flatten(rest)]
  }

  return [first, ...flatten(rest)]
}

// TS 中用递归思想解决数组拍平问题
type Flatten<T extends any[]> = T extends [infer first, ...infer rest]
  ? first extends any[]
    ? [...Flatten<first>, ...Flatten<rest>]
    : [first, ...Flatten<rest>]
  : []

type GetType<T extends any[]> = {
  [P in T[number]]: T[P] extends (...args: any[]) => infer R ? R : T[P]
}

type Join<T extends string> = T extends `${infer first}${infer Rest}` ? [first, ...Join<Rest>] : [T]

export {}
