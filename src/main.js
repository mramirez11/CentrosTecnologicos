import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Axios from 'axios';
import Vuex from "vuex";
import VueAxios from 'vue-axios';

// Importacion de libreria de Iconos
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// Importacion libreria para tipo moneda
import VCurrencyField from 'v-currency-field'
import { VTextField } from 'vuetify/lib'  //Globally import VTextField

// Necesario para configurar v-currency
Vue.component('v-text-field', VTextField)
Vue.use(VCurrencyField, {
  locale: "es-CL", 
  decimalLength: 0,
	min: null,
	max: null,
	//defaultValue: 0,
  valueAsInteger: true,
})

Vue.config.productionTip = false
Vue.use(VueAxios,Axios)
Vue.use(Vuex)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
