import { Component } from 'react'
import { flushSync } from 'react-dom'

interface State {
  message: string
  count: number
}

class App extends Component<any, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      message: 'hello react',
      count: 0,
    }
  }

  changeText() {
    // // 1
    // this.setState({
    //   message: 'hello vue',
    // })

    // 2
    // this.setState((state, props) => {
    //   console.log(state)
    //   console.log(props)
    //   return {
    //     message: 'hello vue',
    //   }
    // })

    // 3 setState是一个异步调用
    // this.setState({ message: 'hello vue' }, () => {
    //   console.log(this.state.message)
    // })

    // 1.在 react18 之前, setTimeout,原生DOM事件中setState是同步的
    // 2.在 react18 之后, setTimeout,原生DOM事件中setState是异步的(统一批处理)

    // 立即更新状态
    flushSync(() => {
      this.setState({ message: '111' })
    })
    console.log(this.state.message)
  }

  increment() {
    setTimeout(() => {
      this.setState({
        message: 'hello vue',
      })
      console.log(this.state)

      this.setState({
        message: 'hello vue',
      })
      console.log(this.state)
    }, 0)
  }

  render() {
    const { message, count } = this.state
    console.log('render函数执行')
    return (
      <>
        <h1>类组件</h1>
        <h2>{message}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <h2>{count}</h2>
        <button onClick={() => this.increment()}>修改计数</button>
      </>
    )
  }
}

export default App
