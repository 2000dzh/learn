import { Progress } from 'antd'
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  // FileOutlined,
  LoadingOutlined,
} from '@ant-design/icons'

export interface UploadFile {
  uid: string
  size: number
  name: string
  status?: 'read' | 'uploading' | 'success' | 'error'
  percent?: number
  raw?: File
  response?: any
  error?: any
}

interface UploadListProps {
  fileList: Array<UploadFile>
  onRemove: (file: UploadFile) => void
}

function UploadList(props: UploadListProps) {
  const { fileList, onRemove } = props
  return (
    <>
      <ul>
        {fileList.map((item) => {
          return (
            <li className={`upload-list-item upload-list-item-${item.status}`} key={item.uid}>
              <span className="file-name">
                {(item.status === 'uploading' || item.status === 'read') && <LoadingOutlined />}
                {item.status === 'success' && <CheckOutlined />}
                {item.status === 'error' && <CloseOutlined />}
                {item.name}
              </span>

              <span className="file-actions">
                <DeleteOutlined
                  onClick={() => {
                    onRemove(item)
                  }}
                />
              </span>
              {item.status === 'uploading' && <Progress percent={item.percent || 0} />}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UploadList
