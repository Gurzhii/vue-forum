import Vue from 'vue';
import AppDateComponent from '@/components/AppDateComponent.vue';
import App from './App.vue';
import router from './router/index';
import store from './store';

Vue.config.productionTip = false;

Vue.component('AppDateComponent', AppDateComponent);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
