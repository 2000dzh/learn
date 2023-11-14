function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return ''
  }
  const minStr = strs.reduce((pre, item) => {
    if (pre.length > item.length) {
      return item
    }
    return pre
  }, strs[0])

  for (let i = 0; i < minStr.length; i++) {
    const s = minStr.slice(0, i + 1)
    const flag = strs.every((item) => item.slice(0, i + 1) === s)

    if (!flag) {
      return minStr.slice(0, i)
    }
  }
  return minStr
}
longestCommonPrefix(['flo1', 'flo2', 'flo3'])
longestCommonPrefix(['flo1656','flo12gf','flo13'])
