import React from 'react'
import useClips from './useClips'

export interface WatermarkProps {
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

const DEFAULT_GAP_X = 100
const DEFAULT_GAP_Y = 100

const Watermark: React.FC<WatermarkProps> = (props) => {
  const { style, width, height, zIndex, children, inherit = true, gap, offset, font } = props

  // const {
  //   color,
  //   fontSize,
  //   fontWeight = 'normal',
  //   fontStyle = 'normal',
  //   fontFamily = 'sans-serif',
  //   textAlign = 'center',
  // } = font

  const [gapX = DEFAULT_GAP_X, gapY = DEFAULT_GAP_Y] = gap || []
  const gapXCenter = gapX / 2
  const gapYCenter = gapY / 2
  const offsetLeft = offset?.[0] ?? gapXCenter
  const offsetTop = offset?.[1] ?? gapYCenter

  const markStyle = React.useMemo(() => {
    const mergedStyle: React.CSSProperties = {
      zIndex,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // 不响应浏览器事件
      pointerEvents: 'none',
      backgroundRepeat: 'repeat',
    }

    return mergedStyle
  }, [zIndex])

  const getClips = useClips()

  const childrenNode = inherit ? children : children

  return <div style={{ position: 'relative', ...style }}>{childrenNode}</div>
}

export default Watermark
