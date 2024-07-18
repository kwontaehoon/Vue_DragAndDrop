<template>
    <div class="bg-white rounded-lg shadow my-4 px-3 py-2 flex items-center">
        <div class="flex-1 mr-4">{{ title }}</div>
        <div class="flex text-xs gap-2">
            <div>Update</div>
            <div>Del</div>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    props: {
        title: String
    }
}
</script>

<style scoped></style>