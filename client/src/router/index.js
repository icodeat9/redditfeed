import Vue from 'vue'
import Router from 'vue-router'
import DashFeed from '@/components/DashFeed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashFeed',
      component: DashFeed
    }
  ]
})
