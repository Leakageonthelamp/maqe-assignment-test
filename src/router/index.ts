import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'assignment one',
    component: () => import('../views/AssignmentOne.vue'),
  },
  {
    path: '/assignment-two',
    name: 'assignment two',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AssignmentTwo.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
