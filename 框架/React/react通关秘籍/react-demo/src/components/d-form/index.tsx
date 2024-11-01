import { CSSProperties, FormEvent, ReactNode, useRef, useState } from 'react'
import classNames from 'classnames'
import { isFunction } from '@/utils/general'
import FormContext from './FormContext'

export interface DFormProps {
  className?: string
  style?: CSSProperties
  onFinish?: (values: Record<string, any>) => void
  onFinishFailed?: (error: Record<string, any>) => void
  initiaValues?: Record<string, any>
  children?: ReactNode
}

function Dform(props: DFormProps) {
  const { className, style, onFinish, onFinishFailed, initiaValues, children, ...others } = props

  const [values, setValues] = useState<Record<string, any>>(initiaValues || {})

  const validatorMap = useRef(new Map<string, Function>())

  const errors = useRef<Record<string, any>>({})

  const onValueChange = (key: string, value: any) => {
    values[key] = value
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    for (const [key, callbackFunc] of validatorMap.current) {
      if (isFunction(callbackFunc)) {
        errors.current[key] = callbackFunc()
      }
    }

    const errorList = Object.values(errors.current).filter(Boolean)

    if (errorList.length) {
      if (isFunction(onFinishFailed)) {
        onFinishFailed(errors.current)
      }
    } else {
      if (isFunction(onFinish)) {
        onFinish(values)
      }
    }
  }

  const handleValidateRegister = (name: string, cb: Function) => {
    validatorMap.current.set(name, cb)
  }

  const cls = classNames('ant-form', className)

  return (
    <FormContext.Provider
      value={{
        onValueChange,
        values,
        setValues: (v) => setValues(v),
        validateRegister: handleValidateRegister,
      }}
    >
      <form {...others} className={cls} style={style} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  )
}

export default Dform
