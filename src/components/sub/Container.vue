<template>
    <div>container</div>
    <div>{{ title }}</div>
</template>

<script lang="jsx">
    export default {
        name: 'Container',
        props: {
            title: String
        }
    }

</script>