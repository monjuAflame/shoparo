import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store.js';// vuex

//npm install vue-firestore --save
import VueFirestore from 'vue-firestore';
require('firebase/firestore');

Vue.use(VueFirestore, {
    key: 'id',         // the name of the property. Default is '.key'.
    enumerable: true  //  whether it is enumerable or not. Default is true.
});
Vue.use(VueFirestore);

//npm install vue-carousel
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

//npm install vue2-filters
import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);


import Swal from 'sweetalert2';
window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});
window.Toast = Toast;



import 'bootstrap';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import './assets/app.scss';

import {fb} from './firebase';

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('add-to-cart', require('./components/AddtoCart.vue').default);
Vue.component('mini-cart', require('./components/MiniCart.vue').default);
Vue.component('Hero', require('./components/Hero.vue').default);

Vue.config.productionTip = false;

const app ='';

fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
	  router,
    store,
	  render: h => h(App)
	}).$mount("#app");
  }
});




