import Vue from 'vue'
const requireContext = require.context(
  './globar',
  true, //递归查找目录
  /\.vue$/ //匹配规则
)

requireContext.keys().forEach(filename => {
  const componentConfig = requireContext(filename) //获取组件内容
  Vue.component(
    componentConfig.default.name || componentConfig.name,
    componentConfig.default || componentConfig
  )
})
