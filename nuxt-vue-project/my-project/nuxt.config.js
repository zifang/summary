module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-nuxt-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '嘉银证券,最懂你的港股互联网证券交易商,香港证监会认可的持牌法团,提供港股极速开户及交易服务。' },
      { hid: 'Keywords', name: 'Keywords', content: '嘉银证券,港股开户,港股行情,证券开户'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // plugins:['~/plugins/axios'],
    modules: [
      '@nuxtjs/axios'
    ],
    axios: {
      prefix: '/scs-api',
      proxy: true
    },
    proxy: {
      "/scs-api": {
        target: "http://t1-scs.jiayin95.net/scm-web",
        pathRewrite: {
          "^/scs-api": "/scs-api"
        }
      }
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    publicPath: '/scs-api/',
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

