import React, { PureComponent, ComponentType, useState } from 'react'

// 高阶组件(HOC)
// 高阶组件是参数为组件,返回值为新组件的函数
// !首先高阶组件本身不是一个组件,而是一个函数

interface Props {
  name?: string
  info?: Info
  move: boolean
}

interface Info {
  name: string
  age: number
}

function hoc(Cpn: ComponentType<Props>) {
  // 1.定义类组件
  // class NewCpn extends PureComponent {
  //   render(): React.ReactNode {
  //     return <Cpn name="dzh" />
  //   }
  // }

  // return NewCpn

  // 2.定义函数组件
  function NewCpn2(props: Props) {
    const [info, setInfo] = useState<Info>({ name: 'dzh', age: 20 })
    return <Cpn info={info} {...props} />
  }

  NewCpn2.displayName = 'newName'

  return NewCpn2
}

class HelloWord extends PureComponent<Props> {
  render() {
    // const { name } = this.props
    console.log(this.props)
    return (
      <>
        <hr />
        <h1>hello word</h1>
      </>
    )
  }
}

const HelloWordHOC = hoc(HelloWord)

export default HelloWordHOC
