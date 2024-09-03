import React from 'react'

export interface NotificationsProps {
  prefixCls?: string
}

export interface NotificationsRef {}

const Notifications = React.forwardRef<NotificationsRef, NotificationsProps>((props, ref) => {
  const { prefixCls = 'd-notification' } = props

  return <></>
})

export default Notifications
