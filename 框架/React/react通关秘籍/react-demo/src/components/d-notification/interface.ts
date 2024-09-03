export type Placement = 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight'

type NoticeSemanticProps = 'wrapper'

export interface NoticeConfig {
  content?: React.ReactNode
  duration?: number | null
  showProgress?: boolean
  pauseOnHover?: boolean
  closeIcon?: React.ReactNode
  closable?: boolean | ({ closeIcon?: React.ReactNode } & React.AriaAttributes)
  className?: string
  style?: React.CSSProperties
  classNames?: {
    [key in NoticeSemanticProps]?: string
  }
  styles?: {
    [key in NoticeSemanticProps]?: React.CSSProperties
  }
  /** @private Internal usage. Do not override in your code */
  props?: React.HTMLAttributes<HTMLDivElement> & Record<string, any>

  onClose?: VoidFunction
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export interface OpenConfig extends NoticeConfig {
  key: React.Key
  placement?: Placement
  content?: React.ReactNode
  duration?: number | null
}

export type StackConfig =
  | boolean
  | {
      /**
       * 当数量大于阈值时，通知将堆叠在一起
       * @default 3
       */
      threshold?: number
      /**
       * 通知堆叠在一起时的偏移量
       * @default 8
       */
      offset?: number
      /**
       * 展开时每个通知之间的间距.
       */
      gap?: number
    }
