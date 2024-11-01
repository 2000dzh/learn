import { ChangeEvent, PropsWithChildren, useRef, useState } from 'react'
import axios from 'axios'
import { isFunction, isPromise } from '@/utils/general'
import UploadList from './UploadList'
import Dragger from './Dragger'
import type { AxiosProgressEvent } from 'axios'
import type { UploadFile } from './UploadList'
import './indes.scss'

export interface UploadProps extends PropsWithChildren {
  // 上传的 url
  action: string
  // 携带的请求头
  headers?: Record<string, any>
  // 文件的表单字段名
  name?: string
  // 携带的数据
  data?: Record<string, any>
  withCredentials?: boolean
  // input 接受的文件格式
  accept?: string
  // input 可以多选
  multiple?: boolean
  // 上传文件之前的钩子
  beforeUpload?: (file: File) => boolean | Promise<File>
  // 进度更新时的回调
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
  onChange?: (file: File) => void
  onRemove?: (file: UploadFile) => void
  drap: boolean
}

function Dupload(props: UploadProps) {
  const {
    action,
    name,
    headers,
    data,
    withCredentials,
    accept,
    multiple,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    drap,
    children,
  } = props

  const fileInput = useRef<HTMLInputElement>(null)

  const [fileList, setFileList] = useState<Array<UploadFile>>([])

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }

  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)

    for (const file of postFiles) {
      if (isFunction(beforeUpload)) {
        const result = beforeUpload(file)
        if (result === true) {
          post(file)
        } else if (isPromise(result)) {
          result.then(() => post(file))
        }

        continue
      }

      post(file)
    }
  }

  const updataFileList = (updataFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList((prevList) => {
      return prevList.map((item) => {
        if (item.uid === updataFile.uid) {
          return { ...item, ...updateObj }
        }

        return item
      })
    })
  }

  const handleRemove = (file: UploadFile) => {
    setFileList((preList) => {
      return preList.reduce<Array<UploadFile>>((sum, item) => {
        if (item.uid !== file.uid) {
          sum.push(item)
        }

        return sum
      }, [])
    })

    if (isFunction(onRemove)) {
      onRemove(file)
    }
  }

  const post = (file: File) => {
    const uploadFile: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'read',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    }

    setFileList((prevList) => [uploadFile, ...prevList])

    const formData = new FormData()

    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
      })
    }

    axios
      .post(action, formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data',
        },
        // axios监听上传进度
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent.lengthComputable) {
            const percentage = Math.round((progressEvent.loaded / progressEvent.total!) * 100)

            updataFileList(uploadFile, {
              status: 'uploading',
              percent: percentage,
            })

            if (isFunction(onProgress)) {
              onProgress(percentage, file)
            }
          }
        },
        withCredentials,
      })
      .then((res) => {
        updataFileList(uploadFile, {
          status: 'success',
          response: res.data,
        })

        if (isFunction(onSuccess)) {
          onSuccess(res, file)
        }
        if (isFunction(onChange)) {
          onChange(file)
        }
      })
      .catch((err) => {
        updataFileList(uploadFile, {
          status: 'error',
          error: err,
        })

        if (isFunction(onError)) {
          onError(err, file)
        }
        if (isFunction(onChange)) {
          onChange(file)
        }
      })
  }

  return (
    <div className="upload-component">
      <div className="upload-input" onClick={handleClick}>
        {drap ? (
          <Dragger
            onFile={(files) => {
              uploadFiles(files)
            }}
          >
            {children}
          </Dragger>
        ) : (
          children
        )}
        <input
          className="upload-file-input"
          type="file"
          ref={fileInput}
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  )
}

export default Dupload
