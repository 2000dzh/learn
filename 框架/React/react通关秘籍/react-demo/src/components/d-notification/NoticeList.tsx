import { useContext, useRef, useState, type CSSProperties, type FC, type Key } from 'react'
import { CSSMotionList } from 'rc-motion'
import type { CSSMotionProps } from 'rc-motion'
import type { OpenConfig, Placement, StackConfig } from './interface'
import { NotificationContext } from './NotificationProvider'

export interface NoticeListProps {
  configList?: Array<OpenConfig>
  placement?: Placement
  prefixCls?: string
  motion?: CSSMotionProps | ((placement: Placement) => CSSMotionProps)
  stack?: StackConfig

  // Events
  onAllNoticeRemoved?: (placement: Placement) => void
  onNoticeClose?: (key: Key) => void

  // Common
  className?: string
  style?: CSSProperties
}

const NoticeList: FC<NoticeListProps> = (props) => {
  const {
    configList,
    placement,
    prefixCls,
    motion,
    stack: stackConfig,

    onAllNoticeRemoved,
    onNoticeClose,

    className,
    style,
  } = props

  const { classNames: ctxCls } = useContext(NotificationContext)

  const dictRef = useRef<Record<string, HTMLDivElement>>({})
  const [latestNotice, setLatestNotice] = useState<HTMLDivElement>(null)
  const [hoverKeys, setHoverKeys] = useState<Array<string>>([])

  return <></>
}

export default NoticeList
