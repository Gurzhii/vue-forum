<template>
  <div class="flex-grid">
    <UserProfileCard
      v-if="!this.edit"
      :user="user"
    />
     <UserProfileCardEditor
      v-else
      :user="user"
    />
    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead">{{user.username}}'s recent activity</span>
        <a href="#">See only started threads?</a>
      </div>

      <hr />
      <PostListComponent :posts="userPosts"/>
    </div>
  </div>
</template>

<script>
import PostListComponent from '@/components/PostListComponent.vue';
import UserProfileCard from '@/components/UserProfileCardComponent.vue';
import UserProfileCardEditor from '@/components/UserProfileCardEditorComponent.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    PostListComponent,
    UserProfileCard,
    UserProfileCardEditor,
  },
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      user: 'authUser',
    }),
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
