<template>
  <div class="hello">
    <div class="img-box">
      <img src="../../assets/let.jpg" alt="">
      <img src="../../assets/const.jpg" alt="">
      <img src="../../assets/number.jpg" alt="">
      <img src="../../assets/Array.jpg" alt="">
      <img src="../../assets/jiegou.jpg" alt="">
      <img src="../../assets/function.jpg" alt="">
      <img src="../../assets/object.jpg" alt="">
      <img src="../../assets/set.jpg" alt="">
      <img src="../../assets/map.jpg" alt="">
      <img src="../../assets/promise.jpg" alt="">
    </div>
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
    </dl>
  </div>
</template>

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
  .img-box
    display: flex;
    flex-wrap: wrap;
    img
      display: inline-block;
      flex: 1;
      width: 50%;
      max-width: 100%
</style>
