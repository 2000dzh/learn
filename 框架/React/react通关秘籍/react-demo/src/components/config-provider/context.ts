import React from 'react'
import type { SpaceProps } from '../Space'

export interface ComponentStyleConfig {
  className?: string
  style?: React.CSSProperties
}

export type SpaceConfig = ComponentStyleConfig & Pick<SpaceProps, 'className' | 'size' | 'styles'>

export interface ConfigConsumerProps {
  space?: SpaceConfig
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({})

export const { Consumer: ConfigConsumer } = ConfigContext
