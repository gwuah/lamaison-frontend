import Vue from "vue";

export default new Vue({
  data() {
    return {
      state: {
        authenticated: false,
        owner: {},
        housings: [],
        housing: {
          location: {
            type: 'Point',
            coordinates: [],
            address: ''
          },
          name: '',
          telephone: '',
          images: [],
          owner_: this.owner.id,
          averageCost: '',
          about: ''
        }
      }
    }
  },
  methods: {
    getAuth() {
      return this.$data.authenticated
    },
    getUserData() {
      return this.$data.owner
    },
    storeUserData(data) {
      this.$data.user = data
    },
    setAuth(bool) {
      this.$data.authenticated = bool
    }
  }

})