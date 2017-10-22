<template>
  <div class="hello">
    <dl>
      <dt>iterable</dt>
      <dd>遍历array可以采用下表，但是遍历map和set不行，所以es6推出了iterable，这个类型可以通过for...of循环</dd>
      <dd v-highlight>
        <pre><code>
          let arr = ['1', '2', '3']
          for (let i of arr) {
            console.log('arr:' + i)
          }
          let set = new Set([['1', 11], ['2', 22], ['3', 33]])
          for (let i of set) {
            console.log('set::' + i)
          }
          for (let [key, val] of set) {
            console.log('set-key:' + key)
          }
        </code></pre>
      </dd>
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
    </dl>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'es6'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  h1, h2 
    font-weight: normal
  dl
    font-size: .52rem
    dt
      margin-bottom: .15rem
    dd
      margin: 0
      font-size: .26rem
  pre
    margin: 0
    code
      padding: 0
      margin-left: -.6rem
  a 
    color: pink
</style>
