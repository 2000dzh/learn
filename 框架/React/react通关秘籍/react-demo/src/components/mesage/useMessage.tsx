import React from 'react'

const Holder = React.forwardRef(() => {
  return {}
})

export function useInternalMessage() {
  const holderRef = React.useRef(null)

  const wrapAPI = React.useMemo(() => {

  }, [])
}

export default function useMessage() {}
