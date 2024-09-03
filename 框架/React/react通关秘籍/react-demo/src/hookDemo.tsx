// import useMountedState from '@/hooks/useMountedState'
import useSize from '@/hooks/useSize'
import useHover from '@/hooks/useHover'
// import useTimeout from '@/hooks/useTimeout'
import useWhyDidYouUpdate from '@/hooks/useWhyDidYouUpdate'
import { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'

const HookDemo = () => {
  // const isMounted = useMountedState()
  // const [, setNum] = useState(0)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setNum(1)
  //   }, 1000)
  // }, [])

  // return <div>{isMounted() ? 'mounted' : 'pending'}</div>

  const divRef = useRef(null)

  const size = useSize(divRef)
  const isEnter = useHover(divRef, {
    onChange: (flag) => {
      console.log(flag)
    },
  })

  const [count, setCount] = useState(1)
  useWhyDidYouUpdate('hookDemo', { count })

  // useTimeout(() => {
  //   console.log('定时')
  // }, 3000)

  return (
    <div
      style={{
        width: '100%',
        height: '600px',
      }}
    >
      <div
        ref={divRef}
        style={{
          width: '50%',
          height: '50%',
          backgroundColor: 'pink',
        }}
      >
        width: {size?.width}
        height: {size?.height}
        {isEnter ? 'hover' : 'leave'}
      </div>

      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>点击count+1</Button>
      <Button onClick={() => setCount(count - 1)}>点击count+1</Button>
    </div>
  )
}

export default HookDemo
