import Vue from 'vue'
import Router from 'vue-router'
import Fretboard from '@/components/Fretboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fretboard',
      component: Fretboard
    }
  ]
})
