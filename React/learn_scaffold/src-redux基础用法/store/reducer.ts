import { ActionTypes } from './constants'

export interface RootState {
  counter: number
  banner: any[]
}

const initialState: RootState = {
  counter: 100,
  banner: [],
}

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case ActionTypes.SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case ActionTypes.CHANGE_BANNER:
      return { ...state, banner: action.num }
    default:
      return state
  }
}

export default reducer
