import { Component, PureComponent, useEffect, useState } from 'react'

class Dong extends PureComponent<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      a: {
        b: 1,
      },
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.state.a.b = 2
      this.setState(this.state)
    }, 2000)
  }

  render() {
    return <div>{this.state.a.b}</div>
  }
}

function Dong1() {
  const [state, setState] = useState({
    a: {
      b: 1,
    },
  })

  useEffect(() => {
    setTimeout(() => {
      state.a.b = 2
      setState(state)
    }, 2000)
  }, [])

  return <div>{state.a.b}</div>
}


// 普通的 class 组件，setState 就会重新渲染
// 继承 PureComponent 的 class 组件，setState 时会对比 props 和 state 本身变没变，还会对比 state 的每个 key 的值变没变，变了才会重新渲染
// function 组件在用 useState 的 setXxx 时，只会判断 oldState === newState，变了就会重新渲染,

function App() {
  return (
    <>
      类组件
      <Dong />
      <hr />
      函数组件
      <Dong1 />
    </>
  )
}

export default App
