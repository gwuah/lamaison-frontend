<template>
  <div class="container">
    <header class="row">
      <router-link class="button auth__btns" to="/authenticate?q=login">Login</router-link>
      <router-link class="button auth__btns" to="/authenticate?q=register">Register</router-link> 
    
      <h1 class="name">{{appName}}</h1>
      <h3 class="tagline">{{tagline}}</h3>
      <hr class="index_hr"/>

      <!-- <div class="row">
        <div class="two columns hide">
          ffffffffffffffff
        </div>
        <div class="eight columns" style="text-align:center">
          <gmap-autocomplete placeholder="enter your location here ..." class="two-thirds-width" id="search__input" @place_changed="setPlace"/>
          <a class="button button-primary" href="#">Anchor button</a>
        </div>
        <div class="two columns hide">
          ffffffffffffffff
        </div>
      </div> -->

      <div class="row">
        <div class="two columns hide">
          ffffffffffffffff
        </div>
        <div class="seven columns">
          <gmap-autocomplete 
            placeholder="Enter the closest landmark to your location here ..." 
            class="u-full-width" 
            id="search__input" 
            @place_changed="setPlace"
            />
            <a class="button" id="getMaison" href="#">Search</a>
        </div>

        <div class="two columns hide">
          ffffffffffffffff
        </div>
  
      </div>
      
    </header>

    <div class="row">
      <housing-card-two/>
      <housing-card-two/>
      <housing-card-two/>
    </div>
    <div class="row">
      <housing-card-two/>
      <housing-card-two/>
      <housing-card-two/>
    </div>
  </div>
</template>

<style scoped>
  .hide {
    opacity: 0;
  }
</style>


<script>
import HousingCardOne from '@/components/cards/HousingCardOne';
import HousingCardTwo from '@/components/cards/HousingCardTwo';

export default {
  name: 'home',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      appName: 'La Maison',
      tagline: 'Find the closest apartment, hostel to you with ease.'
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      console.log(place);
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  },
  components: {
    HousingCardOne,
    HousingCardTwo
  }
}
</script>
