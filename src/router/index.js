import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ThreadShow from '@/views/ThreadShow.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
