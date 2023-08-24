import { Component, ReactNode, createRef, useEffect, useRef, forwardRef, Ref, useState } from 'react'
import Demo1 from './demo/利用ref组件通信'
import { Button } from 'antd'

const MultifunctionalRef = () => {
  return (
    <>
      <h1>多功能ref</h1>
      {/* <ClassComponent /> */}
      <FunctionComponents />
      {/* <Demo1 /> */}
    </>
  )
}

const FunctionComponents = () => {
  const currentDom = useRef(null)
  const [date, setDate] = useState(Date.now())
  // 缓存一个不需要渲染的值
  // 不推荐在渲染期间写入,读取 useRef 的值
  const intervalRef = useRef<number>()

  useEffect(() => {
    console.log(currentDom)
  }, [])

  const start = () => {
    clearInterval(intervalRef.current)

    intervalRef.current = window.setInterval(() => {
      setDate(Date.now())
    })
  }

  const stop = () => {
    clearInterval(intervalRef.current)
  }

  console.log('测试父组件')

  return (
    <>
      <h1 ref={currentDom}>函数组件</h1>
      时间{date}
      <Button onClick={start}>Start</Button>
      <Button onClick={stop}>stop</Button>
    </>
  )
}

// 类组件有三种获取 ref 方式
class ClassComponent extends Component {
  currentDom: any
  fnCurrentDom: any
  fnNode: any
  constructor(props: any) {
    super(props)
    this.currentDom = createRef()
    this.fnNode = createRef()
  }

  componentDidMount() {
    // 1.ref属性是字符串
    console.log(this.refs)

    // 2 ref属性是一个函数
    console.log(this.fnCurrentDom)

    // 3 ref属性是一个ref对象
    console.log(this.currentDom)

    // 利用 forwardRef 转发 ref 实现跨层级获取元素
    console.log(this.fnNode)
  }

  render() {
    return (
      <>
        <h1 ref={this.currentDom}>类组件</h1>
        {/* <ForwardedComponent ref={(node) => (this.fnNode = node)} /> */}
        <ForwardedComponent ref={this.fnNode} />
        <div ref={(node) => (this.fnCurrentDom = node)}>函数模式获取元素或组件</div>
        <div ref="currentDom">字符串模式获取元素或组件</div>
      </>
    )
  }
}

const ForwardedComponent = forwardRef<HTMLDivElement>((props, ref) => {
  return <Children grandRef={ref}>子组件</Children>
})

class Children extends Component<{ children?: ReactNode; grandRef: Ref<HTMLDivElement> }> {
  render() {
    const { children, grandRef } = this.props
    return (
      <>
        <div ref={grandRef}>{children}</div>
      </>
    )
  }
}

export default MultifunctionalRef
