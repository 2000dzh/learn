import { forwardRef, PropsWithChildren } from 'react'
import cs from 'classnames'
import { isArray } from '@/utils/general'
import './index.scss'

type BaseIconProps = {
  className?: string
  style?: React.CSSProperties
  size?: string | string[]
  spin?: boolean
}

export type IconProps = BaseIconProps & Omit<React.SVGAttributes<SVGElement>, keyof BaseIconProps>

export const getSize = (size: IconProps['size']) => {
  if (isArray(size) && size.length === 2) {
    return size as Array<string>
  }

  const width = (size as string) || '1em'
  const height = (size as string) || '1em'

  return [width, height]
}

const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>((props, ref) => {
  const { style, className, spin, size = '1em', children, ...rest } = props

  const [width, height] = getSize(size)

  const cn = cs('icon', {
    'icon-spin': spin,
    className,
  })

  return (
    <svg
      ref={ref}
      className={cn}
      style={style}
      width={width}
      height={height}
      fill="currentColor"
      {...rest}
    >
      {children}
    </svg>
  )
})

export default Icon
