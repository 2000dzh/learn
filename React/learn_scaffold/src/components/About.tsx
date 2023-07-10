import React, { PureComponent } from 'react'
import { Button, Input } from 'antd'
import { connect, ConnectedProps } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { addNumber, subNumber, changeNumber, incrementAsync } from '../store/features/counter'
// import {connect} from '../hoc/connect'

const mapStateToProps = (state: RootState) => ({
  counter: state.counter.counter,
  status: state.counter.status,
  color: state.theme.color,
})
const mapDispatchProps = (dispatch: AppDispatch) => ({
  addCounterNumber() {
    dispatch(addNumber())
  },
  subCounterNumber() {
    dispatch(subNumber())
  },
  changeCounterNumber(value: number) {
    dispatch(changeNumber(value))
  },
  changeStatus() {
    dispatch(incrementAsync())
  },
})

const connector = connect(mapStateToProps, mapDispatchProps)
type PropsFromRedux = ConnectedProps<typeof connector>

interface Props {
  name?: string
}

type PropsAnStore = PropsFromRedux & Props

interface State {
  value: number
}

class About extends PureComponent<PropsAnStore, State> {
  constructor(props: PropsAnStore) {
    super(props)
    this.state = {
      value: 66,
    }
  }
  render() {
    const { counter, status, color } = this.props
    const { addCounterNumber, subCounterNumber, changeCounterNumber, changeStatus } = this.props
    const { value } = this.state
    return (
      <>
        {counter}
        <Button onClick={() => addCounterNumber()}>+1</Button>
        <Button onClick={() => subCounterNumber()}>-1</Button>
        <Input defaultValue={value} onChange={(e) => this.handleInputChange(e)} />
        <Button onClick={() => changeCounterNumber(value)}>更改counter值</Button>
        <hr />
        {status}
        <Button onClick={() => changeStatus()}>异步操作</Button>
        {color}
      </>
    )
  }

  handleInputChange(event: any) {
    this.setState({
      value: event.target.value,
    })
  }
}

export default connector(About)
