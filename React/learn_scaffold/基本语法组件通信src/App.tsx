import React from 'react'
import App from './components/App_func'
import DemoSlot from './components/demoSlot'

interface State {
  message: string
  info: {
    name: string
    age: number
  }
}

interface Theme {
  color?: string
  size?: number
}

// 创建一个主题上下文
// 关于依赖注入
// 1.当 Provider 的value值发生变化时,它内部的所有消费组件都会重新渲染
export const ThemeContext = React.createContext<Theme>({})

// 类组件
class Root extends React.Component<{}, State> {
  constructor(props = {}) {
    super(props)
    this.state = {
      message: 'hello react',
      info: {
        name: 'dzh',
        age: 18,
      },
    }
  }

  componentDidMount() {
    console.log('类组件生命周期', '组件已被挂载,DOM渲染完毕')
  }

  componentDidUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ message: string }>, nextContext: any) {
    console.log('类组件生命周期', '组件已经发生更新')
    console.log(nextContext)
    // 会在更新后被立即调用,首次渲染不会执行次方法(可以比较props)
  }

  componentWillUnmount() {
    console.log('类组件生命周期', '组件即将被卸载')
  }

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ message: string }>, nextContext: any): boolean {
    console.log('可以在次方法判断是否需要重新渲染组件,返回 false，则不会调用 render() 方法和后续的生命周期函数')
    return true
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ message: string }>) {
    console.log('类组件生命周期', '在组件更新之前调用')
    return '返回的快照值会传递给 componentDidUpdate() 方法的第三个参数'
  }

  render(): React.ReactNode {
    const { message, info } = this.state
    return (
      <>
        <h1>{message}</h1>
        <h2>测试1</h2>
        <button onClick={() => this.onClick()}>改变message</button>

        {/* 函数式组件 依赖注入 */}
        <ThemeContext.Provider value={{ color: 'pink', size: 100 }}>
          <App message={message} changeMessage={(message) => this.changeMessage(message)} {...info} />
        </ThemeContext.Provider>

        {/* 类组件 依赖注入 */}
        {/* 对于插槽 */}
        {/* 1.使用内联写法,如果children只有一个元素,children就不是一个数组 */}
        {/* 2.把组件当属性传递 */}
        <ThemeContext.Provider value={{ color: 'pink', size: 100 }}>
          <DemoSlot PointPage={PointPage()}>
            <h2>我是插槽</h2>
            <h3>我是插槽</h3>
          </DemoSlot>
        </ThemeContext.Provider>
      </>
    )
  }

  onClick() {
    this.setState({
      message: 'hello vue',
    })
  }

  changeMessage(message: string) {
    this.setState({
      message,
    })
  }

  getClientData() {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('hello vue')
      }, 500)
    })
  }
}

function PointPage() {
  return (
    <>
      <h1>666666</h1>
    </>
  )
}

export default Root
