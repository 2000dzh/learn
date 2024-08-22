import { isFunction, isNumber } from '@/utils/general'
import React, { useState } from 'react'

interface MyLazyLoadProps {
  className?: string
  style?: React.CSSProperties
  placeholder?: React.ReactNode
  offset?: string | number
  width?: string | number
  height?: string | number
  onContentVisible?: () => void
  children: React.ReactNode
}

const MyLazyLoad: React.FC<MyLazyLoadProps> = (props) => {
  const {
    className = '',
    style,
    offset = 0,
    width,
    onContentVisible,
    placeholder,
    height,
    children,
  } = props

  const containerRef = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const elementObserver = React.useRef<IntersectionObserver>()

  function lazyLoadHandler(entries: Array<IntersectionObserverEntry>) {
    const [entry] = entries
    const { isIntersecting } = entry

    if (isIntersecting) {
      setVisible(true)
      if (isFunction(onContentVisible)) {
        onContentVisible()
      }

      const node = containerRef.current
      if(node && node instanceof HTMLElement) {
        elementObserver.current?.unobserve(node)
      }
    }
  }

  React.useEffect(() => {
    const options = {
      rootMargin: isNumber(offset) ? `${offset}px` : offset || '0px',
      threshold: 0,
    }

    elementObserver.current = new IntersectionObserver(lazyLoadHandler, options)

    const node = containerRef.current

    if (node instanceof HTMLElement) {
      elementObserver.current.observe(node)
    }

    return () => {
      if (node && node instanceof HTMLElement) {
        elementObserver.current?.unobserve(node)
      }
    }
  }, [])

  const styles = { height, width, ...style }

  return (
    <div ref={containerRef} className={className} style={styles}>
      {visible ? children : placeholder}
    </div>
  )
}

export default MyLazyLoad
