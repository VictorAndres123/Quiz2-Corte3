import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Rol from '../views/Rol.vue';
import Modulo from '../views/Modulo.vue';
import HomePage from '../views/HomePage.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/rol',
    component: Rol
  },
  {
    path: '/modulo',
    component: Modulo
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
