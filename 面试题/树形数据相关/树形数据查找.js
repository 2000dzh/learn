// 递归查找
function recursivelookup(arr, id, index = 0) {
  if (index >= arr.length) {
    return null
  }

  const obj = arr[index]

  if (obj.id === id) {
    return obj
  }

  if (obj.children && obj.children.length) {
    const result = recursivelookup(obj.children, id, 0)
    if (result) {
      return result
    }
  }

  return recursivelookup(arr, id, index + 1)
}
