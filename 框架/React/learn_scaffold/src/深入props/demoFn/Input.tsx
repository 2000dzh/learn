interface InputProps {
  value?: any
  onChange?: (value: any) => void
}

const Input = (props: InputProps) => {
  const { value, onChange } = props
  return (
    <>
      <input value={value} onChange={(e) => onChange && onChange(e.target.value)} />
    </>
  )
}

export default Input
