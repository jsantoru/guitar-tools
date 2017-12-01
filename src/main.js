// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    intervals: [
      {name:"Root", isSelected:true, class:"r"},
      {name:"b9", isSelected:false, class:"b9"},
      {name:"2/9", isSelected:true, class:"two"},
      {name:"3", isSelected:true, class:"three"},
      {name:"four", isSelected:true, class:"four"},
      {name:"#4/b5", isSelected:true, class:"b5"},
      {name:"5", isSelected:true, class:"five"},
      {name:"#5/b6", isSelected:true, class:"b6"},
      {name:"6", isSelected:true, class:"six"},
      {name:"m7", isSelected:true, class:"m7"},
      {name:"7", isSelected:true, class:"seven"},
    ]
  },
  router,
  template: '<App/>',
  components: { App }
})
