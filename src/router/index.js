import Vue from 'vue'
import VueRouter from 'vue-router'
import addStu from '../views/addStu.vue';
import stuList from '../views/stuList.vue';
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: stuList
    },
    {
      path: '/addStu',
      component: addStu
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
