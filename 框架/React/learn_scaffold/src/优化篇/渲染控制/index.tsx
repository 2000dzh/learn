import { FC, lazy, Suspense } from 'react'
import Demo1, { Demo1Props } from './demo/demo1'

function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello word')
    }, 2000)
  })
}

// 动态加载（懒加载）组件
const LazyComponent = lazy(() => import('./demo/demo1'))

type AsyncComponentResult = {
  default: FC
}
function AysncComponent(Component: FC<Demo1Props>) {
  const AysncComponentPromise: Promise<AsyncComponentResult> = new Promise(async (resolve) => {
    const result = await sleep()
    resolve({
      default: () => <Component data={result} />,
    })
  })
  return lazy(() => AysncComponentPromise)
}

const Index = () => {
  const AsyncDemo1 = AysncComponent(Demo1)
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        {/* <LazyComponent /> */}
        <AsyncDemo1 />
      </Suspense>
    </>
  )
}

export default Index
