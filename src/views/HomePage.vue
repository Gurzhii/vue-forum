<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
import { threads, posts, users } from '@/data';
import ThreadList from '../components/ThreadListComponent.vue';

export default {
  name: 'HelloWorld',
  components: {
    ThreadList,
  },
  data() {
    return {
      threads: Object.values(threads),
      posts,
      users,
    };
  },
};
</script>
