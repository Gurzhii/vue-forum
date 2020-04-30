<template>
  <div class="col-full">
    <h1>{{ category.name }}</h1>
    <CategoryListItemComponent :category="category"/>
  </div>
</template>

<script>
import CategoryListItemComponent from '@/components/CategoryListItemComponent.vue';

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
      return this.$store.state.categories[this.id];
    },
  },
};
</script>
