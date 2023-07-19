import React from 'react'
import { Navigate, Routes, Route, useParams, useLocation, Outlet } from 'react-router-dom'

// router v6
function Root() {
  return (
    <>
      <div className="app">
        <header>
          <Header />
        </header>
        <main>中间内容</main>
        <Routes>
          {/* 重定向案例 */}
          <Route path="/" element={<Navigate to="/main1" />}></Route>
          {/* 嵌套案例 */}
          <Route path="users" element={<Users />}>
            <Route path="me" element={<OwnUserProfile />} />
            {/* 传递参数 */}
            <Route path=":id/:dsa" element={<UserProfile />} />
          </Route>

          <Route path="/main1" element={<Main1 animate={true}></Main1>}></Route>
          <Route path="/main2" element={<Main2></Main2>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

function Users() {
  // 获取路由参数(参数占位符 :id)
  const parasm = useParams()
  const location = useLocation()
  console.log(parasm)
  console.log(location)
  return (
    <>
      <div>
        User
        <Outlet />
      </div>
    </>
  )
}

function OwnUserProfile() {
  return <div>OwnUserProfile</div>
}

function UserProfile() {
  return <div>UserProfile</div>
}

function Header() {
  return <div>头部</div>
}

interface Main1Pops {
  animate: boolean
}

function Main1(props: Main1Pops) {
  console.log(props)
  const parasm = useParams()
  const location = useLocation()
  console.log(parasm)
  console.log(location)
  return <div>main1</div>
}

// function Home() {
//   return <div>Home</div>
// }

// function Main1Id() {
//   return <div>main1id</div>
// }

function Main2() {
  return <div>main2</div>
}

function Footer() {
  return <div>底部</div>
}

function NotFound() {
  return <div>404</div>
}

export default Root
