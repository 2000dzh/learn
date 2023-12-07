import React from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios'




const App = () => {
  const [form] = Form.useForm();

  const sendEmailCode = async () => {
    console.log('send email code')
    const email = form.getFieldValue('email')

    if (!email) {
      message.error('邮箱不能为空')
      return
    }

    const res = await axios.get('http://localhost:3001/email/code', {
      params: {
        address: email
      }
    });

    message.info(res.data)
    console.log(res)
  }

  const login = async (values) => {
    console.log('Success:', values);
    const { email, code } = values || {}

    if (!code || !email) {
      message.error('请填写完整')
      return
    }

    try {
      const res = await axios.post('http://localhost:3001/user/login', {
        email,
        code
      })
      if (res.data === 'success') {
        message.success('登录成功')
      }
    } catch (e) {
      message.error(e.message || '登录失败')
    }

  };


  return <div style={{ width: '500px', margin: '100px auto' }}>
    <Form form={form} onFinish={login}>

      <Form.Item
        label="邮箱"
        name="email"
        rules={[
          {
            required: true,
            message: '请输入邮箱地址',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="验证码"
        name="code"
        rules={[
          {
            required: true,
            message: '请输入验证码',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button onClick={sendEmailCode}>发送验证码</Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form.Item>

    </Form>
  </div>
};
export default App;
