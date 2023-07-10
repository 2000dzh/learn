import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

function HelloWord() {
  return <h1>hello word</h1>
}

function Root() {
  const [showPage, setShowPage] = useState(true)
  return (
    <>
      <h1>函数式组件 </h1>
      <button onClick={() => setShowPage(!showPage)}>切换显示隐藏</button>
      {showPage ? 'true' : 'false'}
      <CSSTransition in={showPage} unmountOnExit={true} timeout={200}>
        <HelloWord />
      </CSSTransition>
    </>
  )
}

export default Root
