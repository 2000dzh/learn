import React, { Component, PureComponent } from 'react'

interface Props {
  message: string
}

class Home extends PureComponent<Props> {
  // shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ message: string }>, nextContext: any): boolean {
  //   return false
  // }

  constructor(props: Props) {
    super(props)
    console.log(this.props)
  }

  render(): React.ReactNode {
    console.log('Home组件render函数执行')

    return (
      <>
        <div>
          <h2>Home</h2>
        </div>
      </>
    )
  }
}

export default Home
