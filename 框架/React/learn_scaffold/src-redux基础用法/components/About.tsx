import React, { PureComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../store/reducer'
import { Button } from 'antd'
import { addNumberAction, changeBannerAction } from '../store/actionCreators'
import { Dispatch } from 'redux'

function mapStateToProps(state: RootState) {
  const { counter, banner } = state
  return {
    counter,
    banner,
  }
}
function mapDispatchProps(dispatch: Dispatch) {
  return {
    addNumber<T>(num: T) {
      dispatch(addNumberAction<T>(num))
    },
    changeBanner() {
      dispatch(changeBannerAction())
    },
  }
}

const connector = connect(mapStateToProps, mapDispatchProps)
type PropsFromRedux = ConnectedProps<typeof connector>

interface Props {
  name?: string
}

type PropsAnStore = PropsFromRedux & Props

class About extends PureComponent<PropsAnStore> {
  constructor(props: PropsAnStore) {
    super(props)

    console.log(this.props)
  }

  componentDidMount() {
    const { changeBanner } = this.props
    changeBanner()
  }

  render() {
    const { counter, banner } = this.props
    return (
      <>
        <div>Aout</div>
        {counter}
        <Button onClick={() => this.changeNum(1)}>+1</Button>
        {banner.map((item) => (
          <span key={item.name}>{item.name}</span>
        ))}
      </>
    )
  }

  changeNum<T>(num: T) {
    // store.dispatch(addNumberAction<T>(num))
    const { addNumber } = this.props
    addNumber<T>(num)
  }
}

// connect 的返回值是一个高阶组件
export default connector(About)
