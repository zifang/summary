import Vue from 'vue'
import hg from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
let Highlight = {}
Highlight.install = function (options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code')
    for (let block of blocks) {
      hg.highlightBlock(block)
    };
  })
}
export default Highlight
