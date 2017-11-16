<template>
  <div>
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="css3View" name="first">
        <css3-view></css3-view>
      </el-tab-pane>
      <el-tab-pane label="bujuLRFixed" name="second">
        <bujuLRFixed></bujuLRFixed>
      </el-tab-pane>
      <el-tab-pane label="buju" name="third">
        <buju></buju>
      </el-tab-pane>
      <el-tab-pane label="css3Css" name="fourth">
        <css3-css></css3-css>
      </el-tab-pane>
      <el-tab-pane label="css3LG" name="five">
        <css3LG></css3LG>
      </el-tab-pane>
      <el-tab-pane label="juzhong" name="six">
        <juzhong></juzhong>
      </el-tab-pane>
      <el-tab-pane label="twoHeightLine" name="seven">
        <twoHeightLine></twoHeightLine>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import css3View from './css3-view.vue'
import bujuLRFixed from './buju/buju-left-right-fixed.vue'
import buju from './buju/buju.vue'
import css3Css from './css3-css/css3-3d-page.vue'
import css3LG from './css3-css/css3-line-gradient.vue'
import juzhong from './buju/juzhong.vue'
import twoHeightLine from './buju/two-same-hight-line.vue'
export default {
  data () {
    return {
      activeName2: 'first'
    }
  },
  components: {
    css3View,
    bujuLRFixed,
    buju,
    css3Css,
    css3LG,
    juzhong,
    twoHeightLine
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  dl
    font-size: .52rem
    dt
      margin-bottom: .15rem
    dd
      margin: 0
      font-size: .36rem
  pre
    margin: 0
    code
      padding: 0
  a 
    color: pink
</style>
