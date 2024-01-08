import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AllTestsView from '@/views/AllTestsView.vue'
import MyTestsView from '@/views/MyTestsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test/all',
      name: 'all tests',
      component: AllTestsView
    },
    {
      path: '/test/my',
      name: 'my tests',
      component: MyTestsView
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router
