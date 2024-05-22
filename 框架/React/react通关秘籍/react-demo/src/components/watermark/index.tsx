import React from 'react'

interface WatermarkProps {
  width?: number
  height?: number
  rotate?: number
  zIndex?: number
  image?: string
  content?: string | Array<string>
  font?: {
    color?: CanvasFillStrokeStyles['fillStyle']
    fontSize?: number | string
    fontWeight?: 'normal' | 'light' | 'weight' | number
    fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
    fontFamily?: string
    textAlign?: CanvasTextAlign
  }
  // 水印之间的间距
  gap?: [number, number]
  // 水印距离容器左上角的偏移量
  offset?: [number, number]
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  inherit?: boolean
}

const Watermark: React.FC<WatermarkProps> = (props) => {
  const { width, height, children, inherit = true } = props

  const childrenNode = inherit ? '' : children

  return <></>
}

export default Watermark
