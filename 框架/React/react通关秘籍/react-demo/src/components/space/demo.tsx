import MySpace from './index'
import { Space } from 'antd'
import ConfigProvider from '../config-provider'

export default function Demo() {
  return (
    <div>
      <ConfigProvider space={{ size: 'large' }}>
        <MySpace className="container" direction="horizontal" align="end" wrap={true} split={1}>
          {[[<div>111</div>, <div>222</div>], [<div>333</div>], null, 1]}
          <span>hello world</span>
        </MySpace>
      </ConfigProvider>
      <Space
        className="container"
        direction="horizontal"
        align="end"
        wrap={true}
        size={['large', 'small']}
        split={1}
      >
        {[[<div>111</div>, <div>222</div>], [<div>333</div>], null]}
        <span>hello world</span>
      </Space>
      <div>11</div>
    </div>
  )
}
