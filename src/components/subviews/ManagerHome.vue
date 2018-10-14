<template>
    <div class="container">
      <div class="row" id="stats__container">
        <statistics 
          v-for="(data, i) in statistics"
          :statistic='data'
          :key="i"
          />
      </div>

      <div class="row">
        <div class="listings__container">
            <div class="six columns">
              <bar-chart/>
          </div>
          <div class="six columns">
              <line-chart/>
          </div>
          
          </div>
      </div>
    </div>
</template>

<style scoped>
#stats__container {
  margin-top: 60px;
}
</style>

<script>
import CreateListing from '@/components/subviews/CreateListing';
import HousingCardOne from '@/components/cards/HousingCardOne';
import Statistics from '@/components/cards/Statistics';
import BarChart from '@/components/charts/BarChart.vue'
import LineChart from '@/components/charts/LineChart.vue'


export default {
  name: 'ManagerHome',
  data() {
    return {
      statistics: [
        {
          icon: 'home',
          stat: 44,
          text: 'Total Listings'
        },
        {
          icon: 'activity',
          stat: 445,
          text: 'Profile Views'
        },
        {
          icon: 'external-link',
          stat: 14,
          text: 'Referral From App'
        }
      ]
    }
  },
  components: {
    CreateListing,
    Statistics,
    BarChart,
    LineChart
  },
  mounted() {
    feather.replace()
  }
}
</script>


