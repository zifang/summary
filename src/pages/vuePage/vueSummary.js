import './vueFilter.js'
export default {
  data () {
    return {
      item: {
        status: 1,
        evaluateStatus: 0
      },
      textCor: 'red',
      colors: {
        color: '#08c'
      }
    }
  },
  methods: {
    phoneFilter (value) {    // 手机号码中间四位值替换
      if (!value) return '暂无手机号'
      let _subphone = value.substring(3, 7)
      return value.replace(_subphone, '****')
    },
    checked (item) {
      if (typeof item.checked === 'undefined') {
        this.$set(item, 'checked', true)
        // or Vue.set(item, "checked", true);
      } else {
        item.checked = !item.checked
      }
    }
  }
}
