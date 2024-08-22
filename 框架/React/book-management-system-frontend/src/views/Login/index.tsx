import { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import './index.css'
import { layout1, layout2, sleep } from '@/views/Register'
import { login } from '@/utils/request'
import type { RegisterUser } from '@/views/Register'
import { useNavigate } from 'react-router-dom'

const rules = {
  username: [{ required: true, message: '请输入用户名!' }],
  password: [{ required: true, message: '请输入密码!' }],
}

function Login() {
  const [submitLoading, setSubmitLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = async (values: RegisterUser) => {
    setSubmitLoading(true)

    try {
      const res = await login(values)

      if (res.status === 201 || res.status === 200) {
        message.success('登录成功')

        await sleep()
        navigate('/')
      }
    } catch (e: any) {
      message.error(e.response.data.message)
    } finally {
      setSubmitLoading(false)
    }
  }

  return (
    <div className="login-container">
      <h1>图书管理系统</h1>
      <Form {...layout1} onFinish={onFinish} autoComplete="off" style={{ maxWidth: 600 }}>
        <Form.Item label="用户名" name="username" rules={rules.username}>
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={rules.password}>
          <Input.Password />
        </Form.Item>

        <Form.Item {...layout2}>
          <div className="links">
            <a href="/register">已有账号？去登录</a>
          </div>
        </Form.Item>

        <Form.Item {...layout2}>
          <Button loading={submitLoading} className="btn" type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
