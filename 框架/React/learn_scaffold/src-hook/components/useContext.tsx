import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const UseContext = function () {
  const theme = useContext(ThemeContext)
  console.log(theme.color)
  return (
    <>
      <h1>useContext</h1>
    </>
  )
}

export default UseContext
