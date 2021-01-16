<template>
  <div class="my-footer">
    <el-row>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" style="margin-top:20px">
        <img
          height="50%"
          width="50%"
          src="https://biocottonhub.github.io/codeHub/uploads/themeImg/logo.png"
          alt
        />
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6">
        <div class="footer-message">
          <h2>Address</h2>
          <p>
            武汉华中农业大学
            作物遗传改良国家重点实验室4F
          </p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6">
        <div class="footer-message">
          <h2>Contacts</h2>
          <p>Email:1944532201@qq.com</p>
          <p>Phone:(+86)15071228394</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6">
        <div class="footer-message">
          <h2>Links</h2>
          <div>
            <a href="https://github.com/orgs/BiocottonHub/teams/codehub">
              <i class="el-icon-s-promotion" style="font-size: 5rem;color:white;"></i>
            </a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'my-footer',
}

</script>
<style  scoped>
.my-footer {
  position: relative;
  background: #2e2e2e;
  padding-top: 10px;
  padding-bottom: 10px;
}
.footer-message {
  text-align: left;
  color: aliceblue;
}
</style>