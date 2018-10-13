<template>
  <div class="manager">
    <nav class="navbar">
      <div class="container">
        <ul class="navbar-list">
          <li class="navbar-item">
            <a class="navbar-link" :class="{'auth__tools': activeView == 'home' }" href="#intro">Home</a>
          </li>
          <li class="navbar-item" :class="{'auth__tools': activeView == 'housing' }">
            <a class="navbar-link" href="#" data-popover="#codeNavPopover">Housing</a>
            
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="#examples" :class="{'auth__tools': activeView == 'settings' }">Settings</a></li>
          <li class="navbar-item">
            <a class="navbar-link" href="#" data-popover="#moreNavPopover">Logout</a>
            
          </li>
        </ul>
      </div>
    </nav>

    <div id="our__view">
      <div class="container">

          <div class="three columns">
            <div class="overview__card"></div>
          </div>

          <div class="three columns">
            <div class="overview__card"></div>
          </div>

          <div class="three columns">
            <div class="overview__card"></div>
          </div>

          <div class="three columns">
            <div class="overview__card"></div>
          </div>

          


        </div>
          
          <div class="listings__container">
            <!-- <div class="five columns">
            <create-listing/>
          </div>
          <div class="seven columns">
            <create-listing/>
          </div> -->
          </div>
      </div>
    </div>
</template>

<style scoped>
.overview__card {
  margin-top: 50px;
  border: 1px solid red;
  padding: 10px;
}
.row {
  max-width: 400px;
}

.container {
  border-color: 1px solid red;;
}

  #our__view {
    position: relative;
    top: 80px;
  }
</style>

<script>
import CreateListing from '@/components/subviews/CreateListing';

export default {
  name: 'ManagerApplication',
  components: {
    CreateListing
  },
  data() {
    return {
      activeView: 'home'
    }
  }
}
</script>

