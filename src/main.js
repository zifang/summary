// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import http from '@/components/http.js'
import App from './App'
import router from './router'
import Highlight from '@/components/highlight.js'
import { Menu, Submenu, MenuItem, MenuItemGroup, Tabs, TabPane, Button } from 'element-ui'

Vue.use(Highlight)

Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Button.name, Button)
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.baseUrl = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
