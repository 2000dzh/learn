import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '@/views/demo.vue'

Vue.use(VueRouter)

export const constantRoutes = [
  { path: '/foo', component: Demo }
]

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const routes = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  routes.matcher = newRouter.matcher
}

export default routes