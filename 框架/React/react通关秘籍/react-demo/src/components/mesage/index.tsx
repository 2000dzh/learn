import useMessage from './useMessage'

interface BaseMethods {
  useMessage: typeof useMessage
}

const baseStaticMethods: BaseMethods = {
  useMessage,
}

export default baseStaticMethods
