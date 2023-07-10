import { Button } from 'antd'
import { useState } from 'react'
import './app.less'

function HelloWord() {
  return <h1>hello word</h1>
}

function Root() {
  const [showPage, setShowPage] = useState(true)
  return (
    <>
      <h1 className="content">函数式组件 </h1>
      <button onClick={() => setShowPage(!showPage)}>切换显示隐藏</button>
      {showPage ? 'true' : 'false'}
      <Button type="dashed">测试</Button>
    </>
  )
}

export default Root
