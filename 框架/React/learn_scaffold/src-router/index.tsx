import ReactDOM from 'react-dom/client'
// import Root from './App'
import Root from './App copy'
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>
)
