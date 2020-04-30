import Vue from 'vue';
import AppDateComponent from '@/components/AppDateComponent.vue';
import App from './App.vue';
import router from './router/index';

Vue.config.productionTip = false;

Vue.component('AppDateComponent', AppDateComponent);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
