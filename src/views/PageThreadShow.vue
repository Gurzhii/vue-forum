<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <p>
      By <a href="#" class="link-unstyled">Robin</a>,
      <AppDateComponent :timestamp="thread.publishedAt"/>
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">
        3 replies by 3 contributors
      </span>
    </p>
    <PostListComponent :posts="posts"/>
    <PostEditoComponent
      :threadId="id"
      @save="addPost"
    />
  </div>
</template>

<script>
import { threads, posts, users } from '@/data';
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
  methods: {
    addPost({ post }) {
      const postId = post['.key'];
      this.$set(posts, postId, post);
      this.$set(this.thread.posts, postId, postId);
      this.$set(users[post.userId].posts, postId, postId);
    },
  },
};
</script>
