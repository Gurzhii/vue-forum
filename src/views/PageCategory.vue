<template>
  <div class="col-full">
    <h1>{{ category.name }}</h1>
    <CategoryListItemComponent :category="category"/>
  </div>
</template>

<script>
import CategoryListItemComponent from '@/components/CategoryListItemComponent.vue';
import { categories } from '@/data.json';

export default {
  components: {
    CategoryListItemComponent,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    category() {
      return categories[this.id];
    },
  },
};
</script>
