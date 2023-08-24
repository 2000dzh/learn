import { Component, ContextType, createContext, memo, useContext, useMemo, useState } from 'react'
import { Button } from 'antd'

interface ThemeContextType {
  color: string
  background: string
}

const ThemeContext = createContext<ThemeContextType>({
  color: '',
  background: '',
})

// 提供者
const ThemeProvider = ThemeContext.Provider
// 消费者
const ThemeConsumer = ThemeContext.Consumer

const ProviderPage = () => {
  const [contextValue, setContextValue] = useState({ color: '#ccc', background: 'pink' })

  const switchTheme = () => {
    setContextValue({
      color: 'pink',
      background: 'blue',
    })
  }

  return (
    <>
      <ThemeProvider value={contextValue}>
        <Button onClick={switchTheme}>切换主题</Button>
        {/* 3种消费者 */}
        {/*  1.类组件之 contextType 方式 */}
        <ConsumerDemo1 />
        {/*  2.函数组件之 useContext  方式 */}
        <ConsumerDemo2 />
        {/*  3.订阅者之 Consumer 方式 */}
        <ConsumerDemo3 />
        <hr />
        {/* 当 Provide 的 value 改变时,会使引用 contextType,useContext 消费该 context 的组件重新render */}
        {/* 暴露问题 */}
        {/* 这里 Son 没有进行 render 是因为被 memo 处理,但是如果去掉 memo。 useState 会使 ProviderPage 重新 render */}
        {/* 如何阻止有两种方法 */}
        {/* 1. 使用 memo pureComponents 对子组件的 props 进行浅比较 */}
        {/* 2. 使用 useMemo,这样 Son 组件只会在初始化调用一次 */}
        <Son />
        {useMemo(
          () => (
            <Son />
          ),
          []
        )}
      </ThemeProvider>
    </>
  )
}

class ConsumerDemo1 extends Component {
  static contextType = ThemeContext
  //@ts-ignore
  context!: ContextType<typeof ThemeContext>
  // declare context: React.ContextType<typeof ThemeContext>

  render() {
    const { color, background } = this.context
    console.log(this.context)
    return (
      <>
        <div style={{ color, background }}>消费者1</div>
      </>
    )
  }
}

const ConsumerDemo2 = () => {
  const contextValue = useContext(ThemeContext)
  const { color, background } = contextValue
  return (
    <>
      <div style={{ color, background }}>消费者2</div>
    </>
  )
}

const ConsumerDemo3 = () => {
  return (
    <>
      <ThemeConsumer>{(contextValue) => <div style={{ color: contextValue.color, background: contextValue.background }}>消费3</div>}</ThemeConsumer>
    </>
  )
}

const Son = memo(() => {
  console.log('son render')
  return <ConsumerDemo4 />
})

const ConsumerDemo4 = () => {
  const { color, background } = useContext(ThemeContext)
  return (
    <>
      <div style={{ color, background }}>消费者4</div>
    </>
  )
}

export default ProviderPage
