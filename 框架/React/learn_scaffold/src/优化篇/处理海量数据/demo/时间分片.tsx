import { FC, useEffect, useMemo, useRef, useState } from 'react'

/* 获取随机颜色 */
function getColor() {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return 'rgba(' + r + ',' + g + ',' + b + ',0.8)'
}

interface position {
  width: number
  height: number
}

/* 获取随机位置 */
function getPostion(position: position) {
  const { width, height } = position
  return { left: Math.ceil(Math.random() * width) + 'px', top: Math.ceil(Math.random() * height) + 'px' }
}

interface CircleProps {
  position: position
}

const Circle: FC<CircleProps> = (props) => {
  const { position } = props
  const style = useMemo(
    () => ({
      background: getColor(),
      ...getPostion(position),
    }),
    [position]
  )
  return <div style={style} className="circle" />
}

const TimeSlicing: FC = () => {
  // 渲染列表
  const [renderList, setRenderList] = useState<JSX.Element[]>([])
  const box = useRef<HTMLDivElement | null>(null)
  const eachRenderNum = 500

  useEffect(() => {
    const originList = new Array(30000).fill(1)
    const { offsetWidth: width, offsetHeight: height } = box.current as HTMLDivElement
    const times = Math.ceil(originList.length / eachRenderNum)
    let index = 1

    const toRenderList = () => {
      if (index > times) return

      const list = originList.slice((index - 1) * eachRenderNum, index * eachRenderNum)

      const newRenderList = list.map((item, itemIndex) => <Circle key={index * eachRenderNum + itemIndex} position={{ width, height }} />)
      setRenderList((prevRenderList) => [...prevRenderList, ...newRenderList])

      index++
      requestAnimationFrame(toRenderList)
    }
    toRenderList()
  }, [])

  return (
    <>
      <div ref={box} className="content">
        {renderList}
      </div>
    </>
  )
}

export default TimeSlicing

interface aaa {
  a: string
  b: number
  c: string
}

type cc<P, K> = {
  [k in keyof P]: P[k] extends K ? k : never
}[keyof P]

type ccccc = cc<aaa, string | boolean>
