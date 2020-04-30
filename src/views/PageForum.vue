<template>
  <div class="forum-wrapper">

    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">{{ forum.description }}</p>
        </div>
        <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
      </div>
    </div>

    <div class="col-full push-top">
      <ThreadListComponent :threads="threads"/>
    </div>
  </div>
</template>

<script>
import ThreadListComponent from '@/components/ThreadListComponent.vue';
import { forums, threads } from '@/data';

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
      return forums[this.id];
    },
    threads() {
      return Object.values(threads)
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
