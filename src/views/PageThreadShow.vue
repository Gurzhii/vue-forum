<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostListComponent :posts="posts"/>
  </div>
</template>

<script>
import { threads, posts } from '@/data';
import PostListComponent from '@/components/PostListComponent.vue';

export default {
  components: {
    PostListComponent,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      thread: threads[this.id],
    };
  },
  computed: {
    posts() {
      const postIds = Object.values(this.thread.posts);
      return Object.values(posts).filter((post) => postIds.includes(post['.key']));
    },
  },
};
</script>
