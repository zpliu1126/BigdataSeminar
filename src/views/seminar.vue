<template>
  <div class="about">
    <h1>The seminar of Big data group</h1>
    <timeliner timelineColor="#5bbcd5" timeContentColor="#fff" :dataList="data"></timeliner>
  </div>
</template>
<script>
import axios from 'axios'
const request = axios.create({
  baseURL: 'https://zpliu1126.github.io',
  timeout: 12000,
  headers: {
    'content-Type': 'application/json',
    Accept: 'application/json'
  }
})
export default {
  data () {
    return {
      data: []

    }
  },
  beforeCreate () {
    request.get('/seminar.json').then(
      res => {
        this.data = res['data']
      }
    )
  },
}
</script>
