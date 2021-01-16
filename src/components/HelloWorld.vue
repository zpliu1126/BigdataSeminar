<template>
  <div class="hello">
    <span id="bookmark">
      <a href="https://biocottonhub.github.io/codeHub/">
        <i class="el-icon-back">Back To Blog</i>
      </a>
    </span>
    <my-team @pi-progress="showProgress"></my-team>
    <my-language ref="language"></my-language>
    <!-- <el-container style="background: rebeccapurple;margin-bottom:20vh">
      <h1>sadsa</h1>
    </el-container>
    -->
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    showProgress () {
      this.$refs.language.$refs.progress.forEach(item => {
        item.progressAnimate()
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container {
  height: 50vh;
}
#bookmark {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
  color: #f79f1f;
}
#bookmark:hover {
  color: #009432;
}
</style>
