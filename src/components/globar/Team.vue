<template>
  <div>
    <el-container>
      <el-main>
        <h1>团队介绍</h1>
        <el-row :gutter="20" type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="6" :lg="6" v-for="man in team" :key="team.indexOf(man)">
            <el-card :body-style="{ padding: '0px' }">
              <el-image :src="man.icon" fit="contain"></el-image>
              <div style="padding: 14px;">
                <a :href="man.github">
                  <span>{{man.name}}</span>
                </a>
                <div class="bottom clearfix"></div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <my-next-button class="hidden-sm-and-down" @pi-progress="$emit('pi-progress')"></my-next-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'my-team',
  data() {
    return {
      team: [
        {
          name: 'zpliu',
          icon: 'https://s1.ax1x.com/2020/04/17/JVIKcF.png',
          github: 'https://github.com/zpliu1126'
        },
        {
          name: 'yxlong',
          icon: 'https://s1.ax1x.com/2020/04/17/JZgfpQ.png',
          github: 'https://github.com/yxlong-science'
        }
      ]
    }
  }
}
</script>
<style  scoped>
.el-container {
  height: 100vh;
  background: #c8d6e5;
}
.el-container .el-main {
  padding: 0px;
  overflow-x: hidden;
}
.el-row .el-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>