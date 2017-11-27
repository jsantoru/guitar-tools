import Vue from 'vue'
import Router from 'vue-router'
import Fretboard from '@/components/Fretboard'
import HowToUse from '@/components/HowToUse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fretboard',
      component: Fretboard
    },
    {
      path: '/howtouse',
      name: 'HowToUse',
      component: HowToUse
    }
  ]
})
