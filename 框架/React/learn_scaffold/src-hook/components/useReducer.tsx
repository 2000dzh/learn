import React, { useReducer } from 'react'
import { Button } from 'antd'

enum calculationType {
  add = 'ADD',
  sub = 'SUB',
}

interface reduType {
  (state: number, action: { type: calculationType; num: number }): number
}

const UseReducer = function () {
  // 类似一个 reduce 更好管理 state
  const [count, dispatch] = useReducer<reduType, number>(
    (state, action) => {
      switch (action.type) {
        case calculationType.add:
          return state + action.num
        case calculationType.sub:
          return state - action.num
        default:
          return state
      }
    },
    0,
    (initialCount) => {
      return initialCount + 1
    }
  )

  return (
    <>
      <h1>useReducer</h1>
      <h3>count: {count}</h3>
      <Button onClick={() => dispatch({ type: calculationType.add, num: 1 })}>加一</Button>
      <Button onClick={() => dispatch({ type: calculationType.sub, num: 1 })}>减一</Button>
    </>
  )
}

export default UseReducer
