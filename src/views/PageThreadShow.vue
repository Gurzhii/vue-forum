<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostListComponent :posts="posts"/>
    <form @submit.prevent="addPost">
      <div class="form-group">
        <textarea
          v-model="newPostText"
          cols="30"
          rows="10"
          class="form-input"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { threads, posts, users } from '@/data';
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
      newPostText: '',
    };
  },
  computed: {
    posts() {
      const postIds = Object.values(this.thread.posts);
      return Object.values(posts).filter((post) => postIds.includes(post['.key']));
    },
  },
  methods: {
    addPost() {
      const postId = `greatPost${Math.random()}`;
      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'Miej9zSGMRZKDvMXzfxjVOyv3RF3',
        '.key': postId,
      };
      this.$set(posts, postId, post);
      this.$set(this.thread.posts, postId, postId);
      this.$set(users[post.userId].posts, postId, postId);
      this.newPostText = '';
    },
  },
};
</script>
