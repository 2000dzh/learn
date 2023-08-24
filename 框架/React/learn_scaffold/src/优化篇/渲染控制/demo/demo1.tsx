export interface Demo1Props {
  data: any
}

const Demo1 = (props: Demo1Props) => {
  const { data } = props
  return <>{data}</>
}

export default Demo1
