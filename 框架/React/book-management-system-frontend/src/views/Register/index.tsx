import { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import './index.css'
import { register } from '@/utils/request'
import { useNavigate } from 'react-router-dom'

export interface RegisterUser {
  username: string
  password: string
  password2: string
}

export const layout1 = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

export const layout2 = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
}

const rules = {
  username: [{ required: true, message: '请输入用户名!' }],
  password: [{ required: true, message: '请输入密码!' }],
  password2: [{ required: true, message: '请输入确认密码!' }],
}

export function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}

function Register() {
  const [submitLoading, setSubmitLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = async (values: RegisterUser) => {
    setSubmitLoading(true)

    if (values.password !== values.password2) {
      setSubmitLoading(false)
      message.error({
        content: '密码不相同',
      })
      return
    }

    try {
      const res = await register(values)
      if (res.status === 201 || res.status === 200) {
        message.success('注册成功')

        await sleep()
        navigate('/login')
      }
    } catch (e: any) {
      message.error(e.response.data.message)
    } finally {
      setSubmitLoading(false)
    }
  }

  return (
    <div className="register-container">
      <h1>图书管理系统</h1>
      <Form {...layout1} onFinish={onFinish} autoComplete="off" style={{ maxWidth: 600 }}>
        <Form.Item label="用户名" name="username" rules={rules.username}>
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={rules.password}>
          <Input.Password />
        </Form.Item>

        <Form.Item label="确认密码" name="password2" rules={rules.password2}>
          <Input.Password />
        </Form.Item>

        <Form.Item {...layout2}>
          <div className="links">
            <a href="/login">已有账号？去登录</a>
          </div>
        </Form.Item>

        <Form.Item {...layout2}>
          <Button loading={submitLoading} className="btn" type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
