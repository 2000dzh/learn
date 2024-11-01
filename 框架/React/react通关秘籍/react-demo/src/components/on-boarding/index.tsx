import { memo, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button, Popover } from 'antd'
import { isFunction } from '@/utils/general'
import { Mask } from './mark'
import './index.scss'
import type { TooltipPlacement } from 'antd/es/tooltip'

export interface OnBoardingStepConfig {
  // 每一步在哪个元素
  selector: () => HTMLElement | null

  // 位置信息
  placement?: TooltipPlacement

  // 显示什么内容
  renderContent?: (currentStep: number) => React.ReactNode

  // 上一步回调
  beforeForward?: (currentStep: number) => void

  // 下一步回调
  beforeBack?: (currentStep: number) => void
}

export interface OnBoardingProps {
  boardingOpen: boolean

  // 指定显示第几步
  step?: number

  steps: Array<OnBoardingStepConfig>

  getContainer?: () => HTMLElement

  // 全部完成后的回调
  onStepsEnd?: () => void
}

// type MyReturnType<F extends (...args: Array<any>) => any> = F extends (...args: Array<any>) => infer R ? R : never

// todo popover 位置会闪一下
// RenderPopover 组件优化
export const OnBoarding: React.FC<OnBoardingProps> = (props) => {
  const { boardingOpen = false, step = 0, steps, getContainer, onStepsEnd } = props

  const [currentStep, setCurrentStep] = useState(step)

  const getCurrentStep = useMemo(() => steps[currentStep] || {}, [currentStep])
  const isStart = useMemo(() => currentStep === 0, [currentStep])
  const isEnd = useMemo(() => currentStep === steps.length - 1, [currentStep, steps])

  let currentSelectedElement: ReturnType<OnBoardingStepConfig['selector']> = null
  if (isFunction(getCurrentStep.selector)) {
    currentSelectedElement = getCurrentStep.selector()
  }

  let currentContainerElement = document.body
  if (isFunction(getContainer)) {
    currentContainerElement = getContainer()
  }

  const back = async () => {
    if (currentStep === 0) {
      return
    }

    const { beforeBack } = getCurrentStep
    if (isFunction(beforeBack)) {
      await beforeBack(currentStep)
    }
    setCurrentStep(currentStep - 1)
  }

  const forward = async () => {
    if (currentStep === steps.length - 1) {
      if (isFunction(onStepsEnd)) {
        onStepsEnd()
      }
      setCurrentStep(0)
      return
    }

    const { beforeForward } = getCurrentStep
    if (isFunction(beforeForward)) {
      await beforeForward(currentStep)
    }
    setCurrentStep(currentStep + 1)
  }

  useEffect(() => {
    setCurrentStep(step)
  }, [step])

  const RenderPopover = (wrapper: React.ReactNode) => {
    console.log('RenderPopover')
    const [open, setOpen] = useState(true)
    if (Object.keys(getCurrentStep).length === 0) {
      return wrapper
    }

    const { renderContent } = getCurrentStep
    const content = isFunction(renderContent) ? renderContent(currentStep) : null

    const operation = (
      <div className={'onboarding-operation'}>
        {isStart ? null : (
          <Button className={'back'} onClick={() => back()}>
            上一步
          </Button>
        )}
        <Button className={'forward'} type={'primary'} onClick={() => forward()}>
          {isEnd ? '我知道了' : '下一步'}
        </Button>
      </div>
    )
    
    return (
      <Popover
        content={
          <div>
            {content}
            {operation}
          </div>
        }
        open={open}
        placement={getCurrentStep.placement}
      >
        {wrapper}
      </Popover>
    )
  }

  const [, setRefreshKey] = useState(0)

  useEffect(() => {
    setRefreshKey(1)
  }, [])

  console.log(currentSelectedElement)

  if (!boardingOpen) {
    return
  }

  if (!currentSelectedElement) {
    return
  }

  const mask = (
    <Mask
      container={currentContainerElement}
      element={currentSelectedElement}
      renderMaskContent={(wrapper: React.ReactNode) => RenderPopover(wrapper)}
    />
  )

  return createPortal(mask, currentContainerElement)
}
