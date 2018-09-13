// vue-meta-info 解决spa title自动定义的问题
// npm install vue-meta-info --save-dev

// 用法：

// 全局引入：
import MetaInfo from 'vue-meta-info'

Vue.use(MetaInfo)

export default {
  metaInfo: {
    title: '嘉银证券-最懂你的港股交易商',   // set title
    meta: [{                 // set meta
      name: 'Description',
      content: '嘉银证券,最懂你的港股互联网证券交易商,香港证监会认可的持牌法团,提供港股极速开户及交易服务。'
    },{                 // set meta
      name: 'KeyWords',
      content: '嘉银证券,港股开户,港股行情,证券开户'
    }]
  }
}

// 如果你的 title 或者 meta 是异步加载的，那么你可能需要这样使用：
export default {
  name: 'async',
  metaInfo () {
    return {
      title: this.pageName
    }
  },
  data () {
    return {
      pageName: 'loading'
    }
  },
  mounted () {
    setTimeout(() => {
      this.pageName = 'async'
    }, 2000)
  }
}