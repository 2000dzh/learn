import { isFunction } from '@/utils/general'
import { RefObject, useEffect, useState } from 'react'

export interface Options {
  onEnter?: () => void
  onLeave?: () => void
  onChange?: (isHovering: boolean) => void
}

function useHover(targetRef: RefObject<HTMLElement>, options?: Options): boolean {
  const [isEnter, setIsEnter] = useState(false)

  useEffect(() => {
    const el = targetRef.current

    if (el) {
      const onMouseenter = () => {
        isFunction(options?.onEnter) && options.onEnter()
        setIsEnter(true)
        isFunction(options?.onChange) && options.onChange(true)
      }
      el.addEventListener('mouseenter', onMouseenter)

      const onMouseleave = () => {
        isFunction(options?.onLeave) && options.onLeave()
        setIsEnter(false)
        isFunction(options?.onChange) && options.onChange(false)
      }
      el.addEventListener('mouseleave', onMouseleave)

      return () => {
        el.removeEventListener('mouseenter', onMouseenter)
        el.removeEventListener('mouseleave', onMouseleave)
      }
    }
  }, [targetRef])

  return isEnter
}

export default useHover
