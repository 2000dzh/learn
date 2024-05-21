import React from 'react'
import Portal from './index'

function PortalDemo() {
  const containerRef = React.useRef<HTMLElement>(null)

  const content = (
    <div className="btn">
      <button>按钮</button>
    </div>
  )

  React.useEffect(()=> {
    console.log(containerRef);
  }, []);

  return (
    <Portal attach={'#root'} ref={containerRef}>
      {content}
    </Portal>
  )
}

export default PortalDemo
