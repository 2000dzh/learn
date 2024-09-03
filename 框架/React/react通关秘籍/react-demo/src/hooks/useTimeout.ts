import { useCallback, useEffect, useMemo, useRef } from 'react'

function useTimeout(fn: () => void, delay?: number) {
  const fnRef = useRef<Function>(fn)
  fnRef.current = useMemo(() => fn, [fn])

  const timeRef = useRef<number>()

  const clear = useCallback(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
  }, [])

  useEffect(() => {
    console.log('1111')
    timeRef.current = setTimeout(fnRef.current, delay)

    return clear
  }, [delay])

  return clear
}

export default useTimeout
