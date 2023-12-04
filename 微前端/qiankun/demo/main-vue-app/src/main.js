import { createApp } from 'vue'
import { registerMicroApps,start } from 'qiankun'

import App from './App.vue'

console.log(registerMicroApps)

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//http://127.0.0.1:5173/',
    container: '#container',
    activeRule: '/app-react',
  },
])
start();

createApp(App).mount('#app')