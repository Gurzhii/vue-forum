<template>
  <div>
    <CategoryListItemComponent
      v-for="category in categories"
      :category="category"
      :key="category['.key']"
    />
  </div>
</template>

<script>
import CategoryListItemComponent from './CategoryListItemComponent.vue';

export default {
  components: {
    CategoryListItemComponent,
  },
  props: {
    categories: {
      required: true,
      type: Object,
    },
  },
};
</script>
