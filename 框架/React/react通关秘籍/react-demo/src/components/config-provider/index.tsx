import React from 'react'
import { ConfigContext } from './context'
import type { SpaceConfig } from './context'

export interface ConfigProviderProps {
  children?: React.ReactNode
  space?: SpaceConfig
}

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children, ...rest } = props

  return <ConfigContext.Provider value={{ ...rest }}>{children}</ConfigContext.Provider>
}

export default ConfigProvider
