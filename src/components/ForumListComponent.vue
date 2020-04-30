<template>
  <div>
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
