import React from 'react'

function Distance() {
  const ref = React.useRef<HTMLDivElement>(null)

  const clickHandler: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const top = document.getElementById('box')!.getBoundingClientRect().top

    console.log('box pageY', event.pageY)
    console.log('box clientY', event.clientY)
    console.log('box offsetY', event.pageY - top - window.screenY)
    console.log('box screentY', event.screenY)
  }

  React.useEffect(() => {
    const box = document.getElementById('box')
    const callback = (event: MouseEvent) => {
      console.log('box2 pageY', event.pageY)
      console.log('box2 clientY', event.clientY)
      console.log('box2 offsetY', event.offsetY)
      console.log('box2 screenY', event.screenY)
    }

    box?.addEventListener('click', callback)

    return () => {
      box?.removeEventListener('click', callback)
    }
  }, [])

  return (
    <>
      <div>
        <div
          id="box"
          ref={ref}
          style={{
            marginTop: '800px',
            width: '100px',
            height: '100px',
            background: 'blue',
          }}
          onClick={clickHandler}
        ></div>
      </div>
    </>
  )
}

export default Distance
