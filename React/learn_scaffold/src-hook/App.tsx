import React, { createContext, useState } from 'react'
import { Button } from 'antd'
import UseState from './components/useState'
import UseEffect from './components/useEffect'
import UseContext from './components/useContext'
import UseReducer from './components/useReducer'
import UseMemo from './components/useMemo'

interface Theme {
  color?: string
}
export const ThemeContext = createContext<Theme>({})

const App = function () {
  let [color, setColor] = useState('pink')

  function change() {
    setColor('blue')
  }

  return (
    <>
      <h1>函数式组件</h1>
      <hr />
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <Button onClick={() => change()}>改变依赖</Button>
      <ThemeContext.Provider value={{ color }}>
        <UseContext />
      </ThemeContext.Provider>
      <hr />
      <UseReducer />
      <hr />
      <UseMemo />
    </>
  )
}

export default App
