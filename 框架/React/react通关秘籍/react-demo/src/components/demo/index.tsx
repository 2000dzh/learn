import { SetStateAction, useRef, useState } from 'react'
import { useUpdate } from 'ahooks'
import { isFunction } from '@/utils/general'

type Options<T> = {
  value?: T
  defaultValue?: T
  onChange?: (v: T) => void
}

function usePropsValue<T>(options: Options<T>) {
  const { value, defaultValue, onChange } = options
  const isControlled = value !== undefined

  const update = useUpdate()

  const stateRef = useRef<T | undefined>(isControlled ? value : defaultValue)
  if (isControlled) {
    stateRef.current = value
  }

  const setState = (v: SetStateAction<T>) => {
    const nextValue = isFunction(v) ? (v as (prevState: T | undefined) => T)(stateRef.current) : v
    if (nextValue === stateRef.current) {
      return
    }
    stateRef.current = nextValue
    update()
    if (isFunction(onChange)) {
      onChange(nextValue)
    }
  }

  // as const 断言用于确保返回的数组是一个只读（readonly）的元组。这样做可以避免在后续代码中意外地修改这个元组中的值
  return [stateRef.current, setState] as const
}

interface DemoProps {
  value?: string
  onChange?: (value: string) => void
}

// 受控于不受控组件
// 参考
// https://zhuanlan.zhihu.com/p/536322574
// https://juejin.cn/post/7301145359853387810?searchId=2024031114020805577212BB61C0C35C16

function Demo(props: DemoProps) {
  console.log('Demo我重新渲染了')
  const isControlled = props.value !== undefined

  const stateRef = useRef(props.value || '')

  if (isControlled) {
    stateRef.current = props.value || ''
  }

  const update = useUpdate()

  return (
    <>
      <input
        value={stateRef.current}
        onChange={(e) => {
          stateRef.current = e.target.value
          update()
          if (isFunction(props.onChange)) {
            props.onChange(e.target.value)
          }
        }}
      />
    </>
  )
}

function Demo2(props: DemoProps) {
  console.log('Demo2我重新渲染了')
  const [value, setValue] = usePropsValue(props)

  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </>
  )
}

function Demo3(props: DemoProps) {
  const { value, onChange } = props

  const [curValue, setCurValue] = useState(value)
  console.log('Demo2我重新渲染了', value, curValue)
  function handleChange(e: any) {
    setCurValue(e.target.value)
    if (isFunction(onChange)) {
      onChange(e.target.value)
    }
  }

  return (
    <>
      <input type="text" value={curValue} onChange={handleChange} />
    </>
  )
}

// export default Demo
// export default Demo2
export default Demo3
