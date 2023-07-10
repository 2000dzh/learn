import { Button } from 'antd'
import React from 'react'
import { useState, useMemo } from 'react'

// 于vue对比
function HelloWord() {
  // 声明响应式变量
  const [count, setCount] = useState(6)

  // computed,需手动指定依赖
  const doubleCount = useMemo(() => count * 2, [count])

  function fn() {
    alert('11')
  }

  return (
    <>
      <h1>hello word</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 6)}>改变count</button>
      <button onClick={fn}>测试</button>
      <p>{doubleCount}</p>
    </>
  )
}

function Root() {
  const [showPage, setShowPage] = useState(true)
  return (
    <>
      <h1 className="content">函数式组件 </h1>
      <button onClick={() => setShowPage(!showPage)}>切换显示隐藏</button>
      {showPage ? 'true' : 'false'}
      <Button type="dashed">测试</Button>
      <hr />
      <HelloWord />
    </>
  )
}

export default Root
