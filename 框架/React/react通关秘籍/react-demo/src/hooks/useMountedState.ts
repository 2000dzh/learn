import { useCallback, useEffect, useRef } from 'react'

// 获取组件是否 mount 到 dom
export default function useMountedState(): () => boolean {
  const mountedRef = useRef<boolean>(false)
  const get = useCallback(() => mountedRef.current, [])

  useEffect(() => {
    console.log('初始化')
    mountedRef.current = true
    return () => {
      console.log('组件重新渲染')
      mountedRef.current = false
    }
  }, [])

  return get
}
