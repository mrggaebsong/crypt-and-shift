import Vue from 'vue';
import App from './App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { routes } from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios,axios)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
