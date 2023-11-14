import { Component, FC, useEffect } from 'react'
import { Button } from 'antd'

// react有两个重要的阶段(render阶段和commit阶段)
// render(调和)阶段: 深度遍历 react fiber数,目的发现不同,不同的地方就会执行 render 函数
// commit阶段: 调和阶段结束就到了 commit 阶段,主要功能是将虚拟DOM转换为实际的DOM并更新到页面上
//  commit阶段可以再细分
//   1.before Mutation(DOM修改前)
//   2.Mutation(DOM修改)
//   3.Layout(DOM修改后)

// 派生 state 是指根据组件的 props 或其他状态（state）计算出一个新的 state 的过程

const LifeCycle: FC = () => {
  return (
    <>
      <h1>理解生命周期</h1>
      <ClassComponent />
    </>
  )
}

interface StateClass {
  age: string
  init: boolean
}

// 类组件的声明周期可以分为三个阶段
// 1.组件初始化,
// 2.组件更新,
// 3.组件销毁
class ClassComponent extends Component<any, StateClass> {
  constructor(props: any) {
    // constructor 一般只有两个作用
    // 1.声明 state
    // 2.绑定方法到类实例上
    super(props)
    console.log('1.组件初始化阶段', 'render阶段', '1')
    this.state = {
      age: '88',
      init: true,
    }
    this.move = this.move.bind(this)
  }

  // 实例方法,会在初次挂载和后续更新时调用
  // 返回值和类组件实例的 state 合并,会覆盖之前的state
  // 可以根据 porps 更新 state 时,才需要考虑使用它(官网有推荐更好的替代方案待补充),其他绝大数情况都不推荐使用
  static getDerivedStateFromProps(props: any, state: StateClass) {
    //   源码实现 prevState(更新的state) 于  partialState(getDerivedStateFromProps 函数返回值合并)
    //   let partialState = getDerivedStateFromProps(nextProps, prevState);
    //   const memoizedState = Object.assign({}, prevState, partialState)

    state.init ? console.log('1.组件初始化阶段', 'render阶段', '2') : console.log('2.更新阶段', 'commit阶段', '2')

    return {
      num: '77',
    }
  }

  // 从16.3版本开始废弃这个API!!!!
  // 如果存在 getDerivedStateFromProps 和 getSnapshotBeforeUpdate 就不会执行生命周期componentWillMount
  // componentWillMount() {
  //   console.log('1.组件初始化阶段', 'render阶段', '3')
  // }

  // getSnapshotBeforeUpdate() {

  // }

  move() {
    this.setState({
      age: '66',
    })
  }

  render() {
    const { age, init } = this.state
    init ? console.log('1.组件初始化阶段', 'render阶段', '4') : console.log('2.更新阶段', 'commit阶段', '5')
    return (
      <>
        <h2>我是类组件</h2>
        {age}
        <Button onClick={() => this.move()}>测试</Button>
        <Button onClick={this.move}>测试</Button>
      </>
    )
  }

  // 可以访问真是DOM
  componentDidMount() {
    console.log('1.组件初始化阶段', 'commit阶段', '5')
    this.setState({ init: false })
  }

  // 16.3版本被标记为不安全! 17版本正式废除这个API
  // 建议使用 getDerivedStateFromProps 或 componentDidUpdate 来替代
  // componentWillReceiveProps() {
  //   console.log('2.更新阶段', 'commit阶段', '1')
  // }

  // 主要作用比较新旧 props state 来决定是否更新
  // getDerivedStateFromProps 的返回值可以作为新的 state ，传递给 shouldComponentUpdate
  // 建议
  // 1.尽量使用 PureComponent。 PureComponent 会浅比较 state props以及减少错过必要更新的概率(能自动就不要手动)
  // 2.返回 false 并不会阻止子组件在他们的 state 改变时重新渲染
  shouldComponentUpdate(nextProps: any, nextState: StateClass) {
    console.log('2.更新阶段', 'commit阶段', '3')
    // 使用 shouldComponentUpdate 来优化类式组件与使用 memo 来优化函数式组件类似。函数式组件还使用 useMemo 来提供更精细的优化
    return true
  }

  // 16.3版本被标记为不安全! 17版本正式废除这个API
  // 建议使用 componentDidUpdate 来替代
  // componentWillUpdate(nextProps: any, nextState: StateClass) {
  //   console.log('2.更新阶段', 'commit阶段', '4')
  // }

  // 在DOM更新之前调用,可以捕获DOM发生更改之前的信息,返回的值会作为参数传递给 componentDidUpdate
  // 注意如果你定义了 shouldComponentUpdate 并返回了 false，则 getSnapshotBeforeUpdate 不会被调用。
  getSnapshotBeforeUpdate(prevProps: any, prevState: StateClass) {
    // prevProps：更新之前的 Props
    // prevState：更新之前的 State
    console.log('2.更新阶段', 'commit阶段', '6')
    return 'getSnapshotBeforeUpdate'
  }

  // DOM修改完成后调用
  // 注意如果你定义了 shouldComponentUpdate 并返回了 false，则 componentDidUpdate 不会被调用。
  componentDidUpdate(prevProps: any, prevState: StateClass, snapshot: any) {
    // prevProps：更新之前的 Props
    // prevState：更新之前的 State
    // snapshot   getSnapshotBeforeUpdate函数的返回值
    console.log('2.更新阶段', 'commit阶段', '7')
  }

  componentWillUnmount() {
    console.log('卸载阶段')
  }
}

// 函数组件生命周期方案
// react hook 提供 useEffect 和 useLayoutEffect 用来模拟生命周期
// useEffect: React处理逻辑是采用异步调用,所以不会阻塞浏览器绘制视图
// useLayoutEffect: React采用的是同步执行
// 两者区别
// 1.useLayoutEffect是在DOM更新之后,浏览器重绘之前,这样方便操作DOM且浏览器只会绘制一次
// 如果修改DOM放在 useEffect,那么 useEffect 是在浏览器绘制结束之后执行,接下来又修改 DOM 就可能造成浏览器回流和重绘
// 2.  useEffect不会阻塞浏览器绘制视图  useLayoutEffect会阻塞浏览器绘制
// 一句话概括如何选择 useEffect 和 useLayoutEffect ：修改 DOM ，改变布局就用 useLayoutEffect ，其他情况就用 useEffect
function FunctionComponents() {
  useEffect(() => {
    console.log('componentDidMount 替代方案')

    return () => {
      console.log('componentWillUnmount 替代方案')
    }
  }, [])

  return <>1</>
}

export default LifeCycle
