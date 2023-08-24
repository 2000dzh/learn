import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Button } from 'antd'

const Father = () => {
  const [fatherMsg, setFatherMsg] = useState('')
  const [sonMsg, setSonMsg] = useState('')

  const sonRef = useRef<subComponentExposureFn>()

  const toSon = () => {
    if (sonRef.current && sonRef.current.fatherSay) {
      sonRef.current.fatherSay(fatherMsg)
    }
  }

  return (
    <>
      <div className="father">
        <div>子组件对我说{sonMsg}</div>
        我对子组件说 <input type="text" onChange={(e) => setFatherMsg(e.target.value)} />
        <Button onClick={toSon}>to Son</Button>
      </div>
      <Son ref={sonRef} toFather={setSonMsg} />
    </>
  )
}

interface subComponentExposureFn {
  fatherSay: (fatherMes: string) => void
}

const Son = forwardRef((props: { toFather: (sonMsg: string) => void }, ref) => {
  const { toFather } = props

  const [fatherMsg, setFatherMsg] = useState('')
  const [sonMsg, setSonMsg] = useState('')

  const fatherSay = (fatherMes: string) => {
    setFatherMsg(fatherMes)
  }

  useImperativeHandle<any, subComponentExposureFn>(ref, () => ({
    fatherSay,
  }))

  return (
    <>
      <div className="son">
        <div>父组件对我说{fatherMsg}</div>
        我对父组件说 <input type="text" onChange={(e) => setSonMsg(e.target.value)} />
        <Button onClick={() => toFather(sonMsg)}>to father</Button>
      </div>
    </>
  )
})

export default Father
