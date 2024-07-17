<template>
    <div>container</div>
    <div>{{ title }}</div>
</template>

<script lang="tsx">
    export default {
        name: 'Container',
        props: {
            title: String
        }
    }

</script>