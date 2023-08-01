import { Component, ReactNode, cloneElement, isValidElement } from 'react'
import { FormSetValue } from './Form'

export interface FormItemProps {
  value: any
  name: string
  handleChange?: FormSetValue
  label: string
  children: ReactNode
}

class FormItem extends Component<FormItemProps> {
  static displayName = 'formItem'

  onChange = (value: any) => {
    const { handleChange, name } = this.props
    handleChange && handleChange(name, value)
  }

  render() {
    const { children, value, label } = this.props
    return (
      <>
        <div className="form">
          <span className="label">{label}:</span>
          {isValidElement<any>(children) && (children.type as any).displayName === 'input'
            ? cloneElement(children, { value, onChange: this.onChange })
            : null}
        </div>
      </>
    )
  }
}

export default FormItem
