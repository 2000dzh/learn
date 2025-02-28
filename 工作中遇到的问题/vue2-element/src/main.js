import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router/index.js';
import App from '@/App.vue';
// import ElSelectV2 from '@vue2-element/el-select-v2';
import '@vue2-element/dist/ElSelectV2/ElSelectV2.css'
import { ElSelectV2 } from '@vue2-element/dist/ElSelectV2/ElSelectV2.js'

console.log(ElSelectV2)

Vue.use(ElementUI);
Vue.use(ElSelectV2);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});