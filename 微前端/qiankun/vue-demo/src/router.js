import { createRouter, createWebHashHistory } from 'vue-router'



export const router = createRouter({
  history: createWebHashHistory('/#/vue-demo/'),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('./home.vue')
    }
  ],
  scrollBehavior: () => ({ left: 0, top: 0 }),
}).onError((error, to, from) => {
  console.error('Uncaught error during route navigation:', error);
  // 可以在这里进行错误处理，例如跳转到错误页面
})