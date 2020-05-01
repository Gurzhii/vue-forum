<template>
  <div id="app">
    <TheNavbarComponent/>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbarComponent from '@/components/TheNavbarComponent.vue';

export default {
  components: {
    TheNavbarComponent,
  },
};
</script>

<style>
@import './assets/css/style.css';
</style>
