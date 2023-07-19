import React,{ useState }  from 'react'
import { ThemeContext } from '../App'
// 函数式组件
// 函数式组件的特点
// 1.没有生命周期
// 2.没有this关键字指向组件实例
// 3.没有内部状态

interface Props {
  message: string
  changeMessage: (message: string) => void
  name: string
  age: number
}

function App(props: Props) {
  function onClick(message: string) {
    props.changeMessage(message)
  }

  function fn(ThemeContext: any) {
    console.log(ThemeContext)
    return <p>测试1</p>
  }

  const { name, age } = props
  // 1.为函数式组件指定上下文
  const theme = React.useContext(ThemeContext)
  console.log(theme)
  return (
    <>
      <h1>函数式组件</h1>
      <button onClick={() => onClick('hello vue')}>改变父组件的值</button>
      <div>{name}</div>
      <div>{age}</div>
      {/* {  2.为函数式组件指定上下文} */}
      <ThemeContext.Consumer>{(ThemeContext) => fn(ThemeContext)}</ThemeContext.Consumer>
    </>
  )
}

export default App
