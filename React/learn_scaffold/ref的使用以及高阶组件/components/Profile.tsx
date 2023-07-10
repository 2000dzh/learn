import React, { memo, forwardRef } from 'react'

interface Props {
  message: string
}

const Profile = forwardRef<HTMLHeadingElement, Props>(function (props, ref) {
  console.log('Profile render刷新')

  return (
    <>
      <h2 ref={ref}>函数式组件</h2>
    </>
  )
})


export default memo(Profile)
