import React, { Component, PureComponent } from 'react'

interface Props {
  count: number
}

class Recommont extends PureComponent<Props> {
  // shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ message: string }>, nextContext: any): boolean {
  //   return false
  // }

  constructor(props: Props) {
    super(props)
    console.log(this.props.count)
  }

  render(): React.ReactNode {
    console.log('Recommont组件render函数执行')

    return (
      <>
        <div>
          <h2>Recommont</h2>
        </div>
      </>
    )
  }
}

export default Recommont
