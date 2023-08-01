import { Component } from 'react'

interface InputProps {
  value?: any
  onChange?: (value: any) => void
}

class Input extends Component<InputProps> {
  static displayName = 'input'

  render() {
    const { value, onChange } = this.props
    return (
      <>
        <input className="input" onChange={(e) => onChange && onChange(e.target.value)} value={value} />
      </>
    )
  }
}

export default Input
