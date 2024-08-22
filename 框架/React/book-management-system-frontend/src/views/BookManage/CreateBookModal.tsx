import { useEffect, useState } from 'react'
import { Modal, Form, Input, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useForm } from 'antd/es/form/Form'
import { create, update, _to } from '@/utils/request'
import Coverupload from './Coverupload'

export interface CreateBook {
  name: string
  author: string
  description: string
  cover: string
}

export interface CreateBookModalProps {
  isOpen: boolean
  handleClose: Function
  bookInfo: (CreateBook & { id: number }) | {}
  modalTitle: string
  formDisabled?: boolean
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

const CreateBookModal = (props: CreateBookModalProps) => {
  const { modalTitle, isOpen, handleClose, bookInfo, formDisabled = false } = props

  const [form] = useForm<CreateBook>()
  const [submitLoading, setSubmitLoading] = useState(false)

  const handleOk = async () => {
    setSubmitLoading(true)

    const [err] = await _to(form.validateFields())

    if (err) {
      setSubmitLoading(false)
      return
    }

    const values: any = form.getFieldsValue()

    let taskPromise: any = create
    let text = '创建成功'

    if (bookInfo && (bookInfo as CreateBook & { id: number }).id) {
      taskPromise = update
      values.id = (bookInfo as CreateBook & { id: number }).id
      text = '修改成功'
    }

    const [submitErr, submitRes] = await _to<any, any>(taskPromise(values))
    if (submitErr) {
      setSubmitLoading(false)
      message.error(submitErr.response.data.message)
      return
    }

    if (submitRes.status === 201 || submitRes.status === 200) {
      message.success(text)
      form.resetFields()
      props.handleClose(true)
    }

    setSubmitLoading(false)
  }

  const onCancel = () => {
    form.resetFields()
    handleClose()
  }

  useEffect(() => {
    if (isOpen) {
      form.setFieldsValue({
        ...bookInfo,
      })
    }
  }, [bookInfo, isOpen])

  return (
    <Modal
      title={modalTitle}
      open={isOpen}
      onOk={handleOk}
      onCancel={onCancel}
      okText={'创建'}
      cancelText={'取消'}
      confirmLoading={submitLoading}
      okButtonProps={{ disabled: formDisabled }}
    >
      <Form form={form} colon={false} disabled={formDisabled} {...layout}>
        <Form.Item
          label="图书名称"
          name="name"
          rules={[{ required: true, message: '请输入图书名称!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="作者"
          name="author"
          rules={[{ required: true, message: '请输入图书作者!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="描述"
          name="description"
          rules={[{ required: true, message: '请输入图书描述!' }]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          label="封面"
          name="cover"
          rules={[{ required: true, message: '请上传图书封面!' }]}
        >
          <Coverupload />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateBookModal
