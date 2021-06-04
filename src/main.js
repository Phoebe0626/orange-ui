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
// 引入 radio-group 组件
import ORadioGroup from './components/radio-group.vue'
// 引入 checkbox 组件
import OCheckbox from './components/checkbox.vue'
// 引入 checkbox-group 组件
import OCheckboxGroup from './components/checkbox-group.vue'
// 引入 form 组件
import OForm from './components/form.vue'
// 引入 form-item 组件
import OFormItem from './components/form-item.vue'
import OTabs from './components/tabs.vue'
import OTabPane from './components/tab-pane.vue'
import OLink from './components/link.vue'
// 引入字体图标
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

Vue.component(OButton.name, OButton)
Vue.component(ODialog.name, ODialog)
Vue.component(OInput.name, OInput)
Vue.component(OSwitch.name, OSwitch)
Vue.component(ORadio.name, ORadio)
Vue.component(ORadioGroup.name, ORadioGroup)
Vue.component(OCheckbox.name, OCheckbox)
Vue.component(OCheckboxGroup.name, OCheckboxGroup)
Vue.component(OForm.name, OForm)
Vue.component(OFormItem.name, OFormItem)
Vue.component(OTabs.name, OTabs)
Vue.component(OTabPane.name, OTabPane)
Vue.component(OLink.name, OLink)

new Vue({
  render: h => h(App)
}).$mount('#app')
