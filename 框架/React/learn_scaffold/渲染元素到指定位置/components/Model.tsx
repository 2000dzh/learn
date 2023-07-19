import React, { memo } from 'react'
import { createPortal } from 'react-dom'

function Model() {
  // 将子节点渲染到指定元素中
  return <>{createPortal(<div>我是弹框</div>, document.querySelector('body') as Element)}</>
}

export default memo(Model)
