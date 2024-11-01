import React from 'react'
import { Button, message, Upload } from 'antd'
import Dupload from './index'
import type { UploadProps } from 'antd'
import type { UploadProps as DuploadProps } from './index'

const props: UploadProps = {
  name: 'file',
  action: '/upload',
  headers: {},
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

const Dprops: DuploadProps = {
  name: 'file',
  action: '/upload',
  beforeUpload(file) {
    if (file.name.includes('ceshi.html')) {
      return false
    }
    return true
  },
  onSuccess(ret) {
    console.log('onSuccess', ret)
  },
  onError(err) {
    console.log('onError', err)
  },
  onProgress(percentage, file) {
    console.log('onProgress', percentage)
  },
  onChange(file) {
    console.log('onChange', file)
  },
  drap: true
}

function Demo1() {
  return (
    <Dupload {...Dprops}>
      <Button>Click to Upload</Button>
    </Dupload>
  )
}

function Demo() {
  return (
    <Demo1 />

    // <Upload {...props}>
    //   <Button>Click to Upload</Button>
    // </Upload>
  )
}

export default Demo
