import { useEffect, useState, useRef } from 'react'
import { Button, Popover, Flex, Divider, Space, Tour } from 'antd'
import { Mask } from './mark'
import { OnBoarding } from './index'
import type { TourProps } from 'antd'

const Demo: React.FC = () => {
  // const [element, setElement] = useState<HTMLElement>()

  // useEffect(() => {
  //   console.log(document.getElementById('ceshi'))
  //   setElement(document.getElementById('ceshi2')!)
  // }, [])

  return (
    <>
      {/* <Mask
        element={element!}
        renderMaskContent={(wrapper) => {
          return (
            <Popover
              content={
                <div style={{ width: 300 }}>
                  <p>hello</p>
                  <Button type="primary">下一步</Button>
                </div>
              }
              open={true}
            >
              {wrapper}
            </Popover>
          )
        }}
      ></Mask>
      <Button id="ceshi">测试</Button>
      <Button id="ceshi1">测试1</Button>
      <Button id="ceshi2">测试2</Button> */}

      <Demo2 />
    </>
  )
}

function Demo2() {
  const [open, setOpen] = useState(true)

  return (
    <div className="App">
      <Flex gap="small" wrap="wrap" id="btn-group1">
        <Button type="primary">Primary Button</Button>
        <Button onClick={() => setOpen(true)}>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>

      <div style={{ height: '1000px' }}></div>

      <Flex wrap="wrap" gap="small">
        <Button type="primary" danger>
          Primary
        </Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger>
          Dashed
        </Button>
        <Button type="text" danger>
          Text
        </Button>
        <Button type="link" danger>
          Link
        </Button>
      </Flex>

      <div style={{ height: '500px' }}></div>

      <Flex wrap="wrap" gap="small">
        <Button type="primary" ghost>
          Primary
        </Button>
        <Button ghost>Default</Button>
        <Button id="btn-group2" type="dashed" ghost>
          Dashed
        </Button>
        <Button type="primary" danger ghost id="btn-group3">
          Danger
        </Button>
      </Flex>

      {/* <Demo3 /> */}

      <OnBoarding
        boardingOpen={open}
        onStepsEnd={() => setOpen(false)}
        steps={[
          {
            selector: () => {
              return document.getElementById('btn-group1')
            },
            renderContent: () => {
              return '神说要有光1'
            },
            placement: 'bottom',
          },
          {
            selector: () => {
              return document.getElementById('btn-group2')
            },
            renderContent: () => {
              return '于是就有了光'
            },
            placement: 'bottom',
          },
          {
            selector: () => {
              return document.getElementById('btn-group3')
            },
            renderContent: () => {
              return '你相信光么'
            },
            placement: 'bottom',
          },
        ]}
      />
    </div>
  )
}

const Demo3: React.FC = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const [open, setOpen] = useState<boolean>(true)

  console.log('1')

  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ]
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} />
      </Space>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  )
}

export default Demo
