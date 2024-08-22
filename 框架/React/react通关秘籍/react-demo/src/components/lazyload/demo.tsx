import Lazyload from './index'
import img1 from './img1.jpg'

function LazyloadDemo() {
  const list = Array.from({ length: 100 }, (_, index) => {
    return <div key={index}>{index + 1}</div>
  })

  return (
    <>
      {list}
      <Lazyload placeholder={<div>loading</div>}>
        <img src={img1} alt="" />
      </Lazyload>
    </>
  )
}

export default LazyloadDemo
