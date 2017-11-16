// node内置的插件，用于加载路径
const path = require('path')
const webpack = require('webpack')
// 把css从页面中分离出来的插件，如果不适用，css会被一起压缩到js内
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'assets/css/[name].[contenthash].css'
  // disable: process.env.NODE_ENV === "development"
})

const config = require('./config')
// process.env用于检查系统变量，在启动项目的时候可以设置变量
// 在json中配置，同时需要安装cross-env
// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "build": "cross-env NODE_ENV=production webpack --progress --colors",
//   "start": "cross-env NODE_ENV=development webpack-dev-server --devtool source-map --inline --host 0.0.0.0  --hot --progress --colors "
// },
let prod = (process.env.NODE_ENV === 'production')
let webpackConfig = {
  entry: config.entry,  // 项目的入口文件
  output: { // 项目的输入文件路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[hash].js',
    publicPath: '/'
  },
  // 它告知 webpack 每一种文件都需要使用什么加载器来处理：多个loader之间用“!”连接起来。
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            minimize: prod
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }],
        // use style-loader in development
        fallback: 'style-loader'
      })
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            minimize: prod
          }
        }]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      enforce: 'pre',
      // enforce: 'post',
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    },
    // { test: /\.jpg$/, use: ["file-loader"] },
    {
      test: /\.png|\.jpg|woff|woff2|ttf|eot|svg|swf$/,
      use: [{
        loader: 'url-loader',
        options: {
          // mimetype: "image/png",
          limit: 8192
        }
      }]
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
          // attrs: [':src']
        }
      }]
    }
    ]
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    // 查找module的话从这里开始查找
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['.js', '.json', '.css'],
    // extensions that are used
    // 模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'module': 'new-module'
    }
  },
  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function (assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  },
  // devtool: "source-map",
  context: __dirname,
  target: 'web',
  // 有时候我们希望某些模块走CDN并以<script>的形式挂载到页面上来加载，但又希望能在 webpack 的模块中使用上。
  // 这时候我们可以在配置文件里使用 externals 属性来帮忙：
  // externals: ["react", /^@angular\//],
  stats: 'errors-only',
  devServer: {
    proxy: {
      // '/api': 'http://10.10.1.14',
      // '/cd' :'http://10.10.1.8:9230'
      '/api': {
        target: 'http://10.10.1.8:9230',
        // target: 'http://wx.dev.51eparty.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      // '/api': 'http://10.10.1.14',
      '/dev': {
        target: 'http://10.10.1.8:9230',
        pathRewrite: {'^/dev': ''}
      }
    },
    inline: true, // 设为true时可以在文件发生变化时，更新页面
    port: 8889,
    disableHostCheck: true,
    // 默认情况下，webpack-dev-server会从项目的根目录提供文件，可以通过此选项设置文件的目录名
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    // 当设置为true时，访问所有服务器上不存在的文件，都会被重定向到/，也就是index.html文件
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true // only errors & warns on hot reload
  },
  plugins: [extractSass].concat(config.plugins),
  profile: true,
  recordsPath: path.resolve(__dirname, 'build/records.json'),
  recordsInputPath: path.resolve(__dirname, 'build/records.json'),
  recordsOutputPath: path.resolve(__dirname, 'build/records.json')
}
if (prod) {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 1000// Minimum number of characters
    }),
    // 压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // supresses warnings, usually from module minification
        warnings: false,
        drop_console: true,
        drop_debugger: true
      },
      comments: false
    })
  ])
} else {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['index.js']
    })
  ])
}
module.exports = webpackConfig
