import React from 'react'
import { Navigate, Routes, Route, useParams, useLocation, Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="main1" element={<Main />}></Route>
        </Route>

        {/* <Route path="/home" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="main1" element={<Main />}></Route>
        </Route>

        <Route path="/pcd" element={<Layout />}>
          <Route index element={<Pcd />}></Route>
        </Route> */}
      </Routes>
      <p>1212</p>
    </>
  )
}

function Layout() {
  console.log('2121')
  return (
    <div>
      <input type="text" />
      Layout
      <Outlet />
    </div>
  )
}

function Home() {
  return <div>Home</div>
}

function Main() {
  return <div>Main</div>
}

function Pcd() {
  return <div>pcd</div>
}

export default Root
