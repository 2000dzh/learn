import { useEffect, useRef } from 'react'

type IProps = Record<string, any>

function useWhyDidYouUpdate(componentName: string, props: IProps) {
  const oldProps = useRef<IProps>(props)

  useEffect(() => {
    console.log(componentName, '')
    if (oldProps.current) {
      const changedProps: IProps = {}
      for (const key in props) {
        if (!Object.is(props[key], oldProps.current[key])) {
          changedProps[key] = {
            from: oldProps.current[key],
            to: props[key],
          }
        }
      }

      if (Object.keys(changedProps).length) {
        console.log(componentName, changedProps)
      }
    }

    oldProps.current = props
  })
}

export default useWhyDidYouUpdate
