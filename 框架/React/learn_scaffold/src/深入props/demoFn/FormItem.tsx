import { ReactNode, cloneElement, isValidElement, useCallback } from 'react'
import { FormSetValue } from './Form'

export interface FormItemProps {
  name: string
  value: any
  label: string
  children?: ReactNode
  handleChange?: FormSetValue
}

const FormItem = (props: FormItemProps) => {
  const { label, children, handleChange, value, name } = props

  const onChange = useCallback(
    (value: any) => {
      handleChange && handleChange(name, value)
    },
    [name, handleChange]
  )

  return (
    <>
      <div className="form">
        <span>{label}</span>
        {isValidElement<any>(children) ? cloneElement(children, { value, onChange }) : null}
      </div>
    </>
  )
}

export default FormItem
