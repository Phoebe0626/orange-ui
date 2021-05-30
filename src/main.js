import Vue from 'vue'
import App from './App.vue'
import OButton from './components/button.vue'
Vue.config.productionTip = false

Vue.component(OButton.name, OButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
