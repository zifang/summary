<template>
  <div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">JavaScript</el-menu-item>
      <el-menu-item index="2">ES6</el-menu-item>
      <el-submenu index="3">
        <template slot="title">CSS</template>
        <el-menu-item index="3-1">CSS</el-menu-item>
        <el-menu-item index="3-2">CSS3</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">HTML5</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>  
</template>
<script>
  export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>