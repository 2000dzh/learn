import {
  useState,
  Children,
  ReactNode,
  isValidElement,
  cloneElement,
  ReactElement,
  useCallback,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { FormItemProps } from './FormItem'
import { Button } from 'antd'

interface FormProps {
  children: ReactNode
}

interface FormData {
  [key: string]: any
}

export interface FormMethods {
  resetForm: () => void
  submitForm: (cb: (obj: FormData) => void) => void
}

export type FormSetValue = (name: string, value: any) => void

function useGetInitFormData(props: FormProps) {
  return useMemo(() => {
    const data: FormData = {}
    Children.forEach(props.children, (child) => {
      if (isValidElement(child)) {
        const { name, value } = child.props
        data[name] = value
      }
    })

    return data
  }, [props.children])
}

const Form = forwardRef((props: FormProps, ref: any) => {
  const initFormData = useGetInitFormData(props)
  const [formData, setFormData] = useState<FormData>({ ...initFormData })

  const setValue: FormSetValue = useCallback(
    (name, value) => {
      setFormData({
        ...formData,
        [name]: value,
      })
    },
    [formData]
  )

  const resetForm = () => {
    const newFormData = { ...formData }
    Object.keys(newFormData).forEach((item) => {
      newFormData[item] = ''
    })
    setFormData(newFormData)
  }

  const submitForm = (cb?: (obj: FormData) => void) => {
    if (typeof cb === 'function') {
      cb(formData)
    }
  }

  const { children } = props
  const renderChildren: ReactElement[] = []

  useImperativeHandle<any, FormMethods>(ref, () => ({
    resetForm,
    submitForm,
  }))

  Children.forEach(children, (child) => {
    if (isValidElement<FormItemProps>(child)) {
      const { name } = child.props
      const node = cloneElement(
        child,
        {
          key: name,
          value: formData[name] || '',
          handleChange: setValue,
        },
        child.props.children
      )
      renderChildren.push(node)
    }
  })
  return (
    <>
      {renderChildren}
      <Button onClick={() => submitForm((obj) => console.log(obj))}>测试</Button>
    </>
  )
})

export default Form
