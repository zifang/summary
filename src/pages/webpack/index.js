// 用于创建html文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// 拷贝资源插件
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: {
    billData: ['./src/billData.js'],
    billDetail: ['./src/billDetail.js'],
    shopHome: ['./src/shopHome.js'],
    marketing1: ['./src/marketing1.js'],
    marketing2: ['./src/marketing2.js'],
    marketing3: ['./src/marketing3.js'],
    dishesData: ['./src/dishesData.js'],
    marketManage: ['./src/marketManage.js'],
    evaluate: ['./src/evaluate.js'],
    orderData: ['./src/orderData.js'],
    tableData: ['./src/tableData.js'],
    turnover: ['./src/turnover.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['billData'],
      filename: './billData.html',
      template: './billData.html',
      inject: true, // 默认值，script标签位于html文件的 body 底部
      // inject: body, // 同上
      // inject: head, // script 标签位于 head 标签内
      // inject: false, // 不插入生成的 js 文件，只是单纯的生成一个 html 文件
      minify: {
        removeComments: true, // 移除属性的引号
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['billDetail'],
      filename: './billDetail.html',
      template: './billDetail.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['shopHome'],
      filename: './shopHome.html',
      template: './shopHome.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['marketing1'],
      filename: './marketing1.html',
      template: './marketing1.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['marketing2'],
      filename: './marketing2.html',
      template: './marketing2.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['marketing3'],
      filename: './marketing3.html',
      template: './marketing3.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['dishesData'],
      filename: './dishesData.html',
      template: './dishesData.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['marketManage'],
      filename: './marketManage.html',
      template: './marketManage.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['evaluate'],
      filename: './evaluate.html',
      template: './evaluate.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['orderData'],
      filename: './orderData.html',
      template: './orderData.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['tableData'],
      filename: './tableData.html',
      template: './tableData.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['turnover'],
      filename: './turnover.html',
      template: './turnover.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
      'isProd': process.env.NODE_ENV === 'production'
    }),
    new CopyWebpackPlugin([
            // { from: 'images', to: 'images' },
            { from: 'css', to: 'css' },
            // { from: 'js', to: 'js' },
            { from: 'index.html', to: 'index.html' }
            // { from: 'tableData.html', to: 'tableData.html' },
            // { from: 'orderData.html', to: 'orderData.html' },
            // { from: 'turnover.html', to: 'turnover.html' }
    ])
        // new HtmlWebpackPlugin({
        //     chunks: ['turnover'],
        //     filename: './turnover.html',
        //     template: './turnover.html',
        //     minify: {
        //         removeComments: true,
        //         collapseWhitespace: true
        //     }
        // }),
  ]
}
