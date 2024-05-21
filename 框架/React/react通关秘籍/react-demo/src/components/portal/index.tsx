import React from 'react'
import { createPortal } from 'react-dom'
import { isObject, isString } from '@/utils/general'

export interface PortalProps {
  attach?: HTMLElement | string
  children: React.ReactNode
}

function getAttach(attach: PortalProps['attach']) {
  if (isString(attach)) {
    return document.querySelector(attach)
  }

  if (isObject(attach) && attach instanceof window.HTMLElement) {
    return attach
  }

  return document.body
}

const Portal = React.forwardRef((props: PortalProps, ref) => {
  const { attach, children } = props

  const container = React.useMemo(() => {
    const el = document.createElement('div')
    el.className = 'portal-wrapper'
    return el
  }, [])

  React.useEffect(() => {
    const parentElement = getAttach(attach)
    if (parentElement) {
      parentElement.appendChild(container)
    }

    return () => {
      if (parentElement) {
        parentElement.removeChild(container)
      }
    }
  }, [container, attach])

  React.useImperativeHandle(ref, () => container)

  return createPortal(children, container)
})

export default Portal
