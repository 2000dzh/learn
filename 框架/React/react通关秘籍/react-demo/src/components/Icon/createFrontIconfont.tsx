import React from 'react'
import Icon, { IconProps } from './'
import { isString } from '@/utils/general'

const loadedSet = new Set<string>()

function createFromIconfont(scriptUrl: string) {
  if (isString(scriptUrl) && scriptUrl.length && !loadedSet.has(scriptUrl)) {
    const script = document.createElement('script')
    script.setAttribute('src', scriptUrl)
    script.setAttribute('data-namespace', scriptUrl)
    document.body.appendChild(script)

    loadedSet.add(scriptUrl)
  }

  const Iconfont = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { type, ...rest } = props

    return (
      <Icon {...rest} ref={ref}>
        {type ? <use xlinkHref={`#${type}`}></use> : null}
      </Icon>
    )
  })

  return Iconfont
}

export default createFromIconfont
