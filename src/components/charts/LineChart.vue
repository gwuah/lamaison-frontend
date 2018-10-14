<template>
    <div>
      <apexcharts 
        width="100%" 
        type="line" 
        :options="chartOptions" 
        :series="series">
      </apexcharts>
    </div>
  </template>

  <script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'LineChart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      fill: {
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
      },
      series: [{
        name: 'series-1',
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  },
}
</script>
