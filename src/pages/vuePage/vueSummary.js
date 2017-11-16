import VueCoreImageUpload from 'vue-core-image-upload'
import './vueFilter.js'
// import userService from '@/service/userService/userService.js';
// 将请求服务化
import userService from './service/userService.js'
const SUCCESS = 200
export default {
  data () {
    return {
      imgUrl: '',
      user: {},
      url: this.baseUrl + '/updateHeadImg',   // 图片存储方法路径
      auth: { token: localStorage.token },
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
  components: {
    'vue-core-image-upload': VueCoreImageUpload
  },
  methods: {
    getInfo () {
      // let params = {};
      userService.getUserInfo(this.$http, this.baseUrl, {}).then((response) => {
        if (response.code === SUCCESS) {
          this.user = response.model
          this.imgUrl = this.user.headImgUrl
          window.localStorage.setItem('user', JSON.stringify(this.user))
        }
      })
    },
    imageuploaded (res) {
      if (res.code === SUCCESS) {
        this.imgUrl = res.model
      }
    },
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
