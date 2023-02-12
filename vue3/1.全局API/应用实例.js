// 1. app.version
// 提供当前应用所使用的 Vue 版本号
// 这在插件中很有用，因为可能需要根据不同的 Vue 版本执行不同的逻辑。

// 2. app.config
// 每个应用实例都会暴露一个 config 对象
// 其中包含了对这个应用的配置设定。你可以在挂载应用前更改这些属性
/**
 *  import { createApp } from 'vue'
 *  import App from './App.vue'
 *  const app = createApp(App)
 *  挂载前更改 config 属性
 *  app.mount('#app')
 */

// 3. app.config.errorHandler
// 用于为应用内抛出的未捕获错误指定一个全局处理函数。

// 4. app.config.warnHandler
// 用于为 Vue 的运行时警告指定一个自定义处理函数。

// 5. app.config.globalProperties
// 一个用于注册能够被应用内所有组件实例访问到的全局属性的对象。
/**
 *  app.config.globalProperties.msg = 'hello'
 *
 *  1.setup内访问
 *  <script lang="ts" setup>
 *  import { getCurrentInstance } from "vue";
 *  const internalInstance = getCurrentInstance();
 *  const request = internalInstance?.appContext.config.globalProperties.msg;
 *  console.log(request)
 *  </script>
 *
 *  2.也可以使用 app.provide 替代 globalProperties
 *  import { createApp } from 'vue'
 *  const app = createApp(app)
 *  app.provide('message', 'hello')
 *  app.provide('tips', 'hello vue')
 * 
 *  <script lang="ts" setup>
 *   import { inject } from 'vue'
 *   const message = inject('message')
 *   const tips = inject('tips')
 *  </script>
 */

// 6.app.config.optionMergeStrategies
// 一个用于定义自定义组件选项的合并策略的对象。
