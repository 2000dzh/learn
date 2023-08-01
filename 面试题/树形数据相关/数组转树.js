/** 数组结构数据 */
const arrayData = [
  { id: 2, title: '中国', parent_id: 0 },
  { id: 3, title: '广东省', parent_id: 2 },
  { id: 4, title: '广州市', parent_id: 3 },
  { id: 5, title: '天河区', parent_id: 4 },
  { id: 6, title: '湖南省', parent_id: 2 },
  { id: 1, title: '俄罗斯', parent_id: 0 },
]

// 递归
// function arrayToTree(data, pid) {
//   const result = []
//   for (const item of data) {
//     // 查找父节点
//     if (item.parent_id === pid) {
//       // 递归调用,将子节点转化为子树
//       const children = arrayToTree(data, item.id)

//       if (children.length) {
//         item.children = children
//       } else {
//         item.children = null
//       }

//       result.push(item)
//     }
//   }
//   return result
// }
// console.log(arrayToTree(arrayData, 0))

// 循环
function arrToTree(data) {
  const tree = []
  const hasMap = new Map(
    data.map((obj) => {
      const _item = { children: [], ...obj }
      return [obj.id, _item]
    })
  )
  for (let i = 0; i < data.length; i++) {
    const item = hasMap.get(data[i].id)
    const parent = hasMap.get(data[i].parent_id)

    if (parent) {
      parent.children.push(item)
    } else {
      tree.push(item)
    }
  }

  return tree
}

// const tree = arrToTree(arrayData)
