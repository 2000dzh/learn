import React, { PureComponent, RefObject, createRef } from 'react'
import Home from './components/Home'
import Recommont from './components/Recommont'
import Profile from './components/Profile'
import HOC from './components/HOC'
import { Button } from 'antd'

interface State {
  message: string
  count: number
}

class App extends PureComponent<any, State> {
  titleRef: RefObject<HTMLHeadingElement>
  RecommontRef: RefObject<Recommont>
  ProfileRef: RefObject<HTMLHeadingElement>

  constructor(props: any) {
    super(props)

    this.state = {
      message: 'hello react',
      count: 0,
    }
    this.titleRef = createRef<HTMLHeadingElement>()
    this.RecommontRef = createRef<Recommont>()
    this.ProfileRef = createRef<HTMLHeadingElement>()
  }

  // SCU优化
  // shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ message: string }>, nextContext: any): boolean {
  //   return this.state.message !== nextState.message
  // }

  changeText() {
    this.setState({
      message: 'hello react1',
    })
  }

  changeNum() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  handlerClick() {
    // 获取原生元素
    console.log(this.titleRef.current)
    // 获取类组件实例
    console.log(this.RecommontRef.current)
    // 通过 forwardRef 转发获取函数式组件内部元素
    console.log(this.ProfileRef.current)
  }

  render() {
    const { message, count } = this.state
    console.log('App组件render函数执行')

    return (
      <>
        {/* 即时state声明的变量没有在jsx内使用,但是只要state发生改变就会重新render */}
        <h1>App</h1>
        <h2>{message}</h2>
        <button onClick={() => this.changeText()}>改变文本</button>
        <h2>{count}</h2>
        <button onClick={() => this.changeNum()}>改变文本</button>
        <Home message={message} />
        <Recommont count={count} ref={this.RecommontRef} />
        <Profile message={message} ref={this.ProfileRef} />

        <h2 ref={this.titleRef}>我是谁</h2>
        <button onClick={() => this.handlerClick()}>React获取DOM</button>

        <Button>测试1</Button>

        <HOC move={true} />
      </>
    )
  }
}

export default App
