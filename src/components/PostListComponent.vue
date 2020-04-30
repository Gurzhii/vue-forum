<template>
  <div class="post-list">
    <PostListItemComponent v-for="post in posts" :key="post['.key']" :post="post"/>
  </div>
</template>

<script>
import PostListItemComponent from './PostListItemComponent.vue';

export default {
  props: {
    posts: {
      required: true,
      type: Array,
    },
  },
  components: {
    PostListItemComponent,
  },
};
</script>
