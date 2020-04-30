<template>
  <div class="forum-list">
    <h2 class="list-title">
      <a href="#">Forums</a>
    </h2>
    <ForumListItemComponent
      v-for="forum in forums"
      :key="forum['.key']"
      :forum="forum"
    />
  </div>
</template>

<script>
import ForumListItemComponent from './ForumListItemComponent.vue';

export default {
  components: {
    ForumListItemComponent,
  },
  props: {
    forums: {
      required: true,
      type: Array,
    },
  },
};
</script>
