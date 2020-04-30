<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <CategoryListComponent :categories="categories"/>
  </div>
</template>

<script>
import { categories } from '@/data';
import CategoryListComponent from '@/components/CategoryListComponent.vue';

export default {
  components: {
    CategoryListComponent,
  },
  data() {
    return {
      categories,
    };
  },
};
</script>
