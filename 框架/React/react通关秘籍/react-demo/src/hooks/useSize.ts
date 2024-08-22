import { RefObject, useEffect, useState } from 'react'

type Size = {
  width: number
  height: number
}

function useSize(targetRef: RefObject<HTMLElement>): Size | undefined {
  const [refSize, setRefSize] = useState<Size | undefined>(() => {
    if (!targetRef.current) {
      return
    }

    const { clientWidth, clientHeight } = targetRef.current
    return {
      width: clientWidth,
      height: clientHeight,
    }
  })

  useEffect(() => {
    const el = targetRef.current
    if (el) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { clientWidth, clientHeight } = entry.target
          setRefSize({ width: clientWidth, height: clientHeight })
        })
      })

      resizeObserver.observe(el)

      return () => {
        if (el) {
          resizeObserver.unobserve(el)
        }
      }
    }
  }, [targetRef])

  return refSize
}

export default useSize
