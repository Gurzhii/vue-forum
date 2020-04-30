<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.headingLarge">Not found</h1>
    <p :class="$style.textLarge">
      Oops, we coouldn't find the page. Why don't you
      <router-link :to="{ name: 'Home' }">
        go home instead?
      </router-link>
    </p>
  </div>
</template>

<style module>
.headingLarge {
  font-size: 50;
}
.textLarge {
  font-size: 30px;
}
.centered {
  text-align: center;
}
</style>
