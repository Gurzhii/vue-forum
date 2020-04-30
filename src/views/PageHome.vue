<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <CategoryListComponent :categories="categories"/>
  </div>
</template>

<script>
import CategoryListComponent from '@/components/CategoryListComponent.vue';

export default {
  components: {
    CategoryListComponent,
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>
