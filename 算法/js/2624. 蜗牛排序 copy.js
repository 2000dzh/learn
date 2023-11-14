function snail (arr, rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) {
    return [];
  }

  const result = Array.from({ length: rowsCount }, function () {
    return []
  })

  let j = 0,
    flag = -1

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    result[j].push(item)

    if (i === 0 || (i + 1) % rowsCount !== 0) {
      if (j === 0 || j === rowsCount - 1) {
        flag = -flag
      }
      j += flag
    }


  }

  return result
}
// snail([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15], 5, 4)
snail([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 6, 3)
