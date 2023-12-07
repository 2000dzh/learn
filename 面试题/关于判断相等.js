// js提供了三种不同的值比较运算

// 1. == 宽松相等
// 2. === 严格相等 (Array.prototype.indexOf, Array.prototype.lastIndexOf)
// 3. Object.is() 同值相等
// 4. 零值相等,不作为 js API 公开(Array.prototype.includes, Map Set 用来比较键的相等性)


// 在比较两个数时
// 双等号会进行类型转换,并且会按照 IEEE 754 标椎对 NaN +0 -0 进行特殊处理(标椎为 NaN != NaN, +0 == -0)
// 三等不会进行类型转换,遵循标椎
// Object.is 同值相等 即不进行类型转换,也不遵循标椎(与严格相等唯一的不同就是不遵循标椎)
// 零值相等,于严格相等不同是其将 NaN 视作相等,与同值相等的区别在于其将 -0 和 +0 视作相等
function sameValueZero (x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x === y || (x !== x && y !== y)
  }
  return x === y
}


// 1.判断两个数组是否相等
function fn (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  // Array.prototype.indexOf 内部使用 === 严格相等所以对于 NaN 始终返回 -1
  // return arr1.some(item => arr2.indexOf(item))
  return arr1.some(item => arr2.includes(item))
}
const arr1 = ["apple", "banana", NaN]
const arr2 = ["apple", NaN, "banana"]
console.log(fn(arr1, arr2)) //true

// 无法检测重复的元素
const array1 = ["apple", "banana", "cherry", "banana"];
const array2 = ["banana", "apple", "apple", "cherry"];
console.log(fn(array1, array2)) //true X false

// 2.统计元素次数
function fn2 (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  const map1 = count(arr1)
  const map2 = count(arr2)

  function count (arr) {
    const map = new Map()
    for (let item of arr) {
      map.set(item, (map.get(item) || 0) + 1)
    }
    return map
  }


  for (const [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false
    }
  }

  return true
}
console.log(fn2(array1, array2))

// 3
function fn3 (arr1, arr2) {
  const hasMap = new Map()
  for (let item of arr1) {
    hasMap.set(item, (hasMap.get(item) || 0) + 1)
  }

  for (let item of arr2) {
    const val = hasMap.get(item)
    if (val === undefined || val <= 0) {
      return false
    }
    hasMap.set(item, val - 1)
  }

  console.log(hasMap)

  return true
}
fn3(array1, array2)
