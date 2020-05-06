<template>
  <div class="col-large push-top">
    <h1>
      {{ thread.title }}
      <router-link
        :to="{ name: 'ThreadEdit', id }"
        class="btn-green btn-small"
        tag="button"
      >
        Edit Thread
      </router-link>
    </h1>
    <p>
      By <a href="#" class="link-unstyled">Robin</a>,
      <AppDateComponent :timestamp="thread.publishedAt"/>
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">
        3 replies by 3 contributors
      </span>
    </p>
    <PostListComponent :posts="posts"/>
    <PostEditoComponent :threadId="id"/>
  </div>
</template>

<script>
import PostListComponent from '@/components/PostListComponent.vue';
import PostEditoComponent from '@/components/PostEditorComponent.vue';

export default {
  components: {
    PostListComponent,
    PostEditoComponent,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    thread() {
      return this.$store.state.threads[this.id];
    },
    posts() {
      const postIds = Object.values(this.thread.posts);
      return Object.values(this.$store.state.posts).filter((post) => postIds.includes(post['.key']));
    },
  },
};
</script>
