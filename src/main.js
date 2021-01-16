import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/components/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
Vue.config.productionTip = false
/**
 * hightChart
 */
// import HighchartsVue from 'highcharts-vue'
// Vue.use(HighchartsVue)

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
