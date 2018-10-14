<template>
    <div class="container">
      ;dsjfdfdhflhdfhdhfdbvjdbs   hshe
      <div class="row" id="stats__container">
        <statistics 
          v-for="(data, i) in statistics"
          :statistic='data'
          :key="i"
          />
      </div>

      <div class="row">
        <div class="listings__container">
            <div class="five columns">
            <create-listing/>
          </div>
          <div class="seven columns">
            <create-listing/>
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
// import HousingCardOne from '@/components/cards/HousingCardOne';
import Statistics from '@/components/cards/Statistics';

export default {
  name: 'ManagerSettings',
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
    Statistics
  },
  mounted() {
    feather.replace()
  }
}
</script>


