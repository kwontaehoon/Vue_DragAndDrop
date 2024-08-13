<!-- setup -->
<template>
    <component :is="true ? Children : Bar" />
</template>

<script setup>
import Children from './Children.vue'

</script>


<style lang="scss" scoped>

</style>