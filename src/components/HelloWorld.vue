<template>
  <div>
    <h1>Welcome to the Forum</h1>
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
import { threads, posts, users } from '@/data';
import ThreadList from './ThreadListComponent.vue';

export default {
  name: 'HelloWorld',
  components: {
    ThreadList,
  },
  mounted() {
    console.log(threads);
  },
  data() {
    return {
      threads,
      posts,
      users,
    };
  },
};
</script>
