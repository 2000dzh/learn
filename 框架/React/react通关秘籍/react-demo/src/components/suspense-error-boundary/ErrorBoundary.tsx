import { Component, ErrorInfo } from 'react'

// 可使用 react-error-boundary 包

interface HasErr {
  hasError: boolean
  message?: string
}

class ErrorBoundary extends Component<any, HasErr> {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      message: error.message,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>出错了： {this.state.message}</div>
    }

    return this.props.children
  }
}

function Bbb() {
  const obj: any = {}
  // const b = obj.a.b

  return <div>{obj.a.b}</div>
}

export default function App() {
  return (
    <ErrorBoundary>
      <Bbb></Bbb>
    </ErrorBoundary>
  )
}
