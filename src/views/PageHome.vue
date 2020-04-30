<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <ForumListComponent :forums="forums"/>
  </div>
</template>

<script>
import { forums, posts, users } from '@/data';
import ForumListComponent from '@/components/ForumListComponent.vue';

export default {
  name: 'HelloWorld',
  components: {
    ForumListComponent,
  },
  data() {
    return {
      forums: Object.values(forums),
      posts,
      users,
    };
  },
};
</script>
