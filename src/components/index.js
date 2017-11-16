import Vue from 'vue'
import ScrollTop from './scroll-top.vue'

ScrollTop.install = function (options) {
  Vue.component(ScrollTop.name, ScrollTop)
}
export default ScrollTop
