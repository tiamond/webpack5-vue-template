import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '@/views/Home'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 懒加载。webpackChunkName 指定chunkname为 about
    component: () => import(/* webpackChunkName: "about" */ '@/views/About')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
