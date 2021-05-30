import Vue from 'vue'
import App from './App.vue'
// 引入 button 组件
import OButton from './components/button.vue'
// 引入 dialog 组件
import ODialog from './components/dialog.vue'
// 引入字体图标
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

Vue.component(OButton.name, OButton)
Vue.component(ODialog.name, ODialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
