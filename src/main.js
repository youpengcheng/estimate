// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import api from '../static/api'//引用文件

Vue.prototype.$api = api//挂载到Vue实例上面


import Element from 'element-ui'
Vue.use(Element, {
  size: 'small' // 设置element-ui默认大小medium
})
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
