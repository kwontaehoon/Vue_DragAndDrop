<template>
    <div>sub</div>
    <RouterLink to="/">Go to Home</RouterLink>
    <div @click="store.increment">{{ store }}</div>
    <Container title="title props"/>
</template>

<script lang="jsx">
    import { store } from '@/store';
    import Container from './Container.vue'

    export default {
        components: {
            Container
        },
        data() {
            return {
                store
            }
        }
    }
</script>