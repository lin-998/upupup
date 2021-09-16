import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Floor from "../components/page/Floor.vue";
import PartA from "../components/page/PartA.vue";
import PartB from "../components/page/PartB.vue";
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/PartA',
    children: [
      { path: '/PartA', component: PartA },
      { path: '/Floor', component: Floor },
      { path: '/PartB', component: PartB },
    
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
