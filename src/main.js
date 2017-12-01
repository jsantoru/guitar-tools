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
    rootNote: "C",
    filterName: "None",
    intervals: [
      {id:"r", name:"Root", isSelected:true, class:"r"},
      {id:"b9", name:"b9", isSelected:true, class:"b9"},
      {id:"2", name:"2/9", isSelected:true, class:"two"},
      {id:"m3", name:"m3", isSelected:true, class:"m3"},
      {id:"3", name:"3", isSelected:true, class:"three"},
      {id:"4", name:"four", isSelected:true, class:"four"},
      {id:"b5", name:"#4/b5", isSelected:true, class:"b5"},
      {id:"5", name:"5", isSelected:true, class:"five"},
      {id:"b6", name:"#5/b6", isSelected:true, class:"b6"},
      {id:"6", name:"6", isSelected:true, class:"six"},
      {id:"m7", name:"m7", isSelected:true, class:"m7"},
      {id:"7", name:"7", isSelected:true, class:"seven"},
    ]
  },
  router,
  template: '<App/>',
  components: { App }
})
