/// s = 'PAYPALISHIRING' numRows = 4
//  P     I     N    res[0] = PIN
//  A   L S   I G    res[1] = ALSIG
//  Y A   H R        res[2] = YAHR  
//  P     I          res[3] = PI
// 由此规律可知,我们只要把每个字符串添到对应的 res[j]

// 流程
// 按顺序遍历字符串 s
// 1. res[j] += c: 把每个字符串填入对应的行
// 2. j += flag: 更新字符对应的索引
// 3. flag = -flag: 到达 Z 字形转折点时,执行反转

function convert(s: string, numRows: number): string {
  if (numRows < 2) {
    return s
  }
  const res = Array.from<unknown, string[]>({ length: numRows }, function () {
    return []
  })

  let j = 0,
    flag = -1

  for (let item of s) {
    res[j].push(item)
    if (j === 0 || j === numRows - 1) {
      flag = -flag
    }
    j += flag
  }

  return res.map((arr) => arr.join('')).join('')
}
