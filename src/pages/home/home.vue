<template>
  <div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo title-fixed" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">JavaScript</el-menu-item>
      <el-menu-item index="2">ES6</el-menu-item>
      <el-submenu index="3">
        <template slot="title">CSS</template>
        <el-menu-item index="3-1">CSS</el-menu-item>
        <el-menu-item index="3-2">CSS3</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">HTML5</el-menu-item>
      <el-menu-item index="5">Text</el-menu-item>
      <el-menu-item index="6">Git</el-menu-item>
      <el-menu-item index="7">Vue</el-menu-item>
      <el-menu-item index="8">webpack</el-menu-item>
      <el-menu-item index="9">常用插件</el-menu-item>
    </el-menu>
    <components class="content" :is="currentView"></components>
    <scroll-top></scroll-top>
  </div>  
</template>
<script>
  import Vue from 'vue'
  import Jspage from '@/pages/jsPage/jsPage.vue'
  import ScrollTop from '@/components/scroll-top.vue'
  Vue.component(ScrollTop.name, ScrollTop)
  export default {
    data () {
      return {
        activeIndex: '1',
        currentView: ''
      }
    },
    created () {
      this.currentView = Jspage
    },
    methods: {
      handleSelect (key, keyPath) {
        if (key === '1') {
          this.currentView = Jspage
        } else if (key === '2') {
          import('@/pages/jsPage/es6.vue').then(es6 => {
            this.currentView = es6.default
          })
        } else if (key === '3-1') {
          import('@/pages/cssPage/cssPage.vue').then(cssPage => {
            this.currentView = cssPage.default
          })
        } else if (key === '4') {
          import('@/pages/htmlPage/htmlPage.vue').then(htmlPage => {
            this.currentView = htmlPage.default
          })
        } else if (key === '5') {
          import('@/pages/text/property.vue').then(text => {
            this.currentView = text.default
          })
        } else if (key === '6') {
          import('@/pages/git/git.vue').then(text => {
            this.currentView = text.default
          })
        } else if (key === '7') {
          import('@/pages/vuePage/vueSummary.vue').then(text => {
            this.currentView = text.default
          })
        } else if (key === '8') {
          import('@/pages/webpack/webpack.vue').then(text => {
            this.currentView = text.default
          })
        } else if (key === '9') {
          import('@/pages/plugins/plugins.vue').then(text => {
            this.currentView = text.default
          })
        }
        console.log(key, keyPath)
      }
    }
  }
</script>