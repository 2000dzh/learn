
import Modal from './components/Model'
function HelloWord() {
  return <h1>hello word</h1>
}

function Root() {
  return (
    <>
      <h1>函数式组件 </h1>
      <HelloWord />
      <Modal />
    </>
  )
}

export default Root
