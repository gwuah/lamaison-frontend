import './registerServiceWorker'
import router from './router'
import App from './App.vue'
import store from './store'
import Axios from 'axios'
import Vue from 'vue'

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDwxfea8ecYMmGKMO39JF1ko5bhF4UocpM",
    libraries: "places" // necessary for places input
  }
});

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

const token = localStorage.getItem('token');
token 
  ? Vue.prototype.$http.defaults.headers.common['Authorization'] = token
  : null

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
