<template>
  <div class="forum-wrapper">

    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">{{ forum.description }}</p>
        </div>
        <router-link :to="{ name: 'ThreadCreate', params: { forumId: forum['.key'] }}"
          class="btn-green btn-small"
        >
          Start a thread
        </router-link>
      </div>
    </div>

    <div class="col-full push-top">
      <ThreadListComponent :threads="threads"/>
    </div>
  </div>
</template>

<script>
import ThreadListComponent from '@/components/ThreadListComponent.vue';

export default {
  components: {
    ThreadListComponent,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    forum() {
      return this.$store.state.forums[this.id];
    },
    threads() {
      return Object.values(this.$store.state.threads)
        .filter((thread) => thread.forumId === this.id);
    },
  },
};
</script>

<style scoped>
.forum-wrapper {
  width: 100%;
}
</style>
