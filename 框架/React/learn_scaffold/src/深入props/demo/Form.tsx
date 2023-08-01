import React, { Component, ReactNode, ReactElement, isValidElement } from 'react'
import { FormItemProps } from './FormItem'

interface FormProps {
  children: ReactNode
}

type FormData = {
  [key: string]: any
}

export type FormSetValue = (name: string, value: any) => void

class Form extends Component<FormProps, FormData> {
  constructor(props: FormProps) {
    super(props)

    const formData: FormData = {}
    React.Children.forEach(this.props.children, (child) => {
      if (isValidElement(child)) {
        const { name, value } = child.props
        formData[name] = value
      }
    })

    this.state = {
      formData: { ...formData },
    }
  }

  /* 用于提交表单数据 */
  submitForm = (cb: (res: FormData) => void) => {
    if (typeof cb === 'function') {
      cb({ ...this.state.formData })
    }
  }

  /* 重置表单数据 */
  resetForm = () => {
    const { formData } = this.state
    Object.keys(formData).forEach((item) => {
      formData[item] = ''
    })
    this.setState({ formData })
  }

  /* 设置表单数据层 */
  setValue: FormSetValue = (name, value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    })
  }

  render() {
    const { children } = this.props
    const renderChildren: ReactElement[] = []
    React.Children.forEach(children, (child) => {
      if (isValidElement<FormItemProps>(child) && (child.type as any).displayName === 'formItem') {
        const { name } = child.props
        /* 克隆`FormItem`节点，混入改变表单单元项的方法 */
        const Children = React.cloneElement(
          child,
          {
            key: name /* 加入key 提升渲染效果 */,
            handleChange: this.setValue /* 用于改变 value */,
            value: this.state.formData[name] || '' /* value 值 */,
          },
          child.props.children
        )
        renderChildren.push(Children)
      }
    })
    return renderChildren
  }
}

export default Form
