<template>
  <div id="hzqing" ref="timeline">
    <div class="timeline">
      <div class="timeline-row" v-for="(item,index) in dataList" :key="index">
        <div class="timeline-time">
          <span>{{ item.time | formatDate }}</span>
        </div>
        <div class="timeline-img">
          <avatar style="border-radius: 50%;" username="L Z P" :src="item.img" :size="60"></avatar>
        </div>
        <div class="timeline-content">
          <div class="content-body">
            <h2>{{ item.title }}</h2>
            <ul class="paperList" v-for="(paper,index2) in item.content" :key="index2">
              <li>
                <a
                  :href="paper.url"
                  @click="preventJump(paper.url,$event)"
                  target="_Blank"
                  :style="haveNote(paper.url)"
                >{{paper.title}}</a>
                <div class="author">
                  <el-row>
                    <el-col
                      :xs="12"
                      :sm="12"
                      :md="4"
                      :lg="6"
                      :xl="6"
                      v-for="(ca,index3) in paper.category"
                      :key="index3"
                    >
                      <el-tag effect="plain">{{ca}}</el-tag>
                    </el-col>
                    <el-col>
                      <span class="el-icon-lollipop">{{paper.author}}</span>
                    </el-col>
                    <el-col>
                      <a :href="paper.source" target="_Blank">
                        <el-tag effect="dark">原文链接</el-tag>
                      </a>
                    </el-col>
                  </el-row>
                </div>
              </li>
            </ul>
            <div class="powerpoint">
              <a :href="item.powerpointUrl" target="_Blank">
                <el-button type="success" round icon="el-icon-download">powerpoint</el-button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parseTime } from '../../utils/changeTime.js'
import Avatar from 'vue-avatar'
export default {
  name: 'timeliner',
  components: {
    Avatar
  },
  data() {
    return {
      timeItemList: [
        {
          time: '1522372393000',
          img: 'static/touxiang.jpeg',
          title: 'hzqing.com',
          content: '这是衡钊清的个人博客'
        }
      ]
    }
  },
  props: {
    dataList: {
      type: Array,
      default: () => {
        this.timeItemList
      }
    },
    timelineColor: {
      // 组建背景颜色
      type: String,
      default: '#5bbcd5'
    },
    timeContentColor: {
      type: String,
      default: '#f2f2f2'
    }
  },
  methods: {
    haveNote(url) {
      if (url == '') {
        return { color: '#7f8c8d' }
      }
    },
    preventJump(url, event) {
      if (url == '') {
        event.preventDefault() //阻止跳转事件
        this.$message({
          message: "Sorry this paper don't  have note",
          type: 'warning'
        })
      }
    }
  },
  filters: {
    formatDate(time) {
      return parseTime(new Date(time).getTime(), '{y}年{m}月{d} {h}:{i}')
    }
  },
  mounted() {
    const timeline = this.$refs.timeline
    timeline.style.setProperty('--timelineColor', this.timelineColor)
    timeline.style.setProperty('--timeContentColor', this.timeContentColor)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.paperList {
  position: relative;
  text-align: left;
  a {
    text-decoration: none;
  }
  li {
    div {
      text-align: right;
      color: #f39c12;
      span {
        margin-right: 5px;
      }
      span:nth-last-child(3) {
        margin-right: 40px;
      }
    }
  }
}
.powerpoint {
  position: relative;
  text-align: right;
}
#hzqing {
  list-style: none;
  position: relative;
  padding: 20px;
  margin: 0 auto;
  overflow: hidden;
  background: var(--timelineColor);
  font-family: '微软雅黑', Arial, Helvetica, sans-serif;
  .timeline-row {
    padding-left: 50%;
    z-index: 10;
    position: relative;
    .timeline-time {
      position: absolute;
      right: 50%;
      text-align: right;
      margin-right: 60px;
      font-size: 17px;
      line-height: 35px;
      top: 40px;
    }
    .timeline-img {
      position: absolute;
      top: 30px;
      left: 49%;
      margin-left: -15px;
      width: 60px;
      height: 60px;
      text-align: center;
      overflow: hidden;
      padding: 3px;
      font-size: 14px;
      z-index: 100;
    }
    .timeline-content {
      position: relative;
      background: var(--timeContentColor);
      color: #333333;
      border-radius: 5px;
      margin-right: 0px;
      margin-left: 60px;
      margin-bottom: 20px;
      min-height: 80px;
      .content-body {
        padding: 15px 15px 2px;
        position: relative;
        z-index: 10;
        h2 {
          font-size: 20px;
          margin-bottom: 12px;
          margin-top: 0;
          line-height: 15px;
          font-weight: 600;
        }
        p {
          margin: 0px 0px 15px;
        }
      }
    }
    .timeline-content:after {
      content: '';
      position: absolute;
      top: 60px;
      left: -60px;
      height: 4px;
      width: 80px;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: -1;
    }
  }
  .timeline-row:nth-child(odd) {
    // 奇数样式
    padding-left: 0;
    padding-right: 50%;
    .timeline-time {
      right: auto;
      left: 50%;
      text-align: left;
      margin-right: 0;
      margin-left: 60px;
    }
    .timeline-content {
      margin-right: 60px;
      margin-left: 0px;
    }
    .timeline-content:after {
      left: auto;
      right: -60px;
    }
  }
  @media screen and (max-width: 1200px) {
    .timeline {
      .timeline-row {
        position: relative;
        right: auto;
        top: 0;
        margin: 0 0 6px 56px;
        padding: 0;
        margin-bottom: 16px;
      }
      .timeline-row:nth-child(odd) {
        padding-right: 0;
        .timeline-content {
          margin-right: 0px;
          margin-left: 40px;
        }
        .timeline-time {
          position: relative;
          right: auto;
          left: auto;
          top: 0;
          text-align: left;
          margin: 0 0 0px 40px;
        }
      }
      .timeline-img {
        top: 40px;
        left: -55px;
        margin-left: 0;
        padding: 0px;
      }
      .timeline-time {
        position: relative;
        right: auto;
        left: auto;
        top: 0;
        text-align: left;
        font-size: 15px;
        margin: 0 0 0px 40px;
      }
      .timeline-content {
        margin-left: 40px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        position: relative;
      }
      .timeline-content:after {
        right: auto !important;
        left: -65px !important;
        top: 30px;
      }
    }
    .timeline:after {
      left: 50px;
    }
  }
}
.timeline:after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 4px;
  border-radius: 2px;
  margin-left: -2px;
  display: block;
}
</style>