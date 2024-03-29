import { useState, useEffect } from 'react'

function App() {
  const [num, setNum] = useState(() => {
    const num1 = 1 + 2
    const num2 = 2 + 3
    return num1 + num2
  })

  useEffect(() => {
    console.log('start')
    const timer = setInterval(() => {
      console.log('执行')
    }, 10000)

    return () => {
      console.log('end')
      clearInterval(timer)
    }
  }, [num])

  return <div onClick={() => setNum(num + 1)}>{num}</div>
}

export default App
