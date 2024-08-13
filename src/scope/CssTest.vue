<!-- 스코프 css -->
<!-- css v-bind -->
<style scoped>
.example {
  color: red;
}
p {
  color: v-bind('theme.color');
}
</style>

<template>
  <div class="example">안녕!</div>
  <Children />
  
  <p>1111</p>
</template>

<script setup>
import Children from './Children.vue';

const theme = {
  color: 'purple'
}

</script>