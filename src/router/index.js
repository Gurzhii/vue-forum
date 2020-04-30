import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ThreadShowPage from '@/views/ThreadShowPage.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShowPage,
    props: true,
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
