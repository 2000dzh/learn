export interface NotificationConfig {
  prefixCls?: string
  getContainer?: () => HTMLElement | ShadowRoot
}

export default function useNotification(rootConfig: NotificationConfig = {}) {
  const { prefixCls } = rootConfig

  
}
