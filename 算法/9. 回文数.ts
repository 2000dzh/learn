// 经典双指针
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false
  }
  let str = x + ''

  let left = 0,
    right = str.length - 1

  while (right > left) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
