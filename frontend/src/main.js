// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'  /*应用APP这个组件*/
import router from './router'  /*应用路由配置*/

import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',  /*最后效果将会替换页面中id为app的div元素*/
  router,
  components: { App }, /*告知当前页面想使用App这个组件*/
  template: '<App/>'  /*告知页面这个组件用这样的标签来包裹着,并且使用它*/
})
