import Vue from 'vue'
import App from './App.vue'
// 引入 button 组件
import OButton from './components/button.vue'
// 引入 dialog 组件
import ODialog from './components/dialog.vue'
// 引入 input 组件
import OInput from './components/input.vue'
// 引入 switch 组件
import OSwitch from './components/switch.vue'
// 引入 radio 组件
import ORadio from './components/radio.vue'
// 引入字体图标
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

Vue.component(OButton.name, OButton)
Vue.component(ODialog.name, ODialog)
Vue.component(OInput.name, OInput)
Vue.component(OSwitch.name, OSwitch)
Vue.component(ORadio.name, ORadio)

new Vue({
  render: h => h(App)
}).$mount('#app')
