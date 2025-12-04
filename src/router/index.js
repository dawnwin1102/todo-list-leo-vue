import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import TodoApp from '../components/TodoApp.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard',
    redirect: '/'
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodoApp
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router