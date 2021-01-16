<template>
  <div class="my-next-button" @click="nextPage">
    <i class="el-icon-bottom" ref="Nextbutton"></i>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'
export default {
  name: 'my-next-button',
  methods: {
    nextAnimate1 () {
      // this.$refs.Nextbutton.style.top = '10px'
      var tweenDown = new TWEEN.Tween(
        {
          top: 10
        }
      )
      tweenDown.to({
        top: 15
      }, 1000).onUpdate((tween) => {
        this.$refs.Nextbutton.style.top = tween.top + "px"
        // this.$refs.Nextbutton.style.top = tween.top
      }).start()
      var tweenUp = new TWEEN.Tween(
        {
          top: 15
        }
      )
      tweenUp.to({
        top: 10
      }, 800).onUpdate((tween) => {
        this.$refs.Nextbutton.style.top = tween.top + "px"
        // this.$refs.Nextbutton.style.top = tween.top
      }).start()
      tweenDown.chain(tweenUp)
      tweenUp.chain(tweenDown)
      this.StartAnimate()
    },
    StartAnimate () {
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      animate()
    },
    nextPage () {
      new TWEEN.Tween({
        height: window.scrollY
      }).to({
        height: window.innerHeight + window.scrollY
      }, 1500).onUpdate((tween) => {
        window.scrollTo(0, tween.height)
      }).start()
      this.StartAnimate()
      this.$emit('pi-progress')
    }
  },
  mounted () {
    this.nextAnimate1()
  },
}

</script>
<style  scoped>
.my-next-button {
  position: absolute;
  bottom: 45px;
  left: 45%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 30px;
  background: rgba(80, 80, 80, 0.5);
  color: aliceblue;
}
.my-next-button .el-icon-bottom {
  position: absolute;
  left: 15px;
  top: 10px;
}
</style>