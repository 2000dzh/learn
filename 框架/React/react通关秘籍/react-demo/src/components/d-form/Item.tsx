import React, {
  ChangeEvent,
  CSSProperties,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import FormContext from './FormContext'
import { isArray, isFunction } from '@/utils/general'
import Schema from 'async-validator'

export interface ItemProps {
  className?: string
  style?: CSSProperties
  label?: ReactNode
  name?: string
  valuePropName?: string
  rules?: Array<Record<string, any>>
  children?: ReactElement
}

const getValueFromEvent = (e: ChangeEvent<HTMLInputElement>) => {
  const { target } = e
  if (target.type === 'checkbox') {
    return target.checked
  }

  return target.value
}

function Item(props: ItemProps) {
  const { className, style, label, name, valuePropName, rules, children } = props

  const [value, setValue] = useState<string | number | boolean>()
  const [error, setError] = useState('')

  const { values = {}, onValueChange } = useContext(FormContext)

  const newValue = values[name || '']

  useEffect(() => {
    if (value !== newValue) {
      setValue(newValue)
    }
  }, [newValue])

  if (!name) {
    return children
  }

  const propsName: Record<string, any> = {}
  if (valuePropName) {
    propsName[valuePropName] = value
  } else {
    propsName.value = value
  }

  const handleValidate = (value: any) => {
    let errorMsg = null
    if (Array.isArray(rules) && rules.length) {
      const validator = new Schema({
        [name]: rules.map((rule) => ({
          type: 'string',
          ...rule,
        })),
      })

      validator.validate({ [name]: value }, (errors) => {
        if (errors) {
          if(isArray(errors) && errors.length) {
            const firstError = errors[0]
            setError(firstError.message!)
            errorMsg = firstError.message
          }
        } else {
          setError('')
          errorMsg = null
        }
      })
    }

    return errorMsg
  }

  const childEle =
    React.Children.toArray(children).length > 1
      ? children
      : React.cloneElement(children!, {
          ...propsName,
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            const value = getValueFromEvent(e)

            setValue(value)
            if (isFunction(onValueChange)) {
              onValueChange(name, value)
            }

            handleValidate(value)
          },
        })
}

export default Item
