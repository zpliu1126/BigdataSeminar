
<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  name: 'LineChart',
  mixins: [reactiveProp],
  extends: Line,
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}

</script>
<style lang='' scoped>
</style>