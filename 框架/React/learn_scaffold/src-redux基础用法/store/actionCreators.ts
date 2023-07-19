import { ActionTypes } from './constants'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export const addNumberAction = <T = any>(num: T) => ({
  type: ActionTypes.ADD_NUMBER,
  num,
})

// 借助 react-thunk 实现异步
export const changeBannerAction: () => any = () => {
  return (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    sleep()
      .then((res) => {
        dispatch({
          type: ActionTypes.CHANGE_BANNER,
          num: res,
        })
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.CHANGE_BANNER,
          num: [],
        })
      })
  }
}

function sleep() {
  return new Promise<{ name: string }[]>((resolve) => {
    setTimeout(() => {
      resolve([{ name: '书1' }, { name: '书2' }, { name: '书3' }])
    }, 2000)
  })
}
