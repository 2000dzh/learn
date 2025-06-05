let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 1212, name: '部门5', pid: 12 },
]

function arrTotree (arr) {
  if (!Array.isArray(arr)) {
    return
  }
  const tree = []
  const hasMap = new Map(
    arr.map((obj) => {
      const _obj = {
        ...obj,
        children: [],
      }
      return [obj.id, _obj]
    })
  )

  for (let i = 0; i < arr.length; i++) {
    const parent = hasMap.get(arr[i].pid)
    const item = hasMap.get(arr[i].id)
    if (parent) {
      parent.children.push(item)
    } else {
      tree.push(item)
    }
  }

  console.log(tree)
}


arrTotree(arr)
