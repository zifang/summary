import VueCoreImageUpload from 'vue-core-image-upload'
import './vueFilter.js'
// import userService from '@/service/userService/userService.js';
// 将请求服务化
import userService from './service/userService.js'
const SUCCESS = 200
// import mixs from 'mixs'
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
  //  混淆
  // mixins: [mixs],
  //  组件
  components: {
    'vue-core-image-upload': VueCoreImageUpload
  },
  //  方法
  methods: {
    methods: {
      // 裁剪一定尺寸的图片
      cutImg (url, size, verSize) {
        let _url = ''
        let _boolean = url.indexOf('jpg') > -1 || url.indexOf('jpeg') > -1 || url.indexOf('png') > -1 || url.indexOf('bmp') > -1
        if (!_boolean) {
          return url
        }
        if (url) {
          let _splitImg = url.split('.')
          let _typeImg = _splitImg[_splitImg.length - 1]
          let _resultSplitImg = url.split('.' + _typeImg)[0]
          _url = _resultSplitImg + '_' + size + 'x' + verSize + '.' + _typeImg
        }
        return _url
      }
    },
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
    // 上传图片
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
  },
  // <template>
  //   <ul>
  //     <li v-for="(visit, index) in visits" :key="index"><i>{{ visit.date | hours }}</i> - {{ visit.path }}</li>
  //   </ul>
  // </template>
  //  过滤
  filters: {
    hours (date) {
      return date.split('T')[1].split('.')[0]
    }
  },
  //  计算
  computed: {
    visits () {
      return this.$store.state.visits.slice().reverse()
    }
  }
}

// 判断登录授权 for example
const routes = [
  {
    path: '/',
    name: '/',
    component: ''
  },
  {
    path: '/repository',
    name: 'repository',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: ''
  },
  {
    path: '/login',
    name: 'login',
    component: ''
  }
]
console.log(routes)

// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//         if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//             next();
//         }
//         else {
//             next({
//                 path: '/login',
//                 query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//             })
//         }
//     }
//     else {
//         next();
//     }
// })
