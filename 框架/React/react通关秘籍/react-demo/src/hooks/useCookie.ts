import { useCallback, useState } from 'react'
import Cookies from 'js-cookie'
import { isString } from 'antd/es/button'

function useCookie(
  cookieName: string
): [string | null, (newValue: string, options?: Cookies.CookieAttributes) => void, () => void] {
  const [value, setValue] = useState(Cookies.get(cookieName) || null)

  const updateCookie = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes) => {
      const val = isString(newValue) ? newValue : ''
      Cookies.set(cookieName, val, options)
      setValue(val)
    },
    [cookieName]
  )

  const deleteCookie = useCallback(() => {
    Cookies.remove(cookieName)
    setValue(null)
  }, [cookieName])

  return [value, updateCookie, deleteCookie]
}

export default useCookie
