import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from "vuex";

Vue.config.productionTip = false
Vue.use(VueAxios,Axios)
Vue.use(Vuex)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
