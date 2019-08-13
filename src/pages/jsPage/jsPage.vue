<template>
  <div v-highlight>
    <dl>
      <dt>array,obj,set,map的区别简述</dt>
      <dd v-highlight>
        set，array区别set成员的值是唯一的
        set，map的区别map的键不仅仅限于字符串
      </dd>
    </dl>
    <dl>
      <dt>三目运算符</dt>
      <dd v-highlight> const as = x > 1 ? 'red' : 'green'</dd>
    </dl>
    <dl>
      <dt>变量声明</dt>
      <dd v-highlight>let x,y, z=1;</dd>
    </dl>
    <dl>
      <dt>if语句</dt>
      <dd v-highlight>if(true)</dd>
    </dl>
    <dl>
      <dt>多行字符</dt>
      <dd>使用es6 ``符号，不用拼接字符串 </dd>
    </dl>
    <dl>
      <dt>默认值赋值</dt>
      <dd v-highlight>const a = token || 'abcdeedd' </dd>
    </dl>
   <dl>
      <dt>对象属性</dt>
      <dd v-highlight>const obj = {x,y} </dd>
    </dl>
    <dl>
      <dt>箭头函数(=>)，解析结构,展开运算符（...[list])</dt>
      <dd></dd>
    </dl>
    <dl>
      <dt>js属性map</dt>
      <dd>映射，把一个数组映射为另一个数组</dd>
      <dd v-highlight>
        <pre><code>
          let str = '12345678';
          let set = new Set(str);
          console.log(set);
          let arr = Array.from(set);
          console.log(arr);
          let map = arr.map(function(item){
            console.log(item + item)
          })


        </code></pre>
      </dd>
      <dt>shuffle</dt>
      <dd>js打乱数组顺序（如实现音乐的随机播放功能）</dd>
    </dl>
    <div class="img-box"><img ref="imgs" src="http://image.joindata.com/jdfile/e34f523f-612d-4518-94ca-994ee918b26120170427105641.jpg" /></div>

    <pre><code>
      jquery ajax链式用法：
      $.ajax({
          url: "${ctx}/scm-api/cmsColumn/searchColumn/21c502-00bc-db38-0d77-3371-6ada-5432e9",
          dataType: 'json',
          type: 'get'
      })
      .done(function(data) {
          console.log(data)
      })
      .fail(function() {
          alert("失败了...");
      })


      var ajax1 = $.ajax({
          url: '/test/json/a.js',
          dataType: 'json',
          type: 'get'
      });
      var ajax2 = $.ajax({
          url: '/test/json/b.js',
          dataType: 'json',
          type: 'get',
      });
      $.when(ajax1,ajax2).done(function(d1,d2){
          var id1 = d1[0].item.id;
          var id2 = d2[0].item.id;
          alert('id1='+id1+',   '+ 'id2='+ id2);
      }).fail(function(){
          alert('error');
      });
    </code></pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'es6',
      curIndex: 0,
      arr: [
        'http://image.joindata.com/jdfile/e34f523f-612d-4518-94ca-994ee918b26120170427105641.jpg',
        'http://image.joindata.com/jdfile/c665fe6a-9531-424c-9d3f-aabc46baee0020170427173519.jpg',
        'http://image.joindata.com/jdfile/b4dd575c-c946-4619-ba23-11c04296404a20170427105626.jpg'
      ]
    }
  },
  mounted () {
    setInterval(() => {
      this.changeImg()
    }, 2000)
  },
  methods: {
    changeImg () {
      let imgObj = this.$refs.imgs
      if (imgObj) {
        if (this.curIndex === this.arr.length - 1) {
          this.curIndex = 0
        } else {
          this.curIndex += 1
        }
        imgObj.src = this.arr[this.curIndex]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .input-box
    padding: 5px
    border: 1px solid #ddd
    input
      border: none
      font-size: .24rem;
    input::placeholder
      position: relative
      font-size: 20px
      top: 5px
  .img-box
    width: 200px
    height: 200px
    overflow: hidden
  .img-box img
    max-width: 100%
  dl
    font-size: .28rem
    dt
      margin-bottom: .15rem
      color: #333;
    dd
      margin: 0
      font-size: .24rem
  pre
    margin: 0
    code
      padding: 0
  a 
    color: pink
</style>
