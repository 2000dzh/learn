
//  JS 中用递归思想解决数组拍平问题
/**
 * @description 拍平数组(缺点过多创建 函数调用栈 在处理大型数据的时候可能会导致栈溢出)
 * @param arr 
 * @param n 深度
 * @returns 
 */
function flatten (arr, n = Infinity) {
  if (arr.length === 0) {
    return []
  }
  if (n <= 0) {
    return arr
  }
  const [first, ...rest] = arr
  if (Array.isArray(first)) {
    return [...flatten(first, n - 1), ...flatten(rest)]
  }

  return [first, ...flatten(rest)]
}

/**
 * @description 拍平数组
 * @param arr 
 * @param n 深度
 * @returns 
 */
function flatten1 (arr, n = Infinity) {
  if (arr.length === 0) {
    return []
  }
  if (n <= 0) {
    return arr
  }

  let result = []
  for (let item of arr) {
    result.push(...(Array.isArray(item) ? flatten1(item, n - 1) : [item]))
  }
  return result
}