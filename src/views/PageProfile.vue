<template>
  <div class="flex-grid">
    <!-- <UserProfileCard
      :userPostsCount="userPostsCount"
      :userThreadsCount="userThreadsCount"
      :user="user"
    /> -->
     <UserProfileCardEditor
      :userPostsCount="userPostsCount"
      :userThreadsCount="userThreadsCount"
      :user="user"
    />
    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead">Joker's recent activity</span>
        <a href="#">See only started threads?</a>
      </div>

      <hr />
      <PostListComponent :posts="userPosts"/>
    </div>
  </div>
</template>

<script>
import PostListComponent from '@/components/PostListComponent.vue';
// import UserProfileCard from '@/components/UserProfileCardComponent.vue';
import UserProfileCardEditor from '@/components/UserProfileCardEditorComponent.vue';
import { mapGetters } from 'vuex';
import { countObjectProperties } from '@/utils';

export default {
  components: {
    PostListComponent,
    // UserProfileCard,
    UserProfileCardEditor,
  },
  computed: {
    ...mapGetters({
      user: 'authUser',
    }),
    userThreadsCount() {
      return countObjectProperties(this.user.threads);
    },
    userPostsCount() {
      return countObjectProperties(this.user.posts);
    },
    userPosts() {
      if (this.user.posts) {
        return Object.values(this.$store.state.posts)
          .filter((post) => post.userId === this.user['.key']);
      }
      return [];
    },
  },
};
</script>
