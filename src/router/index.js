import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hungteshun from '@/components/Hungteshun'
import Hung from '@/components/Hung'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hungteshun',
      name: 'hungteshun',
      component: hungteshun
    },
    {
      path: '/Hung',
      name: 'Hung',
      component: Hung
    }
  ]
})
