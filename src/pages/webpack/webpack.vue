<template>
  <div v-highlight><pre><code>
    webpack打包，框架搭建
    mkdir file-name && cd file-name
    npm init
    npm install webpack -D
    UglifyJsPlugin压缩报错解决方案：加上sourceMap：true
    ExtractTextPlugin剥离css时，使用新式写法：
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
  </code></pre></div> 
</template>

<script>
export default {

}
</script>

<style>

</style>
