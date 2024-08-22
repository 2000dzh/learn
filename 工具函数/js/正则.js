
// 去除指定属性
str.replace(/id=".*?"/g, "")
// 去除svgid
decodeURI('').replace(/id=".*?"/g, "")

// 去除指定字符(\\n)
str.replace(/\\n/g, '')
