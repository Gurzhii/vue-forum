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
      By <a href="#" class="link-unstyled">{{ user.name }}</a>,
      <AppDateComponent :timestamp="thread.publishedAt"/>
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">
        {{ repliesCount }} replies by {{ contributorsCount }} contributors
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
    repliesCount() {
      return this.$store.getters.threadRepliesCount(this.thread['.key']);
    },
    posts() {
      const postIds = Object.values(this.thread.posts);
      return Object.values(this.$store.state.posts).filter((post) => postIds.includes(post['.key']));
    },
    user() {
      return this.$store.state.users[this.thread.userId];
    },
    contributorsCount() {
      const replies = Object.keys(this.thread.posts)
        .filter((postId) => postId !== this.thread.firstPostId)
        .map((postId) => this.$store.state.posts[postId]);
      const userIds = replies.map((post) => post.userId);
      /*eslint-disable */
      return userIds.filter((item, index) => {
        return index === userIds.indexOf(item);
      }).length;
    },
  },
};
</script>
