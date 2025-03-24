import { registerMicroApps, start } from 'qiankun';

console.log('base-demo', '主应用')

console.log(document.currentScript)

// 1. 获取微应用配置
const MICRO_CONFIG = [
  {
    name: 'vue-demo', // 应用的名字 必填 唯一
    // entry: '//localhost:8081/index.html', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    entry: '/vue-demo/index.html', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: '#app', // 挂载具体容器 ID
    activeRule: '/#/vue-demo',
  },
  {
    name: 'react-demo', // 应用的名字 必填 唯一
    entry: '//localhost:8082/index.html', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: '#app', // 挂载具体容器 ID
    activeRule: '/#/react-demo',
  }
]

// 2. 注册微应用
registerMicroApps(MICRO_CONFIG, {
  beforeLoad (app) {
    console.log(app, 'beforeLoad')

    // 等待 5s 再加载子应用资源
    // return new Promise(resolve => setTimeout(resolve, 5000))
  },
  beforeMount () {
    console.log(app, 'beforeMount')
  }
})

start({
  prefetch: false,
  excludeAssetFilter (url) {
    console.log(url, 'excludeAssetFilter')
    return true
  }
}) // 启动微服务