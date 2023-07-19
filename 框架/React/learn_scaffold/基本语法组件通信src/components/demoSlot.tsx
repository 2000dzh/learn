import React from 'react'
import type { ReactNode } from 'react'
import { ThemeContext } from '../App'

interface Props {
  children: ReactNode[]
  PointPage: ReactNode
}

// 1.使用 children 实现插槽
// 2.使用props传递react组件
class DemoSlot extends React.Component<Props> {
  // 1.为类组件指定上下文
  // static contextType = ThemeContext
  render(): React.ReactNode {
    const { children, PointPage } = this.props
    console.log(PointPage)
    console.log(this.context)
    return (
      <>
        <h1>演示插槽</h1>
        <div>{children}</div>
        {PointPage}
        {/* {2.为类组件指定上下文} */}
        <ThemeContext.Consumer>{(ThemeContext) => this.fn(ThemeContext)}</ThemeContext.Consumer>
      </>
    )
  }

  fn(ThemeContext: any) {
    console.log(ThemeContext)
    return <p>测试1</p>
  }
}

export default DemoSlot
