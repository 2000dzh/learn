import React, { useState, useMemo, memo } from 'react'
import { Button } from 'antd'
// const list = [1, 2, 3]

// 缓存计算的结果
const usePow = (list: number[]) => {
  return useMemo<number[]>(() => {
    return list.map((item) => {
      console.log(1)
      return Math.pow(item, 2)
    })
  }, [list])
}

// 跳过组件不必要的渲染
const ZI = memo(function (props: any) {
  console.log('子组件重新渲染')
  return (
    <>
      <div>子组件</div>
    </>
  )
})

const UseMemo = function () {
  const [list, setList] = useState([1, 2, 3])
  const data = usePow(list)
  const [flag, setFlag] = useState(true)

  return (
    <>
      <h1>useMemo</h1>
      <div>{data}</div>
      <Button onClick={() => setFlag(!flag)}>测试</Button>
      <div>状态{JSON.stringify(flag)}</div>
      <Button onClick={() => setList([2, 4, 6])}>改变list</Button>
      <ZI data={data} />
    </>
  )
}

export default UseMemo
