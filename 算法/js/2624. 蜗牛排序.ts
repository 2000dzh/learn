// 和 6.N字形变换特别像
function snail(arr: number[], rowsCount: number, colsCount: number): number[][] {
  if (arr.length !== rowsCount * colsCount) {
    return []
  }

  const result = Array.from<unknown, number[]>({ length: rowsCount }, () => [])
  let j = 0
  let direction = true

  for (let item of arr) {
    result[j].push(item)
    if (direction) {
      if (j === rowsCount - 1) {
        direction = false
      } else {
        j++
      }
    } else {
      if (j === 0) {
        direction = true
      } else {
        j--
      }
    }
  }

  return result
}
