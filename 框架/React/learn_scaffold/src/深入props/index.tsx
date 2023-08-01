import { Component, FC, ReactNode, cloneElement, isValidElement, useRef } from 'react'
import { Button } from 'antd'
// 类组件
import Form from './demo/Form'
import FormItem from './demo/FormItem'
import Input from './demo/Input'

// 函数组件
import FormFn from './demoFn/Form'
import FormItemFn from './demoFn/FormItem'
import InputFn from './demoFn/Input'
import { FormMethods } from './demoFn/Form'

function ThoroughProps() {
  const msg = 'hello react'

  const say = () => {
    console.log(msg)
  }

  const renderName = () => '一个渲染函数'

  return (
    <>
      <h1>深入props</h1>
      <PropsComponent
        msg={msg} // 1.props 作为一个渲染数据源
        say={say} // 2.props 作为一个回调函数 callback
        MyComponent={MyComponent} // 3.props 作为一个类组件
        ComponentFn={ComponentFn} // 4.props 作为一个函数组件
        renderName={renderName} // 4.props 作为一个作为渲染函数
      >
        {(key: any) => <div key={key}>{msg}</div>}
        {/*  5.和4的区别是放在了 children 属性上 */}
        <MyComponent />
        {/*  6.作为一个插槽组件 */}
      </PropsComponent>

      <Demo />
    </>
  )
}

interface Props {
  msg: string
  say: () => any
  // 定义类组件类型renderName
  MyComponent: typeof Component
  // 定义函数式组件类型
  ComponentFn: FC
  renderName: () => ReactNode
  children: any[]
}

class PropsComponent extends Component<Props> {
  getChildren(children: any[]) {
    return children.map((item) => {
      if (isValidElement<{ msg?: string }>(item)) {
        // 可以混入新的props
        return cloneElement(item, { msg: this.props.msg, key: 2 })
      } else if (typeof item === 'function') {
        return item(1)
      }
      return null
    })
  }

  render() {
    const { msg, say, MyComponent, ComponentFn, renderName, children } = this.props
    const childrenNode = this.getChildren(children)
    return (
      <>
        <div>
          {msg}
          <MyComponent />
          <ComponentFn />
          {renderName()}
          <Button onClick={() => say()}>测试</Button>
          {childrenNode}
        </div>
      </>
    )
  }
}

class MyComponent extends Component<{ msg?: string }> {
  render() {
    return (
      <>
        <div>类组件</div>
      </>
    )
  }
}

function ComponentFn() {
  return (
    <>
      <div>函数组件</div>
    </>
  )
}

function Demo() {
  // 获取类组件实例类型
  const form = useRef<Form>(null)
  // 获取函数组件实例(需要转发)
  const formFn = useRef<FormMethods>(null)

  const reset = () => {
    if (form && form.current) {
      form.current.resetForm()
    }
  }

  const submit = () => {
    if (form && form.current) {
      form.current.submitForm((formValue) => {
        console.log(formValue)
      })
    }
  }

  const resetFn = () => {
    if (formFn && formFn.current) {
      formFn.current.resetForm()
    }
  }

  const submitFn = () => {
    console.log(formFn)
    if (formFn && formFn.current) {
      formFn.current.submitForm((formValue) => {
        console.log(formValue)
      })
    }
  }

  return (
    <>
      <hr />
      <h1>自定义类组件Form demo</h1>
      <Form ref={form}>
        <FormItem value="2121" name="age" label="年龄">
          <Input />
        </FormItem>
        <FormItem value="11" name="num" label="手机号">
          <Input />
        </FormItem>
      </Form>
      <div className="btns">
        <Button onClick={reset}>重置</Button>
        <Button onClick={submit}>确定</Button>
      </div>
      <h1>自定函数组件Form demo</h1>
      <FormFn ref={formFn}>
        <FormItemFn value="2121" name="age" label="年龄">
          <InputFn />
        </FormItemFn>
        <FormItemFn value="11" name="num" label="手机号">
          <InputFn />
        </FormItemFn>
      </FormFn>
      <div className="btns">
        <Button onClick={resetFn}>重置</Button>
        <Button onClick={submitFn}>确定</Button>
      </div>
    </>
  )
}

export default ThoroughProps
