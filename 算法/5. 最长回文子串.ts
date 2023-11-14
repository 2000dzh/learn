// 输入：s = "cbbd"
// 输出："bb"
//  -1 0 1 2 3

function longestPalindrome(s: string): string {
  const len = s.length

  if (len < 2) {
    return s
  }

  let res = ''
  for (let i = 0; i < len; i++) {
    // 回文字符串是奇数
    helper(i, i)

    // 回文字符串是偶数
    helper(i, i + 1)
  }

  function helper(m: number, n: number) {
    while (m >= 0 && n < len && s[m] === s[n]) {
      m--
      n++
    }

    // 注意此处m,n的值循环完毕,是恰好不满足循环条件的时刻,
    // 此时 m 到 n 的距离为 n - m + 1,但是 m n 两个边界值不能取,所以应该取 m + 1 到 n - 1 的区间长度为 n - m - 1
    if (n - m - 1 > res.length) {
      res = s.slice(m + 1, n)
    }
  }

  return res
}

// 使用双指针替代每次循环截取字符串
function longestPalindrome1(s: string): string {
  const len = s.length

  if (len < 2) {
    return s
  }

  let res = ''
  let l = 0
  let r = 0
  for (let i = 0; i < len; i++) {
    helper(i, i)
    helper(i, i + 1)
  }

  function helper(m: number, n: number) {
    while (m >= 0 && n < len && s[m] === s[n]) {
      m--
      n++
    }

    if (n - m - 1 > r - l - 1) {
      r = n
      l = m
    }
  }

  return res.slice(l + 1, r)
}

export {}
