// 这题没看,直接抄的答案
function reverse(x: number): number {
  let res = 0

  // x 不断左移，最后一定是 0
  while (x) {
    //每次取末尾数字
    let tmp = x % 10

    //判断是否 大于 最大32位整数（最大32位数字为 2147483647）
    if (res > 214748364 || (res === 214748364 && tmp > 7)) {
      return 0
    }
    //判断是否 小于 最小32位整数（最小32位数字为 -2147483648）
    if (res < -214748364 || (res === -214748364 && tmp < -8)) {
      return 0
    }

    res = res * 10 + tmp
    x = ~~(x / 10)
  }

  return res
}
