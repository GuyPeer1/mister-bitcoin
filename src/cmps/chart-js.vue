<template>
  <Line :data="lineChartData" :options="lineChartOptions" />
</template>
<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
export default {
  name: 'App',
  components: {
    Line
  },
  props: ['data'],
  data() {
    return {
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      lineChartData: {
        labels: this.data.values
          .filter((_, index) => index % 15 === 0)
          .map((d: { x: number }) => new Date(d.x * 1000).toLocaleDateString().split(" ").slice(0, 2).join(" ")),
        datasets: [
          {
            label: this.data.name,
            data: this.data.values
              .filter((_, index) => index % 15 === 0)
              .map((d: { y: any }) => d.y),
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      }
    }
  },
}
</script>