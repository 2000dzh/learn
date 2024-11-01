import { CSSProperties, useEffect, useState } from 'react'
import { getMaskStyle } from './getMaskStyle'
import { isFunction } from '@/utils/general'
import './mark.scss'

interface MaskProps {
  // 目标元素
  element: HTMLElement

  // 遮罩层所在的容器
  container?: HTMLElement

  renderMaskContent?: (wrapper: React.ReactNode) => React.ReactNode
}

export const Mask: React.FC<MaskProps> = (props) => {
  const { element, renderMaskContent, container } = props

  const [style, setStyle] = useState<CSSProperties>({})

  useEffect(() => {
    if (!container) {
      return
    }

    const observer = new ResizeObserver(() => {
      const markStyle = getMaskStyle(element, container || document.documentElement)
      setStyle(markStyle)
    })
    observer.observe(container!)

    return () => {
      observer.unobserve(container!)
    }
  }, [])
  console.log(style)
  
  useEffect(() => {
    console.log(element)

    if (!element) {
      return
    }

    element.scrollIntoView({
      block: 'center',
      inline: 'center',
    })

    const markStyle = getMaskStyle(element, container || document.documentElement)

    setStyle(markStyle)
  }, [element, container])

  const getContent = () => {
    if (!isFunction(renderMaskContent)) {
      return null
    }

    return renderMaskContent(
      <div className={'mask-content'} style={{ width: '100%', height: '100%' }}></div>
    )
  }

  return (
    <div style={style} className="mask">
      {getContent()}
    </div>
  )
}
