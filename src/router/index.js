import Vue from 'vue';
import Router from 'vue-router';
import PageHome from '@/views/PageHome.vue';
import PageThreadShow from '@/views/PageThreadShow.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import PageForum from '@/views/PageForum.vue';
import PageCategory from '@/views/PageCategory.vue';
import PageProfile from '@/views/PageProfile.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome,
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: PageForum,
    props: true,
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: PageCategory,
    props: true,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
  },
  {
    path: '/me',
    name: 'Profile',
    component: PageProfile,
    props: true,
  },
  {
    path: '/me/edit',
    name: 'ProfileEdit',
    component: PageProfile,
    props: {
      edit: true,
    },
  },
  {
    path: '*',
    name: 'NotFound',
    component: PageNotFound,
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
