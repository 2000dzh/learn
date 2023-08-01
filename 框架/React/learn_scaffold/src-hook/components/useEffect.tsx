import { Button } from 'antd'
import { useEffect, useState } from 'react'

interface ChildProps {
  count: number
  info: InfoType
}

interface InfoType {
  age: number
}

const Child = function (props: ChildProps) {
  // const { count } = props

  // 模拟生命周期
  useEffect(() => {
    console.log('挂载')

    return () => {
      console.log('卸载')
    }
  }, [])

  console.log('21122')

  return (
    <>
      <h2>子组件</h2>
      {/* {count} */}
    </>
  )
}

const UseEffect = function () {
  let [show, setShow] = useState(true)
  let [count, setCount] = useState(6)
  let [info, setInfo] = useState<InfoType>({ age: 10 })

  // 只要 setup 函数依赖了外部变量,就要指明依赖项
  useEffect(() => {
    console.log('show改变才执行')
    console.log(`新值: ${show}`)

    return () => {
      console.log(`旧值: ${show}`)
    }
  }, [show])

  return (
    <>
      <h1>useEffect</h1>
      <Button onClick={() => setShow((show = !show))}>控制子组件创建销毁</Button>
      {show ? <Child count={count} info={info} /> : null}
      <Button onClick={() => setCount(++count)}>改变count值</Button>
      {info.age}
      <Button
        onClick={() =>
          setInfo((val) => {
            const newInfo = { ...val }
            ++newInfo.age
            return newInfo
          })
        }
      >
        改变info值
      </Button>
    </>
  )
}

export default UseEffect
