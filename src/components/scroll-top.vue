<template>
  <transition name="fade-in">
    <div v-show="isShow">
      <div class="scrolltop" @click="scrollToTop">🔝</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ScrollTop',
  props: {
    showScroll: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShow: false,
      target: ''
    }
  },
  mounted () {
    this.target = document.body
    window.addEventListener('scroll', this.showBox)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.showBox)
  },
  methods: {
    showBox () {
      if (this.target.scrollTop > 100) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    scrollToTop () {
      let timer = setInterval(() => {
        let top = this.target.scrollTop
        let speed = Math.ceil(top / 8)
        this.target.scrollTop = top - speed
        if (top === 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  }
}
</script>

<style lang="sass">
  .fade-in-enter-active
    transition: all .2s ease
  .fade-in-enter,.fade-in-leave-to
    opacity: 0
  .fade-in-leave-active
    transition: all .2s cubic-bezier(1.0, 0.3, 0.8, 1.0);
    opacity: 0
  .scrolltop
    position: fixed
    bottom: .5rem
    right: .2rem
    width: 1rem
    height: 1rem
    background-color: #f1f1f1
    border-radius: .1rem
    font-size: .8rem
    text-align: center
    padding-top: .2rem
    color: #dadada
    &:hover
      cursor: pointer
      background-color: #dadada
      color: #999
      transition: all .2s ease-in
</style>
