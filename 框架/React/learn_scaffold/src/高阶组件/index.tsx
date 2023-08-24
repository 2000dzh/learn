import { createContext, useEffect, useState, useContext, memo } from 'react'

const Permission = createContext<string[]>([])

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['docList', 'tagList'])
    }, 500)
  })
}

const HighOrderComponents = () => {
  const [rootPermission, setRootPermission] = useState<string[]>([])

  useEffect(() => {
    const getRootPermission = async () => {
      const res: any = await sleep()
      if (Array.isArray(res) && res.length) {
        setRootPermission(res)
      }
    }

    getRootPermission()
  }, [])

  console.log('父组件render')

  return (
    <>
      <Permission.Provider value={rootPermission}>
        <AppMain />
      </Permission.Provider>
    </>
  )
}

const AppMain = memo(() => {
  const [path, setPath] = useState('')
  console.log('子组件render')
  return (
    <>
      <Sidebar setPath={setPath} />
      <Content path={path} />
    </>
  )
})

const Sidebar = (props: { setPath: Function }) => {
  const handler = (path: string) => props.setPath(path)
  return (
    <>
      <div onClick={() => handler('docList')}>菜单1</div>
      <div onClick={() => handler('tagList')}>菜单2</div>
      <div onClick={() => handler('1')}>菜单3</div>
    </>
  )
}

const Content = (props: { path: string }) => {
  const { path } = props
  const contextValue = useContext(Permission)

  if (Array.isArray(contextValue) && contextValue.length) {
    switch (path) {
      case 'docList':
        return <>内容1</>
      case 'tagList':
        return <>内容2</>
      default:
        return (
          <>
            <NotFonut />
          </>
        )
    }
  } else {
    return (
      <>
        <NotFonut />
      </>
    )
  }
}

const NotFonut = () => {
  return <>404</>
}

export default HighOrderComponents
