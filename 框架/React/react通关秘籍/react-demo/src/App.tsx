import React, { Suspense, useState } from 'react'
// import { Select } from 'antd'
import Demo11 from './demo-11-21.tsx'
// import Demo11 from './demo-1-20.tsx'

// import CalendarDemo from '@/components/Calendar/demo'
// import LazyPage from '@/components/suspense-error-boundary/suspense'
// import ErrorBoundary from '@/components/suspense-error-boundary/ErrorBoundary'
// import IconDemo from '@/components/Icon/demo'
// import SpaceDemo from '@/components/space/demo'
// import PortalDemo from './components/portal/demo'
// import WatermarkDemo from './components/watermark/demo'
// import LazyloadDemo from './components/lazyload/demo'

// const pages = import.meta.glob('@/components/**/*index.tsx')

//

function App() {
  const [index, setIndex] = useState(15)

  const comOptions = [
    {
      value: 0,
      label: '日历',
    },
    {
      value: 1,
      label: '异步组件',
    },
    {
      value: 2,
      label: '错误组件',
    },
    {
      value: 3,
      label: 'icon',
    },
    {
      value: 4,
      label: 'space',
    },
    {
      value: 5,
      label: 'Portal(把组件渲染到某个 dom 下)',
    },
    {
      value: 6,
      label: '水印组件',
    },
    {
      value: 7,
      label: 'lazyload',
    },
    {
      value: 8,
      label: '图解页面距离',
    },
    {
      value: 9,
      label: 'hookDemo',
    },
    {
      value: 10,
      label: 'tailwindDemo',
    },
    {
      value: 11,
      label: 'on-boarding',
    },
    {
      value: 12,
      label: 'd-upload',
    },
    {
      value: 13,
      label: '数据的不可变性',
    },
    {
      value: 14,
      label: 'react-router',
    },
    {
      value: 15,
      label: 'react-playground',
    },
  ]

  function Demo(i: number) {
    if (i === 0) {
      const CalendarDemo = React.lazy(() => import('@/components/Calendar/demo'))
      return <CalendarDemo />
    } else if (i === 1) {
      const LazyPage = React.lazy(() => import('@/components/suspense-error-boundary/suspense'))
      return <LazyPage />
    } else if (i === 2) {
      const ErrorBoundary = React.lazy(
        () => import('@/components/suspense-error-boundary/ErrorBoundary')
      )
      return <ErrorBoundary />
    } else if (i === 3) {
      const IconDemo = React.lazy(() => import('@/components/Icon/demo'))
      return <IconDemo />
    } else if (i === 4) {
      const SpaceDemo = React.lazy(() => import('@/components/space/demo'))
      return <SpaceDemo />
    } else if (i === 5) {
      const PortalDemo = React.lazy(() => import('@/components/portal/demo'))
      return <PortalDemo />
    } else if (i === 6) {
      const WatermarkDemo = React.lazy(() => import('@/components/watermark/demo'))
      return <WatermarkDemo />
    } else if (i === 7) {
      const LazyloadDemo = React.lazy(() => import('@/components/lazyload/demo'))
      return <LazyloadDemo />
    } else if (i === 8) {
      const Distance = React.lazy(() => import('./distance'))
      return <Distance />
    } else if (i === 9) {
      const HookDemo = React.lazy(() => import('./hookDemo'))
      return <HookDemo />
    } else if (i === 10) {
      const TailwindDemo = React.lazy(() => import('./tailwindDemo/index'))
      return <TailwindDemo />
    } else if (i === 11) {
      const OnBoardingDemo = React.lazy(() => import('@/components/on-boarding/demo'))
      return <OnBoardingDemo />
    } else if (i === 12) {
      const Dupload = React.lazy(() => import(`@/components/d-upload/demo`))
      return <Dupload />
    } else if (i === 13) {
      const ReadOnlyDemo = React.lazy(() => import(`@/components/read-only-demo/demo`))
      return <ReadOnlyDemo />
    } else if (i === 14) {
      const ReactRouter = React.lazy(() => import('./components/react-router/demo'))
      return <ReactRouter />
    } else if (i === 15) {
      const ReactPlayground = React.lazy(() => import('./components/react-playground/demo'))
      return <ReactPlayground />
    }
  }

  function handleChange(val: number) {
    setIndex(val)
  }

  return (
    <>
      {/* <Select
        defaultValue={index}
        style={{ width: '100%' }}
        options={comOptions}
        onChange={handleChange}
      />
      <Suspense>{Demo(index)}</Suspense> */}
      <Demo11></Demo11>
    </>
  )
}

export default App
