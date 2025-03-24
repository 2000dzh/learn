import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

// 微应用/scr/main.js
console.log('vue-demo子应用')


let instance = null

// 1. 将注册方法用函数包裹，供后续主应用与独立运行调用
function render (props = {}) {
  const { container } = props
  createApp(App).use(router).mount('#root')
}

// 判断是否在乾坤环境下，非乾坤环境下独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}


// 2. 导出的生命周期
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap () {
  console.log('vue-demo bootstrap')

}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount (props) {
  // console.log('[vue] props from main framework', props)
  render(props);
  loadScript()
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount () {

  instance = null
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update (props) {
  console.log('update props', props)
}

function loadScript () {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'http://127.0.0.1:5500/baseFile/index.js'
  script.setAttribute('data-type', 'vue-demo')
  const box = document.querySelector('[data-name=vue-demo]')
  box.appendChild(script)
  script.onerror = console.log
}