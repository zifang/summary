<template>
  <div>
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="Html5" name="first">
        <div>
          html5新特性:<br>
          web notification:桌面通知
          web storage:web桌面存储
          web 服务器发送事件
          web socket
          web 地理定位(web location)
        </div>
        <details>
          <summary>列表信息</summary>
          <ul>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
          </ul>	
        </details>
          
        好评数：<meter min="1" max="10"  value="8" ></meter>
        中评数：<meter min="1" max="10"  value="2" ></meter>
        差评数：<meter min="1" max="10"  value="2" ></meter>
          
        <form oninput="text3.value=text1.value + text2.value">
          <input name="text1" type="range" value="3">
          <input name="text2" type="range" value="5">
          总和：<output name="text3" for="text1 text2"></output>
        </form>
          
          选择你喜欢的颜色: <input type="color" name="favcolor">
        
        <select name="" id="">
          <optgroup label="标题">
            <option value="">标题1</option>
            <option value="">标题2</option>
            <option value="">标题3</option>
          </optgroup>
          <optgroup label="章节">																			
            <option value="">章节1</option>
            <option value="">章节2</option>
            <option value="">章节3</option>
            <option value="">章节4</option>
            <option value="">章节5</option>
          </optgroup>
        </select>
        <fieldset>
          <legend>aaa</legend>
        </fieldset>
        
        <figure>
          <img src="" alt="dd ">
          <figcaption>dafasdf</figcaption>
        </figure>
        
        <div draggable="true">
          <progress id="progress" min="0" max="100" value="30"></progress>
        </div>
        <table @click="clickTable($event)">
          <tr>
            <td>item1</td>
            <td>item2</td>
            <td>item3</td>
            <td>item4</td>
            <td>item5</td>
          </tr>
          <tr>
            <td>item1</td>
            <td>item2</td>
            <td>item3</td>
            <td>item4</td>
            <td>item5</td>
          </tr>
          <tr>
            <td class="tdclass">item1</td>
            <td>item2</td>
            <td>item3</td>
            <td>item4</td>
            <td>item5</td>
          </tr>
        </table>
      </el-tab-pane>
      <el-tab-pane label="meta" name="two">
        <metaPag></metaPag>
      </el-tab-pane>
      <el-tab-pane label="canvas" name="three">
        <canvasPage></canvasPage>
      </el-tab-pane>
      <el-tab-pane label="常用网址" name="four">
        <commonLink></commonLink>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import metaPag from './meta.vue'
import commonLink from './commonLink.vue'
import canvasPage from './canvas/canvas1.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeName2: 'first'
    }
  },
  components: {
    metaPag,
    canvasPage,
    commonLink
  },
  methods: {
    clickTable (event) {
      if (event || window.event) {
        event = event.target || event.srcElement
        if (event.tagName.toLowerCase() === 'td' && event.className !== 'tdclass') {
          alert(event.textContent)
        }
      }
    },
    handleClick (tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  table
    margin-top: 10px
    border-left: 1px solid #ddd
    border-top: 1px solid #ddd
    border-collapse: collapse
  table td
    border-bottom: 1px solid #ddd
    border-right: 1px solid #ddd
    padding: 10px
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
