import React, { Component } from 'react'
import { Button } from 'antd'
import ThoroughProps from './深入props'
import MetaphysicsState from './玄学state'
import LifeCycle from './生命周期'
import MultifunctionalRef from './多功能ref'
import ProviderPage from './提供者 context'
import HighOrderComponents from './高阶组件'
import RenderControl from './优化篇/渲染控制'
import ProcessingMassiveAmountsOfData from './优化篇/处理海量数据'
class Fn extends Component {
  move() {
    console.log(this)
  }

  move1 = () => {
    console.log('实例方法1', this)
  }

  move2 = function (this: any) {
    console.log('实例方法2', this)
  }

  render() {
    return (
      <>
        <div></div>
        <Button onClick={this.move}>原型方法</Button>
        <Button onClick={this.move1}>实例方法1</Button>
        <Button onClick={this.move2}>实例方法2</Button>
      </>
    )
  }
}

const App = function () {
  return (
    <>
      {/* <h1>React进阶指南(掘金小册)</h1> */}
      <hr />
      {/* <MetaphysicsState /> */}
      {/* <ThoroughProps /> */}
      {/* <LifeCycle /> */}
      {/* <MultifunctionalRef /> */}
      {/* <ProviderPage /> */}
      {/* <HighOrderComponents /> */}
      {/* <RenderControl /> */}
      <ProcessingMassiveAmountsOfData />
    </>
  )
}

// class Name {
//   age = function (this: any) {
//     console.log(this)
//     return this
//   }
//   move = () => {
//     console.log(this)
//     return this
//   }
// }

// const name = new Name()
// console.log(name)

// console.log(name === name.age())
// console.log(name === name.move())

// const obj: any = {
//   sex: '男',
// }

// obj.age = name.age
// obj.move = name.move

// // obj.age()
// console.log(obj.age())
// // obj.move()
// console.log(obj.move())

// // console.log(obj.age())
// // console.log(obj.move())

export default App
