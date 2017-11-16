<template>
  <div v-highlight>
		<button @click="$router.go(-1)">返回</button>
    <pre><code>
      css-loader:在页面中以import或者require的形式引入css文件
      安装less: less,less-loader
      安装stylus: stylus,stylus-loader
      安装sass: sass,sass-loader,node-sass
    </code></pre>
	  <span class="pull-right">{{item.status | orderStatus}}<span v-show="item.status==4 || item.status == 3" :class="{colorBrown:item.evaluateStatus==0}">（{{item.evaluateStatus | commentStatus}}）</span>
	  </span>
	  <span @click="checked(item)" :style="colors">选中状态 {{item.checked}}</span>
	  <span @click="checked(item)" :style="{color: textCor}">选中状态 {{item.checked}}</span>
  </div> 
</template>

<script>
	export { default } from './vueSummary.js'
</script>
