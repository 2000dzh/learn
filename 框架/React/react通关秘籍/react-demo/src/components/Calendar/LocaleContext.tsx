import { createContext } from 'react'

export interface LocaleContextType {
  locale: string
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'zh',
})

export default LocaleContext
