import { useState } from 'react'
import { Button } from 'antd'

interface INFO {
  age: number
  sex: string
  a?: string
}

const UseState = function () {
  let [count, setCount] = useState(1)
  let [info, setInfo] = useState<INFO>({ age: 20, sex: '男' })

  const changeUserInformation = () => {
    // 对于引用数据类型,useState会进行一个浅比较
    const newInfo = { ...info }
    newInfo.age = 18
    setInfo(newInfo)
  }

  return (
    <>
      <h1>useState</h1>

      <h2>基础数据类型</h2>
      <span>count: {count}</span>
      <div>第一种写法</div>
      <Button onClick={() => setCount(++count)}>改变count</Button>
      <div>第二种写法</div>
      <Button onClick={() => setCount((value) => ++value)}>改变count</Button>

      <h2>引用数据类型</h2>
      <span>年龄: {info.age}</span>
      <span>性别: {info.sex}</span>
      <Button onClick={changeUserInformation}>改变用户信息</Button>
    </>
  )
}

export default UseState
