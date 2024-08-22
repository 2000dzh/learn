import { isFunction } from '@/utils/general'
import { useEffect } from 'react'

function useLifeCycles(mount: Function, unmount?: Function) {
  useEffect(() => {
    if (isFunction(mount)) {
      mount()
    }

    return () => {
      if (isFunction(unmount)) {
        unmount()
      }
    }
  })
}

export default useLifeCycles
