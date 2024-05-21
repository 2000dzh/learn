import React from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../config-provider/context'
import './index.scss'

export type SizeType = 'small' | 'middle' | 'large' | number | undefined

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  style?: React.CSSProperties
  styles?: { item: React.CSSProperties }
  // 间距大小
  size?: SizeType | [SizeType, SizeType]
  // 间距方向
  direction?: 'horizontal' | 'vertical'
  // 对齐方式
  align?: 'start' | 'end' | 'center' | 'baseline'
  // 设置拆分
  split?: React.ReactNode
  // 是否自动换行
  wrap?: boolean
}

const Space: React.FC<SpaceProps> = (props) => {
  const { space } = React.useContext(ConfigContext)
  
  const {
    size = space?.size || 'small',
    className,
    style,
    styles,
    align,
    direction = 'horizontal',
    wrap = false,
    split,
    ...otherProps
  } = props
  const [horizontalSize, verticalSize] = Array.isArray(size) ? size : ([size, size] as const)

  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align
  const cls = classNames(
    'space',
    `space-${direction}`,
    {
      [`space-align-${mergedAlign}`]: mergedAlign,
      [`space-gap-row-${horizontalSize}`]: horizontalSize,
      [`space-gap-col-${verticalSize}`]: verticalSize,
    },
    className
  )

  const childNodes = React.Children.toArray(props.children)
  if (childNodes.length === 0) {
    return null
  }

  const nodes = childNodes.map<React.ReactNode>((child, i) => {
    const key = (child && (child as React.ReactElement).key) || `space-item-${i}`

    return (
      <React.Fragment key={key}>
        <div className={className} style={styles?.item} {...otherProps}>
          {child}
        </div>
        {split && i < childNodes.length - 1 && <span>1</span>}
      </React.Fragment>
    )
  })

  const gapStyle: React.CSSProperties = {}

  if (wrap) {
    gapStyle.flexWrap = 'wrap'
  }

  return (
    <div className={cls} style={{ ...gapStyle, ...style }} {...otherProps}>
      {nodes}
    </div>
  )
}

export default Space
