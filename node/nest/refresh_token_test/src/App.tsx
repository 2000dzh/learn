import React, { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
// import logo from './logo.svg'
import './App.css'

interface PendingTask {
  config: AxiosRequestConfig
  resolve: Function
  reject: Function
}

let refreshing = false
let queue: Array<PendingTask> = []

axios.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem('access_token')

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

axios.interceptors.response.use(
  function (config) {
    return config
  },
  async function (error) {
    let { data, config } = error.response

    if (refreshing) {
      return new Promise((resolve, reject) => {
        queue.push({
          config,
          resolve,
          reject,
        })
      })
    }

    if (data.statusCode === 401 && !config.url.includes('user/refresh')) {
      refreshing = true
      const res = await refreshToken()
      refreshing = false

      if (res && res.status === 200) {
        console.log(config)
        queue.forEach(({ config, resolve }) => {
          resolve(axios(config))
        })

        // 重发请求
        return axios(config)
      } else {
        alert('登录过期，请重新登录')
        queue.forEach(({ config, reject }) => {
          reject(error)
        })
        queue = []
        return Promise.reject(error)
      }
    }

    return error.response
  }
)

async function refreshToken() {
  const refresh_token = localStorage.getItem('refresh_token')
  if (!refresh_token) {
    return false
  }
  const res = await axios.get('http://localhost:3000/user/refresh', {
    params: {
      refresh_token,
    },
  })

  localStorage.setItem('access_token', res.data.access_token)
  localStorage.setItem('refresh_token', res.data.refresh_token)
  return res
}

function App() {
  const [aaa, setAaa] = useState()
  const [bbb, setBbb] = useState()

  async function login() {
    const res = await axios.post('http://localhost:3000/user/login', {
      username: '丁子豪',
      password: '123',
    })
    localStorage.setItem('access_token', res.data.access_token)
    localStorage.setItem('refresh_token', res.data.refresh_token)
  }

  async function query() {
    if (!localStorage.getItem('access_token')) {
      await login()
    }

    await [
      axios.get('http://localhost:3000/bbb'),
      axios.get('http://localhost:3000/bbb'),
      axios.get('http://localhost:3000/bbb'),
    ]

    const { data: aaaData } = await axios.get('http://localhost:3000/aaa')
    const { data: bbbData } = await axios.get('http://localhost:3000/bbb', {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem('access_token')}`
      // }
    })

    setAaa(aaaData)
    setBbb(bbbData)
  }

  useEffect(() => {
    query()
  }, [])

  return (
    <div className="App">
      <p>{aaa}</p>
      <p>{bbb}</p>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

export default App
