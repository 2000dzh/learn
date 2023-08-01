import { Button } from 'antd'
import React, { memo, useCallback, useState } from 'react'
   
// function useCallback(fn, dependencies) {
//   return useMemo(() => fn, dependencies);
// }

interface Props {
  onClick?: () => void
}

const TestBtn = memo(function (props: Props) {
  console.log('子组件重新创建')
  return <Button onClick={props.onClick}>改变父组件数据</Button>
})

const UseCallBack = function () {
  const [count, setCount] = useState(1)
  const [show, setShow] = useState(true)

  const add: any = useCallback(
    (num: number) => {
      console.log('add', num)
      setCount(count + 1)
    },
    [count]
  )

  function add1() {
    console.log('add1')
    setCount(count + 1)
  }

  // useCallback 的主要作用是在依赖项变化时返回一个新的回调函数，以避免不必要的函数创建和重新渲染。
  // 如果依赖项数组是空的，那么 useCallback 会在组件首次渲染时返回一个固定的回调函数。
  // 在这种情况下，由于回调函数内部没有使用到 count，所以即使 count 发生变化，也不会触发新的回调函数创建。
  // 因此，可以安全地将 count 从依赖项数组中移除，使其为空数组 []。
  // 这样可以确保 handleAdd 的回调函数只在组件首次渲染时创建一次，并且在后续渲染中保持不变。这样做可以提高性能，并且不会引起任何副作用
  const handleAdd: any = useCallback(() => {
    setCount((count) => count + 1)
  }, [])

  return (
    <>
      <h1>UseCallBack</h1>
      {count}
      {/* 跳过不必要的渲染 */}
      <TestBtn onClick={add} />
      <TestBtn onClick={add1} />
      <TestBtn onClick={handleAdd} />

      <Button onClick={() => setShow(!show)}>切换状态</Button>
    </>
  )
}

export default UseCallBack
