<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{name: 'Category', params: {id: category['.key']}}">
        {{ category.name }}
      </router-link>
    </h2>
    <ForumListComponent :forums="categoryForums" />
  </div>
</template>

<script>
import { forums } from '@/data.json';
import ForumListComponent from './ForumListComponent.vue';

export default {
  components: {
    ForumListComponent,
  },
  props: {
    category: {
      required: true,
      type: Object,
    },
  },
  computed: {
    categoryForums() {
      return Object.values(forums).filter((forum) => forum.categoryId === this.category['.key']);
    },
  },
};
</script>
