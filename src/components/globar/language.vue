<template>
  <div>
    <el-container>
      <el-main>
        <el-row>
          <el-col>
            <h2>编程语言</h2>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="item in languages" :key="item.id">
            <div>
              <circle-progress
                :width="150"
                :radius="10"
                :progress="item.progress"
                :barColor="item.barColor"
                :backgroundColor="'rgba(206, 206, 206, 0.4)'"
                :ref="'progress'"
              ></circle-progress>
              <span>
                <h3>{{item.name}}</h3>
              </span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <h2>Web</h2>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="item in Web" :key="item.id">
            <div>
              <circle-progress
                :width="150"
                :radius="10"
                :progress="item.progress"
                :barColor="item.barColor"
                :backgroundColor="'rgba(206, 206, 206, 0.4)'"
                :ref="'progress'"
              ></circle-progress>
              <span>
                <h3>{{item.name}}</h3>
              </span>
            </div>
          </el-col>
        </el-row>
        <!-- <my-next-button></my-next-button> -->
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'my-language',
  data () {
    return {
      languages: [
        {
          id: 'l1',
          progress: 50,
          name: 'javaScript',
          barColor: '#A3CB38',
          bgColor: 'rgba(206, 206, 206, 0.4)'
        },
        {
          id: 'l2',
          progress: 30,
          name: 'Python',
          barColor: '#A3CB38',
          bgColor: 'rgba(206, 206, 206, 0.4)'
        },
        {          id: 'l3',
          progress: 20,
          name: 'C++',
          barColor: '#A3CB38',
          bgColor: 'rgba(206, 206, 206, 0.4)'
        }
      ],
      Web: [
        {          id: 'w1',
          progress: 40,
          name: 'Mysql',
          barColor: '#ff9f43',
          bgColor: 'rgba(206, 206, 206, 0.4)'
        },
        {          id: 'w2',
          progress: 50,
          name: 'Vue.js',
          barColor: '#ff9f43',
          bgColor: 'rgba(206, 206, 206, 0.4)'
        },
        {          id: 'w3',
          progress: 40,
          name: 'Node.js',
          barColor: '#ff9f43',
          bgColor: 'rgba(206, 206, 206, 0.4)'
        }
      ]
    }
  },
  mounted () {

  },
}

</script>
<style  scoped>
.el-container {
  height: 100vh;
  position: relative;
}
.el-container .el-main {
  padding: 0px;
  position: relative;
  overflow-y: visible;
}
</style>