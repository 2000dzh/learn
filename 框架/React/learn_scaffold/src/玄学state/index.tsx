import { Button } from 'antd'
import React, { Component } from 'react'
import { flushSync } from 'react-dom'

function MetaphysicsState() {
  return (
    <>
      <h1>玄学state</h1>
      <Index />
    </>
  )
}

interface State {
  num: number
}

// 类组件的 state
class Index extends Component<any, State> {
  state = { num: 0 }

  componentDidMount() {}

  handleClick = () => {
    // 1. setState是同步的还是异步的
    // // 可能是异步可能是同步的

    // 举例1.此时 setState 是异步的
    // 下面代码结果依次为

    // 0
    // 0
    // 0
    // callback1  1
    // callback2  1
    // callback3  1

    // 这段代码在 React 上下文执行栈中是下面这样

    // 1.开启批量更新
    //   isBatchingEventUpdates = true
    // 2.handleClick执行,同步代码先执行
    // 3.合并 state
    //   obj1  => obj2 => obj3 = obj3 // number = 1
    // 4.render
    // 5. cb1,cb2,cb3执行
    // 6. isBatchingEventUpdates = false 结束

    // this.setState({ number: this.state.number + 1 }, () => console.log('callbak1', this.state.number))
    // console.log(this.state.number)
    // this.setState({ number: this.state.number + 1 }, () => console.log('callbak2', this.state.number))
    // console.log(this.state.number)
    // this.setState({ number: this.state.number + 1 }, () => console.log('callbak3', this.state.number))
    // console.log(this.state.number)

    // react18之前 setState 在异步事件中是同步执行的
    // 在 react18 之后, 异步事件中setState是异步执行的(统一批处理)
    // 举例2.演示 setState 同步执行(setState被包裹在 定时器或promise中)
    // 下面代码运行结果为

    // callback1 1
    // 1
    // callback2 2
    // 2
    // callback3 3
    // 3

    // 在异步任务中如果想批量更新可以使用 unstable_batchedUpdates api

    // setTimeout(() => {
    //   this.setState({ num: 1 }, () => console.log('callback1', this.state.num))
    //   console.log(this.state.num)

    //   this.setState({ num: 2 }, () => console.log('callback2', this.state.num))
    //   console.log(this.state.num)

    //   this.setState({ num: 3 }, () => console.log('callback3', this.state.num))
    //   console.log(this.state.num)
    // }, 20)

    // 2.提升更新优先级(flushSync)
    
    // 下面示例输出结果
    // (1) react18之前
    // 0 '2' 
    // 0 '3'
    // 3 '4'
    // 1 '1'
    // (2) react18之后
    // 0 '2'
    // 0 '3'
    // 3 '4'
    // 4 '1'

    // 解释 flushSync 的作用,在同步条件下会合并之前的 setState | useState,然后立即更新

    setTimeout(() => {
      this.setState({ num: 1 })
      console.log(this.state.num , '1')
    },0)

    this.setState({ num: 2 })
    console.log(this.state.num,'2')
    flushSync(() => {
      this.setState({ num: 3 })
      console.log(this.state.num,'3')
    })

    this.setState({ num: 4 })
    console.log(this.state.num,'4')
  }

  render() {
    const { num } = this.state
    console.log(num)
    return (
      <>
        <div>
          {num}
          <Button onClick={this.handleClick}>点击</Button>
        </div>
      </>
    )
  }
}

// 类组件中的 setState 和函数组件中的 useState 的异同

// 相同点
// (1) 首先从原理角度出发，setState和 useState 更新视图，
//     底层都调用了 scheduleUpdateOnFiber 方法，而且事件驱动情况下都有批量更新规则。

// 不同点
// (1) 在不是 pureComponent 组件模式下， setState 不会浅比较两次 state 的值，
//     只要调用 setState，在没有其他优化手段的前提下，就会执行更新。
//     但是 useState 中的 dispatchAction 会默认比较两次 state 是否相同，然后决定是否更新组件。
// (2) setState 有专门监听 state 变化的回调函数 callback，可以获取最新state；
//     但是在函数组件中，只能通过 useEffect 来执行 state 变化引起的副作用


export default MetaphysicsState
