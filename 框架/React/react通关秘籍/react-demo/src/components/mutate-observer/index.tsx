import React, { useLayoutEffect } from 'react'

interface MutationObserverProps {
  options?: MutationObserverInit
  onMutate?: (mutations: MutationRecord[], observer: MutationObserver) => void
  children: React.ReactElement
}

const defaultOptions: MutationObserverInit = {
  subtree: true,
  childList: true,
  attributeFilter: ['style', 'class'],
}

function useMutateObserver(
  nodeOrList: HTMLElement | HTMLElement[],
  callback: MutationCallback,
  options: MutationObserverInit = defaultOptions
) {
  React.useEffect(() => {
    if (!nodeOrList) {
      return
    }

    let instance: MutationObserver

    const nodeList = Array.isArray(nodeOrList) ? nodeOrList : [nodeOrList]

    if ('MutationObserver' in window) {
      instance = new MutationObserver(callback)

      nodeList.forEach((element) => {
        instance.observe(element, options)
      })
    }

    return () => {
      instance?.takeRecords()
      instance?.disconnect()
    }
  }, [options, nodeOrList])
}

const MutateObserver: React.FC<MutationObserverProps> = (props) => {
  const { options, onMutate = () => {}, children } = props

  const elementRef = React.useRef<HTMLElement>(null)

  const [target, setTarget] = React.useState<HTMLElement>()

  useMutateObserver(target!, onMutate, options)

  useLayoutEffect(() => {
    setTarget(elementRef.current!)
  }, [])

  if (!children) {
    return null
  }

  return React.cloneElement(children, { ref: elementRef })
}

export default MutateObserver
