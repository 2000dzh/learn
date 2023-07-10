import { PureComponent, ComponentType } from 'react'
import store from '../store'

type MapStateToProps = (state: any) => any
type MapDispatchToProps = (dispatch: any) => any

export default function connect<TProps>(mapStateProps: MapStateToProps, mapDispatchProps: MapDispatchToProps) {
  return function (WrapperComponent: ComponentType<TProps>) {
    class NewComponent extends PureComponent<TProps> {
      unsubscribe: any
      constructor(props: TProps) {
        super(props)

        this.unsubscribe = null
        this.state = mapStateProps(store.getState())
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState(mapStateProps(store.getState()))
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const state = mapStateProps(store.getState())
        const dispatch = mapDispatchProps(store.getState())

        return <WrapperComponent {...this.props} {...state} {...dispatch} />
      }
    }

    return NewComponent
  }
}
