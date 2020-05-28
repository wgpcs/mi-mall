import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/index/home'),
  },
]

const createRouter = () =>
  new Router({
    routes: constantRoutes,
  })

const router = createRouter()

export default router
